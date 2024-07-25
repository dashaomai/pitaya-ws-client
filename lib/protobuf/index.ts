import {DynamicMessageEncoder} from "./encoder"
import {DynamicMessageDecoder} from "./decoder"
import {protos} from "../protos/pitaya/bundle";
const Doc = protos.Doc;
const ProtoDescriptor = protos.ProtoDescriptor;

export interface ProtobufInitProps {
    encoderProtos: any;
    decoderProtos: any;
}

/**
 * 动态 Protobuf 编/解码器
 * 适用于 pomelo、pinus 等动态下发 protobuf 描述符，
 * 并动态进行编/解码的逻辑
 */
export class DynamicProtobuf {
    private encoder?: DynamicMessageEncoder;
    private decoder?: DynamicMessageDecoder;

    init(params: ProtobufInitProps) {
        const { encoderProtos, decoderProtos } = params
        this.encoder = new DynamicMessageEncoder(encoderProtos)
        this.decoder = new DynamicMessageDecoder(decoderProtos)
    }

    encode(key: any, msg: any) {
        return this.encoder?.encode(key, msg)
    }

    decode(key: any, msg: any) {
        return this.decoder?.decode(key, msg)
    }
}

/**
 * 静态 Protobuf 编/解码器
 * 适用于 pitaya 等静态下发 protobuf 描述符，
 * 并进行静态编/解码的逻辑
 */
export class StaticProtobuf {
    private descriptorsRoute: string;
    private readonly routes: Set<string>;

    constructor(
        private readonly docsRoute: string,
    ) {
        this.descriptorsRoute = '';
        this.routes = new Set();

        this.routes.add(this.docsRoute);
    }

    lookupRequest(route: string): boolean {
        return this.routes.has(route)
    }

    lookupResponse(route: string): boolean {
        return this.routes.has(route)
    }

    encode(route: string, msg: any) {
        if (route === this.docsRoute) {
            return msg
        } else if (route === this.descriptorsRoute) {
            return this.encodeDescriptors(msg)
        } else {
            return this.encodeGeneric(route, msg)
        }
    }

    private encodeDescriptors(msg: any) {
        return msg
    }

    private encodeGeneric(_route: string, msg: any) {
        return msg
    }

    decode(route: string, msg: Uint8Array) {
        if (route === this.docsRoute) {
            return this.decodeDocs(msg)
        } else if (route === this.descriptorsRoute) {
            return this.decodeDescriptors(msg)
        } else {
            return this.decodeGeneric(route, msg)
        }
    }

    private decodeDocs(msg: Uint8Array) {
        return Doc.decode(msg)
    }

    private decodeDescriptors(msg: any) {
        return ProtoDescriptor.decode(msg)
    }

    private decodeGeneric(_route: string, msg: any) {
        return msg
    }
}