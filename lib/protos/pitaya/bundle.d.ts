import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protos. */
export namespace protos {

    /** Properties of a Doc. */
    interface IDoc {

        /** Doc doc */
        doc?: (string|null);
    }

    /** Represents a Doc. */
    class Doc implements IDoc {

        /**
         * Constructs a new Doc.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IDoc);

        /** Doc doc. */
        public doc: string;

        /**
         * Creates a new Doc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Doc instance
         */
        public static create(properties?: protos.IDoc): protos.Doc;

        /**
         * Encodes the specified Doc message. Does not implicitly {@link protos.Doc.verify|verify} messages.
         * @param message Doc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IDoc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Doc message, length delimited. Does not implicitly {@link protos.Doc.verify|verify} messages.
         * @param message Doc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IDoc, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Doc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.Doc;

        /**
         * Decodes a Doc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.Doc;

        /**
         * Verifies a Doc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Doc message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Doc
         */
        public static fromObject(object: { [k: string]: any }): protos.Doc;

        /**
         * Creates a plain object from a Doc message. Also converts values to other types if specified.
         * @param message Doc
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.Doc, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Doc to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Doc
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProtoDescriptor. */
    interface IProtoDescriptor {

        /** ProtoDescriptor desc */
        desc?: (Uint8Array|null);
    }

    /** Represents a ProtoDescriptor. */
    class ProtoDescriptor implements IProtoDescriptor {

        /**
         * Constructs a new ProtoDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IProtoDescriptor);

        /** ProtoDescriptor desc. */
        public desc: Uint8Array;

        /**
         * Creates a new ProtoDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtoDescriptor instance
         */
        public static create(properties?: protos.IProtoDescriptor): protos.ProtoDescriptor;

        /**
         * Encodes the specified ProtoDescriptor message. Does not implicitly {@link protos.ProtoDescriptor.verify|verify} messages.
         * @param message ProtoDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IProtoDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtoDescriptor message, length delimited. Does not implicitly {@link protos.ProtoDescriptor.verify|verify} messages.
         * @param message ProtoDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IProtoDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtoDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtoDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ProtoDescriptor;

        /**
         * Decodes a ProtoDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtoDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.ProtoDescriptor;

        /**
         * Verifies a ProtoDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtoDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtoDescriptor
         */
        public static fromObject(object: { [k: string]: any }): protos.ProtoDescriptor;

        /**
         * Creates a plain object from a ProtoDescriptor message. Also converts values to other types if specified.
         * @param message ProtoDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ProtoDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtoDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtoDescriptor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProtoName. */
    interface IProtoName {

        /** ProtoName name */
        name?: (string|null);
    }

    /** Represents a ProtoName. */
    class ProtoName implements IProtoName {

        /**
         * Constructs a new ProtoName.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IProtoName);

        /** ProtoName name. */
        public name: string;

        /**
         * Creates a new ProtoName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtoName instance
         */
        public static create(properties?: protos.IProtoName): protos.ProtoName;

        /**
         * Encodes the specified ProtoName message. Does not implicitly {@link protos.ProtoName.verify|verify} messages.
         * @param message ProtoName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IProtoName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtoName message, length delimited. Does not implicitly {@link protos.ProtoName.verify|verify} messages.
         * @param message ProtoName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IProtoName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtoName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtoName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ProtoName;

        /**
         * Decodes a ProtoName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtoName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.ProtoName;

        /**
         * Verifies a ProtoName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtoName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtoName
         */
        public static fromObject(object: { [k: string]: any }): protos.ProtoName;

        /**
         * Creates a plain object from a ProtoName message. Also converts values to other types if specified.
         * @param message ProtoName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ProtoName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtoName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtoName
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProtoDescriptors. */
    interface IProtoDescriptors {

        /** ProtoDescriptors desc */
        desc?: (Uint8Array[]|null);
    }

    /** Represents a ProtoDescriptors. */
    class ProtoDescriptors implements IProtoDescriptors {

        /**
         * Constructs a new ProtoDescriptors.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IProtoDescriptors);

        /** ProtoDescriptors desc. */
        public desc: Uint8Array[];

        /**
         * Creates a new ProtoDescriptors instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtoDescriptors instance
         */
        public static create(properties?: protos.IProtoDescriptors): protos.ProtoDescriptors;

        /**
         * Encodes the specified ProtoDescriptors message. Does not implicitly {@link protos.ProtoDescriptors.verify|verify} messages.
         * @param message ProtoDescriptors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IProtoDescriptors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtoDescriptors message, length delimited. Does not implicitly {@link protos.ProtoDescriptors.verify|verify} messages.
         * @param message ProtoDescriptors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IProtoDescriptors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtoDescriptors message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtoDescriptors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ProtoDescriptors;

        /**
         * Decodes a ProtoDescriptors message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtoDescriptors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.ProtoDescriptors;

        /**
         * Verifies a ProtoDescriptors message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtoDescriptors message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtoDescriptors
         */
        public static fromObject(object: { [k: string]: any }): protos.ProtoDescriptors;

        /**
         * Creates a plain object from a ProtoDescriptors message. Also converts values to other types if specified.
         * @param message ProtoDescriptors
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ProtoDescriptors, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtoDescriptors to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtoDescriptors
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProtoNames. */
    interface IProtoNames {

        /** ProtoNames name */
        name?: (string[]|null);
    }

    /** Represents a ProtoNames. */
    class ProtoNames implements IProtoNames {

        /**
         * Constructs a new ProtoNames.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IProtoNames);

        /** ProtoNames name. */
        public name: string[];

        /**
         * Creates a new ProtoNames instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProtoNames instance
         */
        public static create(properties?: protos.IProtoNames): protos.ProtoNames;

        /**
         * Encodes the specified ProtoNames message. Does not implicitly {@link protos.ProtoNames.verify|verify} messages.
         * @param message ProtoNames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IProtoNames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProtoNames message, length delimited. Does not implicitly {@link protos.ProtoNames.verify|verify} messages.
         * @param message ProtoNames message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IProtoNames, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProtoNames message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProtoNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ProtoNames;

        /**
         * Decodes a ProtoNames message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProtoNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.ProtoNames;

        /**
         * Verifies a ProtoNames message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProtoNames message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProtoNames
         */
        public static fromObject(object: { [k: string]: any }): protos.ProtoNames;

        /**
         * Creates a plain object from a ProtoNames message. Also converts values to other types if specified.
         * @param message ProtoNames
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ProtoNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProtoNames to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProtoNames
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
