import {gunzipSync, unzlibSync} from 'fflate'

import {
    copyArray,
    encodeMsgBody,
    encodeMsgFlag,
    encodeMsgId,
    encodeMsgRoute,
    msgHasId,
    msgHasRoute,
    caculateMsgIdBytes
} from './utils'
import {
    PKG_HEAD_BYTES,
    MSG_COMPRESS_ROUTE_MASK,
    MSG_FLAG_BYTES,
    MSG_ROUTE_CODE_BYTES,
    MSG_ROUTE_LEN_BYTES,
    MSG_TYPE_MASK,
} from './constant'

export enum PackageTypes {
    TYPE_HANDSHAKE = 1,
    TYPE_HANDSHAKE_ACK,
    TYPE_HEARTBEAT,
    TYPE_DATA,
    TYPE_KICK
}

export enum MessageTypes {
    TYPE_REQUEST,
    TYPE_NOTIFY,
    TYPE_RESPONSE,
    TYPE_PUSH
}

const ByteArray = Uint8Array
const utf8Encoder = new TextEncoder()
const utf8Decoder = new TextDecoder('UTF-8')

const enum CompressionType {
    UnCompression,
    Zlib    ,
    Gzip    ,
}

/**
 * 检查指定输入包是否为 zlib 或 gzip 压缩
 * @param data
 * @returns boolean
 */
function isCompressed(data: Uint8Array): CompressionType {
    const d0 = data[0]
    const d1 = data[1]

    if (data.length > 2) {
        if (d0 === 0x78 &&
            (d1 === 0x9C ||
                d1 === 0x01 ||
                d1 === 0xDA ||
                d1 === 0x5E)) {
            return CompressionType.Zlib
        } else if (d0 === 0x1F && d1 === 0x8B) {
            return CompressionType.Gzip
        }
    }

    return CompressionType.UnCompression
}

/**
 * 按照指定压缩格式，对内容进行解压缩展开
 * @param data
 */
 function inflateData(data: Uint8Array) {
    const type = isCompressed(data)

    switch (type) {
        case CompressionType.Zlib:
            return unzlibSync(data)
        case CompressionType.Gzip:
            return gunzipSync(data)
        default:
            return data
    }
}

class Protocol {
    static strencode(str: any) {
        return utf8Encoder.encode(str)
    }

    static strdecode(buffer: any) {
        return utf8Decoder.decode(inflateData(buffer))
    }

    static inflate(data: Uint8Array) {
        return inflateData(data)
    }
}


class PackageProtocol {
    static encode(type: number, body?: Uint8Array) {
        let length = body ? body.length : 0;
        let buffer = new ByteArray(PKG_HEAD_BYTES + length);
        let index = 0;
        buffer[index++] = type & 0xff;
        buffer[index++] = (length >> 16) & 0xff;
        buffer[index++] = (length >> 8) & 0xff;
        buffer[index++] = length & 0xff;
        if (body) {
            copyArray(buffer, index, body, 0, length);
        }
        return buffer;
    }

    static decode = function (buffer: Uint8Array) {
        let offset = 0;
        let bytes = new ByteArray(buffer);
        let length = 0;
        let rs: Array<any> = [];
        while (offset < bytes.length) {
            let type = bytes[offset++];
            length = ((bytes[offset++]) << 16 | (bytes[offset++]) << 8 | bytes[offset++]) >>> 0;
            let body = length ? new ByteArray(length) : null;
            copyArray(body, 0, bytes, offset, length);
            offset += length;
            rs.push({ 'type': type, 'body': body });
        }
        return rs.length === 1 ? rs[0] : rs;
    };
}

class MessageProtocol {
    static encode(id: number, type: number, compressRoute: number, route: any, msg: any) {
        // calculate max length of the message
        let idBytes = msgHasId(type) ? caculateMsgIdBytes(id) : 0;
        let msgLen = MSG_FLAG_BYTES + idBytes;

        if (msgHasRoute(type)) {
            if (compressRoute) {
                if (typeof route !== 'number') {
                    throw new Error('error flag for number route!');
                }
                msgLen += MSG_ROUTE_CODE_BYTES;
            } else {
                msgLen += MSG_ROUTE_LEN_BYTES;
                if (route) {
                    route = Protocol.strencode(route);
                    if (route.length > 255) {
                        throw new Error('route maxlength is overflow');
                    }
                    msgLen += route.length;
                }
            }
        }

        if (msg) {
            msgLen += msg.length;
        }

        let buffer = new ByteArray(msgLen);
        let offset = 0;

        // add flag
        offset = encodeMsgFlag(type, compressRoute, buffer, offset);

        // add message id
        if (msgHasId(type)) {
            offset = encodeMsgId(id, buffer, offset);
        }

        // add route
        if (msgHasRoute(type)) {
            offset = encodeMsgRoute(compressRoute, route, buffer, offset);
        }

        // add body
        if (msg) {
            offset = encodeMsgBody(msg, buffer, offset);
        }

        return buffer;
    };

    static decode(buffer: any) {
        let bytes = new ByteArray(buffer);
        let bytesLen = bytes.length || bytes.byteLength;
        let offset = 0;
        let id = 0;
        let route: any;

        // parse flag
        let flag = bytes[offset++];
        let compressRoute = flag & MSG_COMPRESS_ROUTE_MASK;
        let type = (flag >> 1) & MSG_TYPE_MASK;

        // parse id
        if (msgHasId(type)) {
            let m = parseInt((bytes[offset] as any));
            let i = 0;
            do {
                m = parseInt((bytes[offset] as any));
                id = id + ((m & 0x7f) * Math.pow(2, (7 * i)));
                offset++;
                i++;
            } while (m >= 128);
        }

        // parse route
        if (msgHasRoute(type)) {
            if (compressRoute) {
                route = (bytes[offset++]) << 8 | bytes[offset++];
            } else {
                let routeLen = bytes[offset++];
                if (routeLen) {
                    route = new ByteArray(routeLen);
                    copyArray(route, 0, bytes, offset, routeLen);
                    route = Protocol.strdecode(route);
                } else {
                    route = '';
                }
                offset += routeLen;
            }
        }

        // parse body
        let bodyLen = bytesLen - offset;
        let body = new ByteArray(bodyLen);

        copyArray(body, 0, bytes, offset, bodyLen);

        return {
            'id': id, 'type': type, 'compressRoute': compressRoute,
            'route': route, 'body': body
        };
    };
}




export {
    Protocol,
    PackageProtocol,
    MessageProtocol
}