/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protos = (function() {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    var protos = {};

    protos.Doc = (function() {

        /**
         * Properties of a Doc.
         * @memberof protos
         * @interface IDoc
         * @property {string|null} [doc] Doc doc
         */

        /**
         * Constructs a new Doc.
         * @memberof protos
         * @classdesc Represents a Doc.
         * @implements IDoc
         * @constructor
         * @param {protos.IDoc=} [properties] Properties to set
         */
        function Doc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Doc doc.
         * @member {string} doc
         * @memberof protos.Doc
         * @instance
         */
        Doc.prototype.doc = "";

        /**
         * Creates a new Doc instance using the specified properties.
         * @function create
         * @memberof protos.Doc
         * @static
         * @param {protos.IDoc=} [properties] Properties to set
         * @returns {protos.Doc} Doc instance
         */
        Doc.create = function create(properties) {
            return new Doc(properties);
        };

        /**
         * Encodes the specified Doc message. Does not implicitly {@link protos.Doc.verify|verify} messages.
         * @function encode
         * @memberof protos.Doc
         * @static
         * @param {protos.IDoc} message Doc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.doc != null && Object.hasOwnProperty.call(message, "doc"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.doc);
            return writer;
        };

        /**
         * Encodes the specified Doc message, length delimited. Does not implicitly {@link protos.Doc.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.Doc
         * @static
         * @param {protos.IDoc} message Doc message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Doc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Doc message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Doc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Doc} Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Doc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.doc = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Doc message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.Doc
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.Doc} Doc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Doc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Doc message.
         * @function verify
         * @memberof protos.Doc
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Doc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.doc != null && message.hasOwnProperty("doc"))
                if (!$util.isString(message.doc))
                    return "doc: string expected";
            return null;
        };

        /**
         * Creates a Doc message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.Doc
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.Doc} Doc
         */
        Doc.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.Doc)
                return object;
            var message = new $root.protos.Doc();
            if (object.doc != null)
                message.doc = String(object.doc);
            return message;
        };

        /**
         * Creates a plain object from a Doc message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.Doc
         * @static
         * @param {protos.Doc} message Doc
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Doc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.doc = "";
            if (message.doc != null && message.hasOwnProperty("doc"))
                object.doc = message.doc;
            return object;
        };

        /**
         * Converts this Doc to JSON.
         * @function toJSON
         * @memberof protos.Doc
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Doc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Doc
         * @function getTypeUrl
         * @memberof protos.Doc
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Doc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protos.Doc";
        };

        return Doc;
    })();

    protos.ProtoDescriptor = (function() {

        /**
         * Properties of a ProtoDescriptor.
         * @memberof protos
         * @interface IProtoDescriptor
         * @property {Uint8Array|null} [desc] ProtoDescriptor desc
         */

        /**
         * Constructs a new ProtoDescriptor.
         * @memberof protos
         * @classdesc Represents a ProtoDescriptor.
         * @implements IProtoDescriptor
         * @constructor
         * @param {protos.IProtoDescriptor=} [properties] Properties to set
         */
        function ProtoDescriptor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoDescriptor desc.
         * @member {Uint8Array} desc
         * @memberof protos.ProtoDescriptor
         * @instance
         */
        ProtoDescriptor.prototype.desc = $util.newBuffer([]);

        /**
         * Creates a new ProtoDescriptor instance using the specified properties.
         * @function create
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {protos.IProtoDescriptor=} [properties] Properties to set
         * @returns {protos.ProtoDescriptor} ProtoDescriptor instance
         */
        ProtoDescriptor.create = function create(properties) {
            return new ProtoDescriptor(properties);
        };

        /**
         * Encodes the specified ProtoDescriptor message. Does not implicitly {@link protos.ProtoDescriptor.verify|verify} messages.
         * @function encode
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {protos.IProtoDescriptor} message ProtoDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoDescriptor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.desc);
            return writer;
        };

        /**
         * Encodes the specified ProtoDescriptor message, length delimited. Does not implicitly {@link protos.ProtoDescriptor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {protos.IProtoDescriptor} message ProtoDescriptor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoDescriptor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtoDescriptor message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ProtoDescriptor} ProtoDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoDescriptor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ProtoDescriptor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.desc = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProtoDescriptor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.ProtoDescriptor} ProtoDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoDescriptor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtoDescriptor message.
         * @function verify
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoDescriptor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!(message.desc && typeof message.desc.length === "number" || $util.isString(message.desc)))
                    return "desc: buffer expected";
            return null;
        };

        /**
         * Creates a ProtoDescriptor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ProtoDescriptor} ProtoDescriptor
         */
        ProtoDescriptor.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ProtoDescriptor)
                return object;
            var message = new $root.protos.ProtoDescriptor();
            if (object.desc != null)
                if (typeof object.desc === "string")
                    $util.base64.decode(object.desc, message.desc = $util.newBuffer($util.base64.length(object.desc)), 0);
                else if (object.desc.length >= 0)
                    message.desc = object.desc;
            return message;
        };

        /**
         * Creates a plain object from a ProtoDescriptor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {protos.ProtoDescriptor} message ProtoDescriptor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoDescriptor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.desc = "";
                else {
                    object.desc = [];
                    if (options.bytes !== Array)
                        object.desc = $util.newBuffer(object.desc);
                }
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = options.bytes === String ? $util.base64.encode(message.desc, 0, message.desc.length) : options.bytes === Array ? Array.prototype.slice.call(message.desc) : message.desc;
            return object;
        };

        /**
         * Converts this ProtoDescriptor to JSON.
         * @function toJSON
         * @memberof protos.ProtoDescriptor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoDescriptor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoDescriptor
         * @function getTypeUrl
         * @memberof protos.ProtoDescriptor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoDescriptor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protos.ProtoDescriptor";
        };

        return ProtoDescriptor;
    })();

    protos.ProtoName = (function() {

        /**
         * Properties of a ProtoName.
         * @memberof protos
         * @interface IProtoName
         * @property {string|null} [name] ProtoName name
         */

        /**
         * Constructs a new ProtoName.
         * @memberof protos
         * @classdesc Represents a ProtoName.
         * @implements IProtoName
         * @constructor
         * @param {protos.IProtoName=} [properties] Properties to set
         */
        function ProtoName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoName name.
         * @member {string} name
         * @memberof protos.ProtoName
         * @instance
         */
        ProtoName.prototype.name = "";

        /**
         * Creates a new ProtoName instance using the specified properties.
         * @function create
         * @memberof protos.ProtoName
         * @static
         * @param {protos.IProtoName=} [properties] Properties to set
         * @returns {protos.ProtoName} ProtoName instance
         */
        ProtoName.create = function create(properties) {
            return new ProtoName(properties);
        };

        /**
         * Encodes the specified ProtoName message. Does not implicitly {@link protos.ProtoName.verify|verify} messages.
         * @function encode
         * @memberof protos.ProtoName
         * @static
         * @param {protos.IProtoName} message ProtoName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ProtoName message, length delimited. Does not implicitly {@link protos.ProtoName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.ProtoName
         * @static
         * @param {protos.IProtoName} message ProtoName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtoName message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ProtoName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ProtoName} ProtoName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ProtoName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProtoName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.ProtoName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.ProtoName} ProtoName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtoName message.
         * @function verify
         * @memberof protos.ProtoName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ProtoName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ProtoName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ProtoName} ProtoName
         */
        ProtoName.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ProtoName)
                return object;
            var message = new $root.protos.ProtoName();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ProtoName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ProtoName
         * @static
         * @param {protos.ProtoName} message ProtoName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ProtoName to JSON.
         * @function toJSON
         * @memberof protos.ProtoName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoName
         * @function getTypeUrl
         * @memberof protos.ProtoName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protos.ProtoName";
        };

        return ProtoName;
    })();

    protos.ProtoDescriptors = (function() {

        /**
         * Properties of a ProtoDescriptors.
         * @memberof protos
         * @interface IProtoDescriptors
         * @property {Array.<Uint8Array>|null} [desc] ProtoDescriptors desc
         */

        /**
         * Constructs a new ProtoDescriptors.
         * @memberof protos
         * @classdesc Represents a ProtoDescriptors.
         * @implements IProtoDescriptors
         * @constructor
         * @param {protos.IProtoDescriptors=} [properties] Properties to set
         */
        function ProtoDescriptors(properties) {
            this.desc = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoDescriptors desc.
         * @member {Array.<Uint8Array>} desc
         * @memberof protos.ProtoDescriptors
         * @instance
         */
        ProtoDescriptors.prototype.desc = $util.emptyArray;

        /**
         * Creates a new ProtoDescriptors instance using the specified properties.
         * @function create
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {protos.IProtoDescriptors=} [properties] Properties to set
         * @returns {protos.ProtoDescriptors} ProtoDescriptors instance
         */
        ProtoDescriptors.create = function create(properties) {
            return new ProtoDescriptors(properties);
        };

        /**
         * Encodes the specified ProtoDescriptors message. Does not implicitly {@link protos.ProtoDescriptors.verify|verify} messages.
         * @function encode
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {protos.IProtoDescriptors} message ProtoDescriptors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoDescriptors.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.desc != null && message.desc.length)
                for (var i = 0; i < message.desc.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.desc[i]);
            return writer;
        };

        /**
         * Encodes the specified ProtoDescriptors message, length delimited. Does not implicitly {@link protos.ProtoDescriptors.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {protos.IProtoDescriptors} message ProtoDescriptors message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoDescriptors.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtoDescriptors message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ProtoDescriptors} ProtoDescriptors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoDescriptors.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ProtoDescriptors();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.desc && message.desc.length))
                            message.desc = [];
                        message.desc.push(reader.bytes());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProtoDescriptors message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.ProtoDescriptors} ProtoDescriptors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoDescriptors.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtoDescriptors message.
         * @function verify
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoDescriptors.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.desc != null && message.hasOwnProperty("desc")) {
                if (!Array.isArray(message.desc))
                    return "desc: array expected";
                for (var i = 0; i < message.desc.length; ++i)
                    if (!(message.desc[i] && typeof message.desc[i].length === "number" || $util.isString(message.desc[i])))
                        return "desc: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ProtoDescriptors message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ProtoDescriptors} ProtoDescriptors
         */
        ProtoDescriptors.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ProtoDescriptors)
                return object;
            var message = new $root.protos.ProtoDescriptors();
            if (object.desc) {
                if (!Array.isArray(object.desc))
                    throw TypeError(".protos.ProtoDescriptors.desc: array expected");
                message.desc = [];
                for (var i = 0; i < object.desc.length; ++i)
                    if (typeof object.desc[i] === "string")
                        $util.base64.decode(object.desc[i], message.desc[i] = $util.newBuffer($util.base64.length(object.desc[i])), 0);
                    else if (object.desc[i].length >= 0)
                        message.desc[i] = object.desc[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ProtoDescriptors message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {protos.ProtoDescriptors} message ProtoDescriptors
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoDescriptors.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.desc = [];
            if (message.desc && message.desc.length) {
                object.desc = [];
                for (var j = 0; j < message.desc.length; ++j)
                    object.desc[j] = options.bytes === String ? $util.base64.encode(message.desc[j], 0, message.desc[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.desc[j]) : message.desc[j];
            }
            return object;
        };

        /**
         * Converts this ProtoDescriptors to JSON.
         * @function toJSON
         * @memberof protos.ProtoDescriptors
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoDescriptors.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoDescriptors
         * @function getTypeUrl
         * @memberof protos.ProtoDescriptors
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoDescriptors.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protos.ProtoDescriptors";
        };

        return ProtoDescriptors;
    })();

    protos.ProtoNames = (function() {

        /**
         * Properties of a ProtoNames.
         * @memberof protos
         * @interface IProtoNames
         * @property {Array.<string>|null} [name] ProtoNames name
         */

        /**
         * Constructs a new ProtoNames.
         * @memberof protos
         * @classdesc Represents a ProtoNames.
         * @implements IProtoNames
         * @constructor
         * @param {protos.IProtoNames=} [properties] Properties to set
         */
        function ProtoNames(properties) {
            this.name = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProtoNames name.
         * @member {Array.<string>} name
         * @memberof protos.ProtoNames
         * @instance
         */
        ProtoNames.prototype.name = $util.emptyArray;

        /**
         * Creates a new ProtoNames instance using the specified properties.
         * @function create
         * @memberof protos.ProtoNames
         * @static
         * @param {protos.IProtoNames=} [properties] Properties to set
         * @returns {protos.ProtoNames} ProtoNames instance
         */
        ProtoNames.create = function create(properties) {
            return new ProtoNames(properties);
        };

        /**
         * Encodes the specified ProtoNames message. Does not implicitly {@link protos.ProtoNames.verify|verify} messages.
         * @function encode
         * @memberof protos.ProtoNames
         * @static
         * @param {protos.IProtoNames} message ProtoNames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoNames.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.name.length)
                for (var i = 0; i < message.name.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name[i]);
            return writer;
        };

        /**
         * Encodes the specified ProtoNames message, length delimited. Does not implicitly {@link protos.ProtoNames.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.ProtoNames
         * @static
         * @param {protos.IProtoNames} message ProtoNames message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProtoNames.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProtoNames message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ProtoNames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ProtoNames} ProtoNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoNames.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ProtoNames();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.name && message.name.length))
                            message.name = [];
                        message.name.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProtoNames message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.ProtoNames
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.ProtoNames} ProtoNames
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProtoNames.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProtoNames message.
         * @function verify
         * @memberof protos.ProtoNames
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProtoNames.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name")) {
                if (!Array.isArray(message.name))
                    return "name: array expected";
                for (var i = 0; i < message.name.length; ++i)
                    if (!$util.isString(message.name[i]))
                        return "name: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ProtoNames message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ProtoNames
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ProtoNames} ProtoNames
         */
        ProtoNames.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ProtoNames)
                return object;
            var message = new $root.protos.ProtoNames();
            if (object.name) {
                if (!Array.isArray(object.name))
                    throw TypeError(".protos.ProtoNames.name: array expected");
                message.name = [];
                for (var i = 0; i < object.name.length; ++i)
                    message.name[i] = String(object.name[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProtoNames message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ProtoNames
         * @static
         * @param {protos.ProtoNames} message ProtoNames
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProtoNames.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.name = [];
            if (message.name && message.name.length) {
                object.name = [];
                for (var j = 0; j < message.name.length; ++j)
                    object.name[j] = message.name[j];
            }
            return object;
        };

        /**
         * Converts this ProtoNames to JSON.
         * @function toJSON
         * @memberof protos.ProtoNames
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProtoNames.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProtoNames
         * @function getTypeUrl
         * @memberof protos.ProtoNames
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProtoNames.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protos.ProtoNames";
        };

        return ProtoNames;
    })();

    return protos;
})();

module.exports = $root;
