import {DynamicMessageEncoder, StaticMessageEncoder} from "./encoder"
import {DynamicMessageDecoder, StaticMessageDecoder} from "./decoder"


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
    private encoder: StaticMessageEncoder;
    private decoder: StaticMessageDecoder;

    constructor() {
        this.encoder = new StaticMessageEncoder();
        this.decoder = new StaticMessageDecoder();
    }

    lookupRequest(_route: string): boolean {
        return false
    }

    lookupResponse(_route: string): boolean {
        return false
    }

    encode(key: string, msg: any) {
        return this.encoder?.encode(key, msg)
    }

    decode(key: string, msg: Uint8Array) {
        return this.decoder?.decode(key, msg)
    }
}