import MessageEncoder from "./encoder"
import MessageDecoder from "./decoder"


export interface ProtobufInitProps {
    encoderProtos: any;
    decoderProtos: any;
}

/**
 * 动态 Protobuf 编/解码器
 * 适用于 pomelo、pinus 等动态下发 protobuf 描述符，
 * 并动态进行编/解码的逻辑
 */
export default class DynamicProtobuf {
    private encoder?: MessageEncoder;
    private decoder?: MessageDecoder;

    init(params: ProtobufInitProps) {
        const { encoderProtos, decoderProtos } = params
        this.encoder = new MessageEncoder(encoderProtos)
        this.decoder = new MessageDecoder(decoderProtos)
    }

    encode(key: any, msg: any) {
        return this.encoder?.encode(key, msg)
    }

    decode(key: any, msg: any) {
        return this.decoder?.decode(key, msg)
    }
}
