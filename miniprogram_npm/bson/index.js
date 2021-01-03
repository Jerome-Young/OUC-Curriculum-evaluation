module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1609067987836, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeStream = exports.calculateObjectSize = exports.deserialize = exports.serializeWithBufferAndIndex = exports.serialize = exports.setInternalBufferSize = exports.ObjectID = exports.Decimal128 = exports.BSONRegExp = exports.MaxKey = exports.MinKey = exports.Int32 = exports.Double = exports.Timestamp = exports.Long = exports.ObjectId = exports.Binary = exports.DBRef = exports.BSONSymbol = exports.Map = exports.Code = exports.LongWithoutOverridesClass = exports.EJSON = exports.BSON_INT64_MIN = exports.BSON_INT64_MAX = exports.BSON_INT32_MIN = exports.BSON_INT32_MAX = exports.BSON_DATA_UNDEFINED = exports.BSON_DATA_TIMESTAMP = exports.BSON_DATA_SYMBOL = exports.BSON_DATA_STRING = exports.BSON_DATA_REGEXP = exports.BSON_DATA_OID = exports.BSON_DATA_OBJECT = exports.BSON_DATA_NUMBER = exports.BSON_DATA_NULL = exports.BSON_DATA_MIN_KEY = exports.BSON_DATA_MAX_KEY = exports.BSON_DATA_LONG = exports.BSON_DATA_INT = exports.BSON_DATA_DECIMAL128 = exports.BSON_DATA_DBPOINTER = exports.BSON_DATA_DATE = exports.BSON_DATA_CODE_W_SCOPE = exports.BSON_DATA_CODE = exports.BSON_DATA_BOOLEAN = exports.BSON_DATA_BINARY = exports.BSON_DATA_ARRAY = exports.BSON_BINARY_SUBTYPE_UUID_NEW = exports.BSON_BINARY_SUBTYPE_UUID = exports.BSON_BINARY_SUBTYPE_USER_DEFINED = exports.BSON_BINARY_SUBTYPE_MD5 = exports.BSON_BINARY_SUBTYPE_FUNCTION = exports.BSON_BINARY_SUBTYPE_DEFAULT = exports.BSON_BINARY_SUBTYPE_BYTE_ARRAY = void 0;
const buffer_1 = require("buffer");
const binary_1 = require("./binary");
Object.defineProperty(exports, "Binary", { enumerable: true, get: function () { return binary_1.Binary; } });
const code_1 = require("./code");
Object.defineProperty(exports, "Code", { enumerable: true, get: function () { return code_1.Code; } });
const db_ref_1 = require("./db_ref");
Object.defineProperty(exports, "DBRef", { enumerable: true, get: function () { return db_ref_1.DBRef; } });
const decimal128_1 = require("./decimal128");
Object.defineProperty(exports, "Decimal128", { enumerable: true, get: function () { return decimal128_1.Decimal128; } });
const double_1 = require("./double");
Object.defineProperty(exports, "Double", { enumerable: true, get: function () { return double_1.Double; } });
const ensure_buffer_1 = require("./ensure_buffer");
const extended_json_1 = require("./extended_json");
const int_32_1 = require("./int_32");
Object.defineProperty(exports, "Int32", { enumerable: true, get: function () { return int_32_1.Int32; } });
const long_1 = require("./long");
Object.defineProperty(exports, "Long", { enumerable: true, get: function () { return long_1.Long; } });
const map_1 = require("./map");
Object.defineProperty(exports, "Map", { enumerable: true, get: function () { return map_1.Map; } });
const max_key_1 = require("./max_key");
Object.defineProperty(exports, "MaxKey", { enumerable: true, get: function () { return max_key_1.MaxKey; } });
const min_key_1 = require("./min_key");
Object.defineProperty(exports, "MinKey", { enumerable: true, get: function () { return min_key_1.MinKey; } });
const objectid_1 = require("./objectid");
Object.defineProperty(exports, "ObjectId", { enumerable: true, get: function () { return objectid_1.ObjectId; } });
Object.defineProperty(exports, "ObjectID", { enumerable: true, get: function () { return objectid_1.ObjectId; } });
const calculate_size_1 = require("./parser/calculate_size");
// Parts of the parser
const deserializer_1 = require("./parser/deserializer");
const serializer_1 = require("./parser/serializer");
const regexp_1 = require("./regexp");
Object.defineProperty(exports, "BSONRegExp", { enumerable: true, get: function () { return regexp_1.BSONRegExp; } });
const symbol_1 = require("./symbol");
Object.defineProperty(exports, "BSONSymbol", { enumerable: true, get: function () { return symbol_1.BSONSymbol; } });
const timestamp_1 = require("./timestamp");
Object.defineProperty(exports, "Timestamp", { enumerable: true, get: function () { return timestamp_1.Timestamp; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_BYTE_ARRAY; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_DEFAULT", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_DEFAULT; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_FUNCTION", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_FUNCTION; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_MD5", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_MD5; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_USER_DEFINED", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_USER_DEFINED; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_UUID", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_UUID; } });
Object.defineProperty(exports, "BSON_BINARY_SUBTYPE_UUID_NEW", { enumerable: true, get: function () { return constants_1.BSON_BINARY_SUBTYPE_UUID_NEW; } });
Object.defineProperty(exports, "BSON_DATA_ARRAY", { enumerable: true, get: function () { return constants_1.BSON_DATA_ARRAY; } });
Object.defineProperty(exports, "BSON_DATA_BINARY", { enumerable: true, get: function () { return constants_1.BSON_DATA_BINARY; } });
Object.defineProperty(exports, "BSON_DATA_BOOLEAN", { enumerable: true, get: function () { return constants_1.BSON_DATA_BOOLEAN; } });
Object.defineProperty(exports, "BSON_DATA_CODE", { enumerable: true, get: function () { return constants_1.BSON_DATA_CODE; } });
Object.defineProperty(exports, "BSON_DATA_CODE_W_SCOPE", { enumerable: true, get: function () { return constants_1.BSON_DATA_CODE_W_SCOPE; } });
Object.defineProperty(exports, "BSON_DATA_DATE", { enumerable: true, get: function () { return constants_1.BSON_DATA_DATE; } });
Object.defineProperty(exports, "BSON_DATA_DBPOINTER", { enumerable: true, get: function () { return constants_1.BSON_DATA_DBPOINTER; } });
Object.defineProperty(exports, "BSON_DATA_DECIMAL128", { enumerable: true, get: function () { return constants_1.BSON_DATA_DECIMAL128; } });
Object.defineProperty(exports, "BSON_DATA_INT", { enumerable: true, get: function () { return constants_1.BSON_DATA_INT; } });
Object.defineProperty(exports, "BSON_DATA_LONG", { enumerable: true, get: function () { return constants_1.BSON_DATA_LONG; } });
Object.defineProperty(exports, "BSON_DATA_MAX_KEY", { enumerable: true, get: function () { return constants_1.BSON_DATA_MAX_KEY; } });
Object.defineProperty(exports, "BSON_DATA_MIN_KEY", { enumerable: true, get: function () { return constants_1.BSON_DATA_MIN_KEY; } });
Object.defineProperty(exports, "BSON_DATA_NULL", { enumerable: true, get: function () { return constants_1.BSON_DATA_NULL; } });
Object.defineProperty(exports, "BSON_DATA_NUMBER", { enumerable: true, get: function () { return constants_1.BSON_DATA_NUMBER; } });
Object.defineProperty(exports, "BSON_DATA_OBJECT", { enumerable: true, get: function () { return constants_1.BSON_DATA_OBJECT; } });
Object.defineProperty(exports, "BSON_DATA_OID", { enumerable: true, get: function () { return constants_1.BSON_DATA_OID; } });
Object.defineProperty(exports, "BSON_DATA_REGEXP", { enumerable: true, get: function () { return constants_1.BSON_DATA_REGEXP; } });
Object.defineProperty(exports, "BSON_DATA_STRING", { enumerable: true, get: function () { return constants_1.BSON_DATA_STRING; } });
Object.defineProperty(exports, "BSON_DATA_SYMBOL", { enumerable: true, get: function () { return constants_1.BSON_DATA_SYMBOL; } });
Object.defineProperty(exports, "BSON_DATA_TIMESTAMP", { enumerable: true, get: function () { return constants_1.BSON_DATA_TIMESTAMP; } });
Object.defineProperty(exports, "BSON_DATA_UNDEFINED", { enumerable: true, get: function () { return constants_1.BSON_DATA_UNDEFINED; } });
Object.defineProperty(exports, "BSON_INT32_MAX", { enumerable: true, get: function () { return constants_1.BSON_INT32_MAX; } });
Object.defineProperty(exports, "BSON_INT32_MIN", { enumerable: true, get: function () { return constants_1.BSON_INT32_MIN; } });
Object.defineProperty(exports, "BSON_INT64_MAX", { enumerable: true, get: function () { return constants_1.BSON_INT64_MAX; } });
Object.defineProperty(exports, "BSON_INT64_MIN", { enumerable: true, get: function () { return constants_1.BSON_INT64_MIN; } });
var extended_json_2 = require("./extended_json");
Object.defineProperty(exports, "EJSON", { enumerable: true, get: function () { return extended_json_2.EJSON; } });
var timestamp_2 = require("./timestamp");
Object.defineProperty(exports, "LongWithoutOverridesClass", { enumerable: true, get: function () { return timestamp_2.LongWithoutOverridesClass; } });
/** @internal */
// Default Max Size
const MAXSIZE = 1024 * 1024 * 17;
// Current Internal Temporary Serialization Buffer
let buffer = buffer_1.Buffer.alloc(MAXSIZE);
/**
 * Sets the size of the internal serialization buffer.
 *
 * @param size - The desired size for the internal serialization buffer
 * @public
 */
function setInternalBufferSize(size) {
    // Resize the internal serialization buffer if needed
    if (buffer.length < size) {
        buffer = buffer_1.Buffer.alloc(size);
    }
}
exports.setInternalBufferSize = setInternalBufferSize;
/**
 * Serialize a Javascript object.
 *
 * @param object - the Javascript object to serialize.
 * @returns Buffer object containing the serialized object.
 * @public
 */
function serialize(object, options = {}) {
    // Unpack the options
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE;
    // Resize the internal serialization buffer if needed
    if (buffer.length < minInternalBufferSize) {
        buffer = buffer_1.Buffer.alloc(minInternalBufferSize);
    }
    // Attempt to serialize
    const serializationIndex = serializer_1.serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []);
    // Create the final buffer
    const finishedBuffer = buffer_1.Buffer.alloc(serializationIndex);
    // Copy into the finished buffer
    buffer.copy(finishedBuffer, 0, 0, finishedBuffer.length);
    // Return the buffer
    return finishedBuffer;
}
exports.serialize = serialize;
/**
 * Serialize a Javascript object using a predefined Buffer and index into the buffer,
 * useful when pre-allocating the space for serialization.
 *
 * @param object - the Javascript object to serialize.
 * @param finalBuffer - the Buffer you pre-allocated to store the serialized BSON object.
 * @returns the index pointing to the last written byte in the buffer.
 * @public
 */
function serializeWithBufferAndIndex(object, finalBuffer, options = {}) {
    // Unpack the options
    const checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    const startIndex = typeof options.index === 'number' ? options.index : 0;
    // Attempt to serialize
    const serializationIndex = serializer_1.serializeInto(buffer, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
    buffer.copy(finalBuffer, startIndex, 0, serializationIndex);
    // Return the index
    return startIndex + serializationIndex - 1;
}
exports.serializeWithBufferAndIndex = serializeWithBufferAndIndex;
/**
 * Deserialize data as BSON.
 *
 * @param buffer - the buffer containing the serialized set of BSON documents.
 * @returns returns the deserialized Javascript Object.
 * @public
 */
function deserialize(buffer, options = {}) {
    return deserializer_1.deserialize(ensure_buffer_1.ensureBuffer(buffer), options);
}
exports.deserialize = deserialize;
/**
 * Calculate the bson size for a passed in Javascript object.
 *
 * @param object - the Javascript object to calculate the BSON byte size for
 * @returns size of BSON object in bytes
 * @public
 */
function calculateObjectSize(object, options = {}) {
    options = options || {};
    const serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    const ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    return calculate_size_1.calculateObjectSize(object, serializeFunctions, ignoreUndefined);
}
exports.calculateObjectSize = calculateObjectSize;
/**
 * Deserialize stream data as BSON documents.
 *
 * @param data - the buffer containing the serialized set of BSON documents.
 * @param startIndex - the start index in the data Buffer where the deserialization is to start.
 * @param numberOfDocuments - number of documents to deserialize.
 * @param documents - an array where to store the deserialized documents.
 * @param docStartIndex - the index in the documents array from where to start inserting documents.
 * @param options - additional options used for the deserialization.
 * @returns next index in the buffer after deserialization **x** numbers of documents.
 * @public
 */
function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
    const internalOptions = Object.assign({ allowObjectSmallerThanBufferSize: true, index: 0 }, options);
    const bufferData = ensure_buffer_1.ensureBuffer(data);
    let index = startIndex;
    // Loop over all documents
    for (let i = 0; i < numberOfDocuments; i++) {
        // Find size of the document
        const size = bufferData[index] |
            (bufferData[index + 1] << 8) |
            (bufferData[index + 2] << 16) |
            (bufferData[index + 3] << 24);
        // Update options with index
        internalOptions.index = index;
        // Parse the document at this point
        documents[docStartIndex + i] = deserializer_1.deserialize(bufferData, internalOptions);
        // Adjust index by the document size
        index = index + size;
    }
    // Return object containing end index of parsing and list of documents
    return index;
}
exports.deserializeStream = deserializeStream;
/**
 * BSON default export
 * @deprecated Please use named exports
 * @privateRemarks
 * We want to someday deprecate the default export,
 * so none of the new TS types are being exported on the default
 * @public
 */
const BSON = {
    Binary: binary_1.Binary,
    Code: code_1.Code,
    DBRef: db_ref_1.DBRef,
    Decimal128: decimal128_1.Decimal128,
    Double: double_1.Double,
    Int32: int_32_1.Int32,
    Long: long_1.Long,
    Map: map_1.Map,
    MaxKey: max_key_1.MaxKey,
    MinKey: min_key_1.MinKey,
    ObjectId: objectid_1.ObjectId,
    ObjectID: objectid_1.ObjectId,
    BSONRegExp: regexp_1.BSONRegExp,
    BSONSymbol: symbol_1.BSONSymbol,
    Timestamp: timestamp_1.Timestamp,
    EJSON: extended_json_1.EJSON,
    setInternalBufferSize,
    serialize,
    serializeWithBufferAndIndex,
    deserialize,
    calculateObjectSize,
    deserializeStream
};
exports.default = BSON;
//# sourceMappingURL=bson.js.map
}, function(modId) {var map = {"./binary":1609067987837,"./code":1609067987841,"./db_ref":1609067987842,"./decimal128":1609067987843,"./double":1609067987845,"./ensure_buffer":1609067987838,"./extended_json":1609067987846,"./int_32":1609067987847,"./long":1609067987844,"./map":1609067987854,"./max_key":1609067987848,"./min_key":1609067987849,"./objectid":1609067987850,"./parser/calculate_size":1609067987855,"./parser/deserializer":1609067987857,"./parser/serializer":1609067987859,"./regexp":1609067987851,"./symbol":1609067987852,"./timestamp":1609067987853,"./constants":1609067987856}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987837, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Binary = void 0;
const buffer_1 = require("buffer");
const ensure_buffer_1 = require("./ensure_buffer");
const uuid_1 = require("./uuid");
/**
 * A class representation of the BSON Binary type.
 * @public
 */
class Binary {
    /**
     * @param buffer - a buffer object containing the binary data.
     * @param subType - the option binary type.
     */
    constructor(buffer, subType) {
        if (!(buffer == null) &&
            !(typeof buffer === 'string') &&
            !ArrayBuffer.isView(buffer) &&
            !(buffer instanceof ArrayBuffer) &&
            !Array.isArray(buffer)) {
            throw new TypeError('Binary can only be constructed from string, Buffer, TypedArray, or Array<number>');
        }
        this.sub_type = subType !== null && subType !== void 0 ? subType : Binary.BSON_BINARY_SUBTYPE_DEFAULT;
        if (buffer == null) {
            // create an empty binary buffer
            this.buffer = buffer_1.Buffer.alloc(Binary.BUFFER_SIZE);
            this.position = 0;
        }
        else {
            if (typeof buffer === 'string') {
                // string
                this.buffer = buffer_1.Buffer.from(buffer, 'binary');
            }
            else if (Array.isArray(buffer)) {
                // number[]
                this.buffer = buffer_1.Buffer.from(buffer);
            }
            else {
                // Buffer | TypedArray | ArrayBuffer
                this.buffer = ensure_buffer_1.ensureBuffer(buffer);
            }
            this.position = this.buffer.byteLength;
        }
    }
    /**
     * Updates this binary with byte_value.
     *
     * @param byteValue - a single byte we wish to write.
     */
    put(byteValue) {
        // If it's a string and a has more than one character throw an error
        if (typeof byteValue === 'string' && byteValue.length !== 1) {
            throw new TypeError('only accepts single character String');
        }
        else if (typeof byteValue !== 'number' && byteValue.length !== 1)
            throw new TypeError('only accepts single character Uint8Array or Array');
        // Decode the byte value once
        let decodedByte;
        if (typeof byteValue === 'string') {
            decodedByte = byteValue.charCodeAt(0);
        }
        else if (typeof byteValue === 'number') {
            decodedByte = byteValue;
        }
        else {
            decodedByte = byteValue[0];
        }
        if (decodedByte < 0 || decodedByte > 255) {
            throw new TypeError('only accepts number in a valid unsigned byte range 0-255');
        }
        if (this.buffer.length > this.position) {
            this.buffer[this.position++] = decodedByte;
        }
        else {
            const buffer = buffer_1.Buffer.alloc(Binary.BUFFER_SIZE + this.buffer.length);
            // Combine the two buffers together
            this.buffer.copy(buffer, 0, 0, this.buffer.length);
            this.buffer = buffer;
            this.buffer[this.position++] = decodedByte;
        }
    }
    /**
     * Writes a buffer or string to the binary.
     *
     * @param sequence - a string or buffer to be written to the Binary BSON object.
     * @param offset - specify the binary of where to write the content.
     */
    write(sequence, offset) {
        offset = typeof offset === 'number' ? offset : this.position;
        // If the buffer is to small let's extend the buffer
        if (this.buffer.length < offset + sequence.length) {
            const buffer = buffer_1.Buffer.alloc(this.buffer.length + sequence.length);
            this.buffer.copy(buffer, 0, 0, this.buffer.length);
            // Assign the new buffer
            this.buffer = buffer;
        }
        if (ArrayBuffer.isView(sequence)) {
            this.buffer.set(ensure_buffer_1.ensureBuffer(sequence), offset);
            this.position =
                offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
        }
        else if (typeof sequence === 'string') {
            this.buffer.write(sequence, offset, sequence.length, 'binary');
            this.position =
                offset + sequence.length > this.position ? offset + sequence.length : this.position;
        }
    }
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @param position - read from the given position in the Binary.
     * @param length - the number of bytes to read.
     */
    read(position, length) {
        length = length && length > 0 ? length : this.position;
        // Let's return the data based on the type we have
        return this.buffer.slice(position, position + length);
    }
    /**
     * Returns the value of this binary as a string.
     * @param asRaw - Will skip converting to a string
     * @remarks
     * This is handy when calling this function conditionally for some key value pairs and not others
     */
    value(asRaw) {
        asRaw = !!asRaw;
        // Optimize to serialize for the situation where the data == size of buffer
        if (asRaw && this.buffer.length === this.position) {
            return this.buffer;
        }
        // If it's a node.js buffer object
        if (asRaw) {
            return this.buffer.slice(0, this.position);
        }
        return this.buffer.toString('binary', 0, this.position);
    }
    /** the length of the binary sequence */
    length() {
        return this.position;
    }
    /** @internal */
    toJSON() {
        return this.buffer.toString('base64');
    }
    /** @internal */
    toString(format) {
        return this.buffer.toString(format);
    }
    /** @internal */
    toExtendedJSON(options) {
        options = options || {};
        const base64String = this.buffer.toString('base64');
        const subType = Number(this.sub_type).toString(16);
        if (options.legacy) {
            return {
                $binary: base64String,
                $type: subType.length === 1 ? '0' + subType : subType
            };
        }
        return {
            $binary: {
                base64: base64String,
                subType: subType.length === 1 ? '0' + subType : subType
            }
        };
    }
    /** @internal */
    static fromExtendedJSON(doc, options) {
        options = options || {};
        let data;
        let type;
        if ('$binary' in doc) {
            if (options.legacy && typeof doc.$binary === 'string' && '$type' in doc) {
                type = doc.$type ? parseInt(doc.$type, 16) : 0;
                data = buffer_1.Buffer.from(doc.$binary, 'base64');
            }
            else {
                if (typeof doc.$binary !== 'string') {
                    type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
                    data = buffer_1.Buffer.from(doc.$binary.base64, 'base64');
                }
            }
        }
        else if ('$uuid' in doc) {
            type = 4;
            data = buffer_1.Buffer.from(uuid_1.parseUUID(doc.$uuid));
        }
        if (!data) {
            throw new TypeError(`Unexpected Binary Extended JSON format ${JSON.stringify(doc)}`);
        }
        return new Binary(data, type);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        const asBuffer = this.value(true);
        return `Binary("${asBuffer.toString('hex')}", ${this.sub_type})`;
    }
}
exports.Binary = Binary;
/**
 * Binary default subtype
 * @internal
 */
Binary.BSON_BINARY_SUBTYPE_DEFAULT = 0;
/** Initial buffer default size */
Binary.BUFFER_SIZE = 256;
/** Default BSON type */
Binary.SUBTYPE_DEFAULT = 0;
/** Function BSON type */
Binary.SUBTYPE_FUNCTION = 1;
/** Byte Array BSON type */
Binary.SUBTYPE_BYTE_ARRAY = 2;
/** Deprecated UUID BSON type @deprecated Please use SUBTYPE_UUID */
Binary.SUBTYPE_UUID_OLD = 3;
/** UUID BSON type */
Binary.SUBTYPE_UUID = 4;
/** MD5 BSON type */
Binary.SUBTYPE_MD5 = 5;
/** User BSON type */
Binary.SUBTYPE_USER_DEFINED = 128;
Object.defineProperty(Binary.prototype, '_bsontype', { value: 'Binary' });
//# sourceMappingURL=binary.js.map
}, function(modId) { var map = {"./ensure_buffer":1609067987838,"./uuid":1609067987840}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987838, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureBuffer = void 0;
const buffer_1 = require("buffer");
const utils_1 = require("./parser/utils");
/**
 * Makes sure that, if a Uint8Array is passed in, it is wrapped in a Buffer.
 *
 * @param potentialBuffer - The potential buffer
 * @returns Buffer the input if potentialBuffer is a buffer, or a buffer that
 * wraps a passed in Uint8Array
 * @throws TypeError If anything other than a Buffer or Uint8Array is passed in
 */
function ensureBuffer(potentialBuffer) {
    if (utils_1.isBuffer(potentialBuffer)) {
        return potentialBuffer;
    }
    if (ArrayBuffer.isView(potentialBuffer)) {
        return buffer_1.Buffer.from(potentialBuffer.buffer);
    }
    if (potentialBuffer instanceof ArrayBuffer) {
        return buffer_1.Buffer.from(potentialBuffer);
    }
    throw new TypeError('Must use either Buffer or TypedArray');
}
exports.ensureBuffer = ensureBuffer;
//# sourceMappingURL=ensure_buffer.js.map
}, function(modId) { var map = {"./parser/utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987839, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecate = exports.isObjectLike = exports.isDate = exports.isBuffer = exports.haveBuffer = exports.isBigUInt64Array = exports.isBigInt64Array = exports.isUint8Array = exports.randomBytes = exports.normalizedFunctionString = void 0;
const buffer_1 = require("buffer");
/**
 * Normalizes our expected stringified form of a function across versions of node
 * @param fn - The function to stringify
 */
function normalizedFunctionString(fn) {
    return fn.toString().replace('function(', 'function (');
}
exports.normalizedFunctionString = normalizedFunctionString;
function insecureRandomBytes(size) {
    const result = buffer_1.Buffer.alloc(size);
    for (let i = 0; i < size; ++i)
        result[i] = Math.floor(Math.random() * 256);
    return result;
}
exports.randomBytes = insecureRandomBytes;
if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    exports.randomBytes = size => window.crypto.getRandomValues(buffer_1.Buffer.alloc(size));
}
else {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        exports.randomBytes = require('crypto').randomBytes;
    }
    catch (e) {
        // keep the fallback
    }
    // NOTE: in transpiled cases the above require might return null/undefined
    if (exports.randomBytes == null) {
        exports.randomBytes = insecureRandomBytes;
    }
}
function isUint8Array(value) {
    return Object.prototype.toString.call(value) === '[object Uint8Array]';
}
exports.isUint8Array = isUint8Array;
function isBigInt64Array(value) {
    return Object.prototype.toString.call(value) === '[object BigInt64Array]';
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUInt64Array(value) {
    return Object.prototype.toString.call(value) === '[object BigUint64Array]';
}
exports.isBigUInt64Array = isBigUInt64Array;
/** Call to check if your environment has `Buffer` */
function haveBuffer() {
    return typeof global !== 'undefined' && typeof global.Buffer !== 'undefined';
}
exports.haveBuffer = haveBuffer;
/** Callable in any environment to check if value is a Buffer */
function isBuffer(value) {
    var _a;
    return typeof value === 'object' && ((_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Buffer';
}
exports.isBuffer = isBuffer;
// To ensure that 0.4 of node works correctly
function isDate(d) {
    return isObjectLike(d) && Object.prototype.toString.call(d) === '[object Date]';
}
exports.isDate = isDate;
/**
 * @internal
 * this is to solve the `'someKey' in x` problem where x is unknown.
 * https://github.com/typescript-eslint/typescript-eslint/issues/1071#issuecomment-541955753
 */
function isObjectLike(candidate) {
    return typeof candidate === 'object' && candidate !== null;
}
exports.isObjectLike = isObjectLike;
function deprecate(fn, message) {
    if (typeof window === 'undefined' || typeof self === 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return require('util').deprecate(fn, message);
    }
    let warned = false;
    function deprecated(...args) {
        if (!warned) {
            console.warn(message);
            warned = true;
        }
        return fn.apply(this, ...args);
    }
    return deprecated;
}
exports.deprecate = deprecate;
//# sourceMappingURL=utils.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987840, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUUID = void 0;
/**
 * UUID regular expression pattern copied from `uuid` npm module.
 * @see https://github.com/uuidjs/uuid/blob/master/src/regex.js
 */
const UUID_RX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
/**
 * Parser function copied from `uuid` npm module.
 * @see https://github.com/uuidjs/uuid/blob/master/src/parse.js
 * @internal
 */
function parseUUID(uuid) {
    if (typeof uuid !== 'string') {
        throw new TypeError('Invalid type for UUID, expected string but got ' + typeof uuid);
    }
    if (!UUID_RX.test(uuid)) {
        throw new TypeError('Invalid format for UUID: ' + uuid);
    }
    let v;
    const arr = new Uint8Array(16);
    // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = (v >>> 16) & 0xff;
    arr[2] = (v >>> 8) & 0xff;
    arr[3] = v & 0xff;
    // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff;
    // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff;
    // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff;
    // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = ((v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000) & 0xff;
    arr[11] = (v / 0x100000000) & 0xff;
    arr[12] = (v >>> 24) & 0xff;
    arr[13] = (v >>> 16) & 0xff;
    arr[14] = (v >>> 8) & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.parseUUID = parseUUID;
//# sourceMappingURL=uuid.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987841, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
/**
 * A class representation of the BSON Code type.
 * @public
 */
class Code {
    /**
     * @param code - a string or function.
     * @param scope - an optional scope for the function.
     */
    constructor(code, scope) {
        this.code = code;
        this.scope = scope;
    }
    /** @internal */
    toJSON() {
        return { code: this.code, scope: this.scope };
    }
    /** @internal */
    toExtendedJSON() {
        if (this.scope) {
            return { $code: this.code, $scope: this.scope };
        }
        return { $code: this.code };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        return new Code(doc.$code, doc.$scope);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        const codeJson = this.toJSON();
        return `Code("${codeJson.code}"${codeJson.scope ? `, ${JSON.stringify(codeJson.scope)}` : ''})`;
    }
}
exports.Code = Code;
Object.defineProperty(Code.prototype, '_bsontype', { value: 'Code' });
//# sourceMappingURL=code.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987842, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DBRef = exports.isDBRefLike = void 0;
const utils_1 = require("./parser/utils");
/** @internal */
function isDBRefLike(value) {
    return utils_1.isObjectLike(value) && value['$id'] != null && value['$ref'] != null;
}
exports.isDBRefLike = isDBRefLike;
/**
 * A class representation of the BSON DBRef type.
 * @public
 */
class DBRef {
    /**
     * @param collection - the collection name.
     * @param oid - the reference ObjectId.
     * @param db - optional db name, if omitted the reference is local to the current db.
     */
    constructor(collection, oid, db, fields) {
        // check if namespace has been provided
        const parts = collection.split('.');
        if (parts.length === 2) {
            db = parts.shift();
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            collection = parts.shift();
        }
        this.collection = collection;
        this.oid = oid;
        this.db = db;
        this.fields = fields || {};
    }
    // Property provided for compatibility with the 1.x parser
    // the 1.x parser used a "namespace" property, while 4.x uses "collection"
    /** @internal */
    get namespace() {
        return this.collection;
    }
    set namespace(value) {
        this.collection = value;
    }
    /** @internal */
    toJSON() {
        const o = Object.assign({
            $ref: this.collection,
            $id: this.oid
        }, this.fields);
        if (this.db != null)
            o.$db = this.db;
        return o;
    }
    /** @internal */
    toExtendedJSON(options) {
        options = options || {};
        let o = {
            $ref: this.collection,
            $id: this.oid
        };
        if (options.legacy) {
            return o;
        }
        if (this.db)
            o.$db = this.db;
        o = Object.assign(o, this.fields);
        return o;
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        const copy = Object.assign({}, doc);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        // NOTE: if OID is an ObjectId class it will just print the oid string.
        const oid = this.oid === undefined || this.oid.toString === undefined ? this.oid : this.oid.toString();
        return `DBRef("${this.namespace}", "${oid}"${this.db ? `, "${this.db}"` : ''})`;
    }
}
exports.DBRef = DBRef;
Object.defineProperty(DBRef.prototype, '_bsontype', { value: 'DBRef' });
//# sourceMappingURL=db_ref.js.map
}, function(modId) { var map = {"./parser/utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987843, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Decimal128 = void 0;
const buffer_1 = require("buffer");
const long_1 = require("./long");
const PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
const PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
const PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
const EXPONENT_MAX = 6111;
const EXPONENT_MIN = -6176;
const EXPONENT_BIAS = 6176;
const MAX_DIGITS = 34;
// Nan value bits as 32 bit values (due to lack of longs)
const NAN_BUFFER = [
    0x7c,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00
].reverse();
// Infinity value bits 32 bit values (due to lack of longs)
const INF_NEGATIVE_BUFFER = [
    0xf8,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00
].reverse();
const INF_POSITIVE_BUFFER = [
    0x78,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00
].reverse();
const EXPONENT_REGEX = /^([-+])?(\d+)?$/;
// Extract least significant 5 bits
const COMBINATION_MASK = 0x1f;
// Extract least significant 14 bits
const EXPONENT_MASK = 0x3fff;
// Value of combination field for Inf
const COMBINATION_INFINITY = 30;
// Value of combination field for NaN
const COMBINATION_NAN = 31;
// Detect if the value is a digit
function isDigit(value) {
    return !isNaN(parseInt(value, 10));
}
// Divide two uint128 values
function divideu128(value) {
    const DIVISOR = long_1.Long.fromNumber(1000 * 1000 * 1000);
    let _rem = long_1.Long.fromNumber(0);
    if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
        return { quotient: value, rem: _rem };
    }
    for (let i = 0; i <= 3; i++) {
        // Adjust remainder to match value of next dividend
        _rem = _rem.shiftLeft(32);
        // Add the divided to _rem
        _rem = _rem.add(new long_1.Long(value.parts[i], 0));
        value.parts[i] = _rem.div(DIVISOR).low;
        _rem = _rem.modulo(DIVISOR);
    }
    return { quotient: value, rem: _rem };
}
// Multiply two Long values and return the 128 bit value
function multiply64x2(left, right) {
    if (!left && !right) {
        return { high: long_1.Long.fromNumber(0), low: long_1.Long.fromNumber(0) };
    }
    const leftHigh = left.shiftRightUnsigned(32);
    const leftLow = new long_1.Long(left.getLowBits(), 0);
    const rightHigh = right.shiftRightUnsigned(32);
    const rightLow = new long_1.Long(right.getLowBits(), 0);
    let productHigh = leftHigh.multiply(rightHigh);
    let productMid = leftHigh.multiply(rightLow);
    const productMid2 = leftLow.multiply(rightHigh);
    let productLow = leftLow.multiply(rightLow);
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productMid = new long_1.Long(productMid.getLowBits(), 0)
        .add(productMid2)
        .add(productLow.shiftRightUnsigned(32));
    productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    productLow = productMid.shiftLeft(32).add(new long_1.Long(productLow.getLowBits(), 0));
    // Return the 128 bit result
    return { high: productHigh, low: productLow };
}
function lessThan(left, right) {
    // Make values unsigned
    const uhleft = left.high >>> 0;
    const uhright = right.high >>> 0;
    // Compare high bits first
    if (uhleft < uhright) {
        return true;
    }
    else if (uhleft === uhright) {
        const ulleft = left.low >>> 0;
        const ulright = right.low >>> 0;
        if (ulleft < ulright)
            return true;
    }
    return false;
}
function invalidErr(string, message) {
    throw new TypeError(`"${string}" is not a valid Decimal128 string - ${message}`);
}
/**
 * A class representation of the BSON Decimal128 type.
 * @public
 */
class Decimal128 {
    /** @param bytes - a buffer containing the raw Decimal128 bytes in little endian order */
    constructor(bytes) {
        this.bytes = bytes;
    }
    /**
     * Create a Decimal128 instance from a string representation
     *
     * @param representation - a numeric string representation.
     */
    static fromString(representation) {
        // Parse state tracking
        let isNegative = false;
        let sawRadix = false;
        let foundNonZero = false;
        // Total number of significant digits (no leading or trailing zero)
        let significantDigits = 0;
        // Total number of significand digits read
        let nDigitsRead = 0;
        // Total number of digits (no leading zeros)
        let nDigits = 0;
        // The number of the digits after radix
        let radixPosition = 0;
        // The index of the first non-zero in *str*
        let firstNonZero = 0;
        // Digits Array
        const digits = [0];
        // The number of digits in digits
        let nDigitsStored = 0;
        // Insertion pointer for digits
        let digitsInsert = 0;
        // The index of the first non-zero digit
        let firstDigit = 0;
        // The index of the last digit
        let lastDigit = 0;
        // Exponent
        let exponent = 0;
        // loop index over array
        let i = 0;
        // The high 17 digits of the significand
        let significandHigh = new long_1.Long(0, 0);
        // The low 17 digits of the significand
        let significandLow = new long_1.Long(0, 0);
        // The biased exponent
        let biasedExponent = 0;
        // Read index
        let index = 0;
        // Naively prevent against REDOS attacks.
        // TODO: implementing a custom parsing for this, or refactoring the regex would yield
        //       further gains.
        if (representation.length >= 7000) {
            throw new TypeError('' + representation + ' not a valid Decimal128 string');
        }
        // Results
        const stringMatch = representation.match(PARSE_STRING_REGEXP);
        const infMatch = representation.match(PARSE_INF_REGEXP);
        const nanMatch = representation.match(PARSE_NAN_REGEXP);
        // Validate the string
        if ((!stringMatch && !infMatch && !nanMatch) || representation.length === 0) {
            throw new TypeError('' + representation + ' not a valid Decimal128 string');
        }
        if (stringMatch) {
            // full_match = stringMatch[0]
            // sign = stringMatch[1]
            const unsignedNumber = stringMatch[2];
            // stringMatch[3] is undefined if a whole number (ex "1", 12")
            // but defined if a number w/ decimal in it (ex "1.0, 12.2")
            const e = stringMatch[4];
            const expSign = stringMatch[5];
            const expNumber = stringMatch[6];
            // they provided e, but didn't give an exponent number. for ex "1e"
            if (e && expNumber === undefined)
                invalidErr(representation, 'missing exponent power');
            // they provided e, but didn't give a number before it. for ex "e1"
            if (e && unsignedNumber === undefined)
                invalidErr(representation, 'missing exponent base');
            if (e === undefined && (expSign || expNumber)) {
                invalidErr(representation, 'missing e before exponent');
            }
        }
        // Get the negative or positive sign
        if (representation[index] === '+' || representation[index] === '-') {
            isNegative = representation[index++] === '-';
        }
        // Check if user passed Infinity or NaN
        if (!isDigit(representation[index]) && representation[index] !== '.') {
            if (representation[index] === 'i' || representation[index] === 'I') {
                return new Decimal128(buffer_1.Buffer.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
            }
            else if (representation[index] === 'N') {
                return new Decimal128(buffer_1.Buffer.from(NAN_BUFFER));
            }
        }
        // Read all the digits
        while (isDigit(representation[index]) || representation[index] === '.') {
            if (representation[index] === '.') {
                if (sawRadix)
                    invalidErr(representation, 'contains multiple periods');
                sawRadix = true;
                index = index + 1;
                continue;
            }
            if (nDigitsStored < 34) {
                if (representation[index] !== '0' || foundNonZero) {
                    if (!foundNonZero) {
                        firstNonZero = nDigitsRead;
                    }
                    foundNonZero = true;
                    // Only store 34 digits
                    digits[digitsInsert++] = parseInt(representation[index], 10);
                    nDigitsStored = nDigitsStored + 1;
                }
            }
            if (foundNonZero)
                nDigits = nDigits + 1;
            if (sawRadix)
                radixPosition = radixPosition + 1;
            nDigitsRead = nDigitsRead + 1;
            index = index + 1;
        }
        if (sawRadix && !nDigitsRead)
            throw new TypeError('' + representation + ' not a valid Decimal128 string');
        // Read exponent if exists
        if (representation[index] === 'e' || representation[index] === 'E') {
            // Read exponent digits
            const match = representation.substr(++index).match(EXPONENT_REGEX);
            // No digits read
            if (!match || !match[2])
                return new Decimal128(buffer_1.Buffer.from(NAN_BUFFER));
            // Get exponent
            exponent = parseInt(match[0], 10);
            // Adjust the index
            index = index + match[0].length;
        }
        // Return not a number
        if (representation[index])
            return new Decimal128(buffer_1.Buffer.from(NAN_BUFFER));
        // Done reading input
        // Find first non-zero digit in digits
        firstDigit = 0;
        if (!nDigitsStored) {
            firstDigit = 0;
            lastDigit = 0;
            digits[0] = 0;
            nDigits = 1;
            nDigitsStored = 1;
            significantDigits = 0;
        }
        else {
            lastDigit = nDigitsStored - 1;
            significantDigits = nDigits;
            if (significantDigits !== 1) {
                while (representation[firstNonZero + significantDigits - 1] === '0') {
                    significantDigits = significantDigits - 1;
                }
            }
        }
        // Normalization of exponent
        // Correct exponent based on radix position, and shift significand as needed
        // to represent user input
        // Overflow prevention
        if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
            exponent = EXPONENT_MIN;
        }
        else {
            exponent = exponent - radixPosition;
        }
        // Attempt to normalize the exponent
        while (exponent > EXPONENT_MAX) {
            // Shift exponent to significand and decrease
            lastDigit = lastDigit + 1;
            if (lastDigit - firstDigit > MAX_DIGITS) {
                // Check if we have a zero then just hard clamp, otherwise fail
                const digitsString = digits.join('');
                if (digitsString.match(/^0+$/)) {
                    exponent = EXPONENT_MAX;
                    break;
                }
                invalidErr(representation, 'overflow');
            }
            exponent = exponent - 1;
        }
        while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
            // Shift last digit. can only do this if < significant digits than # stored.
            if (lastDigit === 0 && significantDigits < nDigitsStored) {
                exponent = EXPONENT_MIN;
                significantDigits = 0;
                break;
            }
            if (nDigitsStored < nDigits) {
                // adjust to match digits not stored
                nDigits = nDigits - 1;
            }
            else {
                // adjust to round
                lastDigit = lastDigit - 1;
            }
            if (exponent < EXPONENT_MAX) {
                exponent = exponent + 1;
            }
            else {
                // Check if we have a zero then just hard clamp, otherwise fail
                const digitsString = digits.join('');
                if (digitsString.match(/^0+$/)) {
                    exponent = EXPONENT_MAX;
                    break;
                }
                invalidErr(representation, 'overflow');
            }
        }
        // Round
        // We've normalized the exponent, but might still need to round.
        if (lastDigit - firstDigit + 1 < significantDigits) {
            let endOfString = nDigitsRead;
            // If we have seen a radix point, 'string' is 1 longer than we have
            // documented with ndigits_read, so inc the position of the first nonzero
            // digit and the position that digits are read to.
            if (sawRadix) {
                firstNonZero = firstNonZero + 1;
                endOfString = endOfString + 1;
            }
            // if negative, we need to increment again to account for - sign at start.
            if (isNegative) {
                firstNonZero = firstNonZero + 1;
                endOfString = endOfString + 1;
            }
            const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
            let roundBit = 0;
            if (roundDigit >= 5) {
                roundBit = 1;
                if (roundDigit === 5) {
                    roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
                    for (i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
                        if (parseInt(representation[i], 10)) {
                            roundBit = 1;
                            break;
                        }
                    }
                }
            }
            if (roundBit) {
                let dIdx = lastDigit;
                for (; dIdx >= 0; dIdx--) {
                    if (++digits[dIdx] > 9) {
                        digits[dIdx] = 0;
                        // overflowed most significant digit
                        if (dIdx === 0) {
                            if (exponent < EXPONENT_MAX) {
                                exponent = exponent + 1;
                                digits[dIdx] = 1;
                            }
                            else {
                                return new Decimal128(buffer_1.Buffer.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
                            }
                        }
                    }
                }
            }
        }
        // Encode significand
        // The high 17 digits of the significand
        significandHigh = long_1.Long.fromNumber(0);
        // The low 17 digits of the significand
        significandLow = long_1.Long.fromNumber(0);
        // read a zero
        if (significantDigits === 0) {
            significandHigh = long_1.Long.fromNumber(0);
            significandLow = long_1.Long.fromNumber(0);
        }
        else if (lastDigit - firstDigit < 17) {
            let dIdx = firstDigit;
            significandLow = long_1.Long.fromNumber(digits[dIdx++]);
            significandHigh = new long_1.Long(0, 0);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(long_1.Long.fromNumber(10));
                significandLow = significandLow.add(long_1.Long.fromNumber(digits[dIdx]));
            }
        }
        else {
            let dIdx = firstDigit;
            significandHigh = long_1.Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit - 17; dIdx++) {
                significandHigh = significandHigh.multiply(long_1.Long.fromNumber(10));
                significandHigh = significandHigh.add(long_1.Long.fromNumber(digits[dIdx]));
            }
            significandLow = long_1.Long.fromNumber(digits[dIdx++]);
            for (; dIdx <= lastDigit; dIdx++) {
                significandLow = significandLow.multiply(long_1.Long.fromNumber(10));
                significandLow = significandLow.add(long_1.Long.fromNumber(digits[dIdx]));
            }
        }
        const significand = multiply64x2(significandHigh, long_1.Long.fromString('100000000000000000'));
        significand.low = significand.low.add(significandLow);
        if (lessThan(significand.low, significandLow)) {
            significand.high = significand.high.add(long_1.Long.fromNumber(1));
        }
        // Biased exponent
        biasedExponent = exponent + EXPONENT_BIAS;
        const dec = { low: long_1.Long.fromNumber(0), high: long_1.Long.fromNumber(0) };
        // Encode combination, exponent, and significand.
        if (significand.high.shiftRightUnsigned(49).and(long_1.Long.fromNumber(1)).equals(long_1.Long.fromNumber(1))) {
            // Encode '11' into bits 1 to 3
            dec.high = dec.high.or(long_1.Long.fromNumber(0x3).shiftLeft(61));
            dec.high = dec.high.or(long_1.Long.fromNumber(biasedExponent).and(long_1.Long.fromNumber(0x3fff).shiftLeft(47)));
            dec.high = dec.high.or(significand.high.and(long_1.Long.fromNumber(0x7fffffffffff)));
        }
        else {
            dec.high = dec.high.or(long_1.Long.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
            dec.high = dec.high.or(significand.high.and(long_1.Long.fromNumber(0x1ffffffffffff)));
        }
        dec.low = significand.low;
        // Encode sign
        if (isNegative) {
            dec.high = dec.high.or(long_1.Long.fromString('9223372036854775808'));
        }
        // Encode into a buffer
        const buffer = buffer_1.Buffer.alloc(16);
        index = 0;
        // Encode the low 64 bits of the decimal
        // Encode low bits
        buffer[index++] = dec.low.low & 0xff;
        buffer[index++] = (dec.low.low >> 8) & 0xff;
        buffer[index++] = (dec.low.low >> 16) & 0xff;
        buffer[index++] = (dec.low.low >> 24) & 0xff;
        // Encode high bits
        buffer[index++] = dec.low.high & 0xff;
        buffer[index++] = (dec.low.high >> 8) & 0xff;
        buffer[index++] = (dec.low.high >> 16) & 0xff;
        buffer[index++] = (dec.low.high >> 24) & 0xff;
        // Encode the high 64 bits of the decimal
        // Encode low bits
        buffer[index++] = dec.high.low & 0xff;
        buffer[index++] = (dec.high.low >> 8) & 0xff;
        buffer[index++] = (dec.high.low >> 16) & 0xff;
        buffer[index++] = (dec.high.low >> 24) & 0xff;
        // Encode high bits
        buffer[index++] = dec.high.high & 0xff;
        buffer[index++] = (dec.high.high >> 8) & 0xff;
        buffer[index++] = (dec.high.high >> 16) & 0xff;
        buffer[index++] = (dec.high.high >> 24) & 0xff;
        // Return the new Decimal128
        return new Decimal128(buffer);
    }
    /** Create a string representation of the raw Decimal128 value */
    toString() {
        // Note: bits in this routine are referred to starting at 0,
        // from the sign bit, towards the coefficient.
        // decoded biased exponent (14 bits)
        let biased_exponent;
        // the number of significand digits
        let significand_digits = 0;
        // the base-10 digits in the significand
        const significand = new Array(36);
        for (let i = 0; i < significand.length; i++)
            significand[i] = 0;
        // read pointer into significand
        let index = 0;
        // true if the number is zero
        let is_zero = false;
        // the most significant significand bits (50-46)
        let significand_msb;
        // temporary storage for significand decoding
        let significand128 = { parts: [0, 0, 0, 0] };
        // indexing variables
        let j, k;
        // Output string
        const string = [];
        // Unpack index
        index = 0;
        // Buffer reference
        const buffer = this.bytes;
        // Unpack the low 64bits into a long
        // bits 96 - 127
        const low = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        // bits 64 - 95
        const midl = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        // Unpack the high 64bits into a long
        // bits 32 - 63
        const midh = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        // bits 0 - 31
        const high = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
        // Unpack index
        index = 0;
        // Create the state of the decimal
        const dec = {
            low: new long_1.Long(low, midl),
            high: new long_1.Long(midh, high)
        };
        if (dec.high.lessThan(long_1.Long.ZERO)) {
            string.push('-');
        }
        // Decode combination field and exponent
        // bits 1 - 5
        const combination = (high >> 26) & COMBINATION_MASK;
        if (combination >> 3 === 3) {
            // Check for 'special' values
            if (combination === COMBINATION_INFINITY) {
                return string.join('') + 'Infinity';
            }
            else if (combination === COMBINATION_NAN) {
                return 'NaN';
            }
            else {
                biased_exponent = (high >> 15) & EXPONENT_MASK;
                significand_msb = 0x08 + ((high >> 14) & 0x01);
            }
        }
        else {
            significand_msb = (high >> 14) & 0x07;
            biased_exponent = (high >> 17) & EXPONENT_MASK;
        }
        // unbiased exponent
        const exponent = biased_exponent - EXPONENT_BIAS;
        // Create string of significand digits
        // Convert the 114-bit binary number represented by
        // (significand_high, significand_low) to at most 34 decimal
        // digits through modulo and division.
        significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
        significand128.parts[1] = midh;
        significand128.parts[2] = midl;
        significand128.parts[3] = low;
        if (significand128.parts[0] === 0 &&
            significand128.parts[1] === 0 &&
            significand128.parts[2] === 0 &&
            significand128.parts[3] === 0) {
            is_zero = true;
        }
        else {
            for (k = 3; k >= 0; k--) {
                let least_digits = 0;
                // Perform the divide
                const result = divideu128(significand128);
                significand128 = result.quotient;
                least_digits = result.rem.low;
                // We now have the 9 least significant digits (in base 2).
                // Convert and output to string.
                if (!least_digits)
                    continue;
                for (j = 8; j >= 0; j--) {
                    // significand[k * 9 + j] = Math.round(least_digits % 10);
                    significand[k * 9 + j] = least_digits % 10;
                    // least_digits = Math.round(least_digits / 10);
                    least_digits = Math.floor(least_digits / 10);
                }
            }
        }
        // Output format options:
        // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
        // Regular    - ddd.ddd
        if (is_zero) {
            significand_digits = 1;
            significand[index] = 0;
        }
        else {
            significand_digits = 36;
            while (!significand[index]) {
                significand_digits = significand_digits - 1;
                index = index + 1;
            }
        }
        // the exponent if scientific notation is used
        const scientific_exponent = significand_digits - 1 + exponent;
        // The scientific exponent checks are dictated by the string conversion
        // specification and are somewhat arbitrary cutoffs.
        //
        // We must check exponent > 0, because if this is the case, the number
        // has trailing zeros.  However, we *cannot* output these trailing zeros,
        // because doing so would change the precision of the value, and would
        // change stored data if the string converted number is round tripped.
        if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
            // Scientific format
            // if there are too many significant digits, we should just be treating numbers
            // as + or - 0 and using the non-scientific exponent (this is for the "invalid
            // representation should be treated as 0/-0" spec cases in decimal128-1.json)
            if (significand_digits > 34) {
                string.push(`${0}`);
                if (exponent > 0)
                    string.push('E+' + exponent);
                else if (exponent < 0)
                    string.push('E' + exponent);
                return string.join('');
            }
            string.push(`${significand[index++]}`);
            significand_digits = significand_digits - 1;
            if (significand_digits) {
                string.push('.');
            }
            for (let i = 0; i < significand_digits; i++) {
                string.push(`${significand[index++]}`);
            }
            // Exponent
            string.push('E');
            if (scientific_exponent > 0) {
                string.push('+' + scientific_exponent);
            }
            else {
                string.push(`${scientific_exponent}`);
            }
        }
        else {
            // Regular format with no decimal place
            if (exponent >= 0) {
                for (let i = 0; i < significand_digits; i++) {
                    string.push(`${significand[index++]}`);
                }
            }
            else {
                let radix_position = significand_digits + exponent;
                // non-zero digits before radix
                if (radix_position > 0) {
                    for (let i = 0; i < radix_position; i++) {
                        string.push(`${significand[index++]}`);
                    }
                }
                else {
                    string.push('0');
                }
                string.push('.');
                // add leading zeros after radix
                while (radix_position++ < 0) {
                    string.push('0');
                }
                for (let i = 0; i < significand_digits - Math.max(radix_position - 1, 0); i++) {
                    string.push(`${significand[index++]}`);
                }
            }
        }
        return string.join('');
    }
    toJSON() {
        return { $numberDecimal: this.toString() };
    }
    /** @internal */
    toExtendedJSON() {
        return { $numberDecimal: this.toString() };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        return Decimal128.fromString(doc.$numberDecimal);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `Decimal128("${this.toString()}")`;
    }
}
exports.Decimal128 = Decimal128;
Object.defineProperty(Decimal128.prototype, '_bsontype', { value: 'Decimal128' });
//# sourceMappingURL=decimal128.js.map
}, function(modId) { var map = {"./long":1609067987844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987844, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Long = void 0;
const utils_1 = require("./parser/utils");
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
let wasm = undefined;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(
    // prettier-ignore
    new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
}
catch (_a) {
    // no wasm support
}
const TWO_PWR_16_DBL = 1 << 16;
const TWO_PWR_24_DBL = 1 << 24;
const TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
const TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
const TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/** A cache of the Long representations of small integer values. */
const INT_CACHE = {};
/** A cache of the Long representations of small unsigned integer values. */
const UINT_CACHE = {};
/**
 * A class representing a 64-bit integer
 * @public
 * @remarks
 * The internal representation of a long is the two given signed, 32-bit values.
 * We use 32-bit pieces because these are the size of integers on which
 * Javascript performs bit-operations.  For operations like addition and
 * multiplication, we split each number into 16 bit pieces, which can easily be
 * multiplied within Javascript's floating-point representation without overflow
 * or change in sign.
 * In the algorithms below, we frequently reduce the negative case to the
 * positive case by negating the input(s) and then post-processing the result.
 * Note that we must ALWAYS check specially whether those values are MIN_VALUE
 * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
 * a positive number, it overflows back into a negative).  Not handling this
 * case would often result in infinite recursion.
 * Common constant values ZERO, ONE, NEG_ONE, etc. are found as static properties on this class.
 */
class Long {
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @param low - The low (signed) 32 bits of the long
     * @param high - The high (signed) 32 bits of the long
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    constructor(low = 0, high = 0, unsigned) {
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
        Object.defineProperty(this, '__isLong__', {
            value: true,
            configurable: false,
            writable: false,
            enumerable: false
        });
    }
    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits.
     * Each is assumed to use 32 bits.
     * @param lowBits - The low 32 bits
     * @param highBits - The high 32 bits
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    /**
     * Returns a Long representing the given 32 bit integer value.
     * @param value - The 32 bit integer in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromInt(value, unsigned) {
        let obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if ((cache = 0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        }
        else {
            value |= 0;
            if ((cache = -128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = Long.fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @param value - The number in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromNumber(value, unsigned) {
        if (isNaN(value))
            return unsigned ? Long.UZERO : Long.ZERO;
        if (unsigned) {
            if (value < 0)
                return Long.UZERO;
            if (value >= TWO_PWR_64_DBL)
                return Long.MAX_UNSIGNED_VALUE;
        }
        else {
            if (value <= -TWO_PWR_63_DBL)
                return Long.MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return Long.MAX_VALUE;
        }
        if (value < 0)
            return Long.fromNumber(-value, unsigned).neg();
        return Long.fromBits(value % TWO_PWR_32_DBL | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }
    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @param value - The number in question
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBigInt(value, unsigned) {
        return Long.fromString(value.toString(), unsigned);
    }
    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @param str - The textual representation of the Long
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @param radix - The radix in which the text is written (2-36), defaults to 10
     * @returns The corresponding Long value
     */
    static fromString(str, unsigned, radix) {
        if (str.length === 0)
            throw Error('empty string');
        if (str === 'NaN' || str === 'Infinity' || str === '+Infinity' || str === '-Infinity')
            return Long.ZERO;
        if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            (radix = unsigned), (unsigned = false);
        }
        else {
            unsigned = !!unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        let p;
        if ((p = str.indexOf('-')) > 0)
            throw Error('interior hyphen');
        else if (p === 0) {
            return Long.fromString(str.substring(1), unsigned, radix).neg();
        }
        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        const radixToPower = Long.fromNumber(Math.pow(radix, 8));
        let result = Long.ZERO;
        for (let i = 0; i < str.length; i += 8) {
            const size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                const power = Long.fromNumber(Math.pow(radix, size));
                result = result.mul(power).add(Long.fromNumber(value));
            }
            else {
                result = result.mul(radixToPower);
                result = result.add(Long.fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    /**
     * Creates a Long from its byte representation.
     * @param bytes - Byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @param le - Whether little or big endian, defaults to big endian
     * @returns The corresponding Long value
     */
    static fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    }
    /**
     * Creates a Long from its little endian byte representation.
     * @param bytes - Little endian byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24), bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24), unsigned);
    }
    /**
     * Creates a Long from its big endian byte representation.
     * @param bytes - Big endian byte representation
     * @param unsigned - Whether unsigned or not, defaults to signed
     * @returns The corresponding Long value
     */
    static fromBytesBE(bytes, unsigned) {
        return new Long((bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7], (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3], unsigned);
    }
    /**
     * Tests if the specified object is a Long.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    static isLong(value) {
        return utils_1.isObjectLike(value) && value['__isLong__'] === true;
    }
    /**
     * Converts the specified value to a Long.
     * @param unsigned - Whether unsigned or not, defaults to signed
     */
    static fromValue(val, unsigned) {
        if (typeof val === 'number')
            return Long.fromNumber(val, unsigned);
        if (typeof val === 'string')
            return Long.fromString(val, unsigned);
        // Throws for non-objects, converts non-instanceof Long:
        return Long.fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }
    /** Returns the sum of this and the specified Long. */
    add(addend) {
        if (!Long.isLong(addend))
            addend = Long.fromValue(addend);
        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = addend.high >>> 16;
        const b32 = addend.high & 0xffff;
        const b16 = addend.low >>> 16;
        const b00 = addend.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 + b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    /**
     * Returns the sum of this and the specified Long.
     * @returns Sum
     */
    and(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    }
    /**
     * Compares this Long's value with the specified's.
     * @returns 0 if they are the same, 1 if the this is greater and -1 if the given one is greater
     */
    compare(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.eq(other))
            return 0;
        const thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        // At this point the sign bits are the same
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return other.high >>> 0 > this.high >>> 0 ||
            (other.high === this.high && other.low >>> 0 > this.low >>> 0)
            ? -1
            : 1;
    }
    /** This is an alias of {@link Long.compare} */
    comp(other) {
        return this.compare(other);
    }
    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or unsigned if this Long is unsigned.
     * @returns Quotient
     */
    divide(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        if (divisor.isZero())
            throw Error('division by zero');
        // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned &&
                this.high === -0x80000000 &&
                divisor.low === -1 &&
                divisor.high === -1) {
                // be consistent with non-wasm code path
                return this;
            }
            const low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (this.isZero())
            return this.unsigned ? Long.UZERO : Long.ZERO;
        let approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(Long.MIN_VALUE)) {
                if (divisor.eq(Long.ONE) || divisor.eq(Long.NEG_ONE))
                    return Long.MIN_VALUE;
                // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(Long.MIN_VALUE))
                    return Long.ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    const halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(Long.ZERO)) {
                        return divisor.isNegative() ? Long.ONE : Long.NEG_ONE;
                    }
                    else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            }
            else if (divisor.eq(Long.MIN_VALUE))
                return this.unsigned ? Long.UZERO : Long.ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            }
            else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = Long.ZERO;
        }
        else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return Long.UZERO;
            if (divisor.gt(this.shru(1)))
                // 15 >>> 1 = 7 ; with divisor = 8 ; true
                return Long.UONE;
            res = Long.UZERO;
        }
        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while (rem.gte(divisor)) {
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            const log2 = Math.ceil(Math.log(approx) / Math.LN2);
            const delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            let approxRes = Long.fromNumber(approx);
            let approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = Long.fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }
            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero())
                approxRes = Long.ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    }
    /**This is an alias of {@link Long.divide} */
    div(divisor) {
        return this.divide(divisor);
    }
    /**
     * Tests if this Long's value equals the specified's.
     * @param other - Other value
     */
    equals(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    }
    /** This is an alias of {@link Long.equals} */
    eq(other) {
        return this.equals(other);
    }
    /** Gets the high 32 bits as a signed integer. */
    getHighBits() {
        return this.high;
    }
    /** Gets the high 32 bits as an unsigned integer. */
    getHighBitsUnsigned() {
        return this.high >>> 0;
    }
    /** Gets the low 32 bits as a signed integer. */
    getLowBits() {
        return this.low;
    }
    /** Gets the low 32 bits as an unsigned integer. */
    getLowBitsUnsigned() {
        return this.low >>> 0;
    }
    /** Gets the number of bits needed to represent the absolute value of this Long. */
    getNumBitsAbs() {
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            return this.eq(Long.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        }
        const val = this.high !== 0 ? this.high : this.low;
        let bit;
        for (bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) !== 0)
                break;
        return this.high !== 0 ? bit + 33 : bit + 1;
    }
    /** Tests if this Long's value is greater than the specified's. */
    greaterThan(other) {
        return this.comp(other) > 0;
    }
    /** This is an alias of {@link Long.greaterThan} */
    gt(other) {
        return this.greaterThan(other);
    }
    /** Tests if this Long's value is greater than or equal the specified's. */
    greaterThanOrEqual(other) {
        return this.comp(other) >= 0;
    }
    /** This is an alias of {@link Long.greaterThanOrEqual} */
    gte(other) {
        return this.greaterThanOrEqual(other);
    }
    /** This is an alias of {@link Long.greaterThanOrEqual} */
    ge(other) {
        return this.greaterThanOrEqual(other);
    }
    /** Tests if this Long's value is even. */
    isEven() {
        return (this.low & 1) === 0;
    }
    /** Tests if this Long's value is negative. */
    isNegative() {
        return !this.unsigned && this.high < 0;
    }
    /** Tests if this Long's value is odd. */
    isOdd() {
        return (this.low & 1) === 1;
    }
    /** Tests if this Long's value is positive. */
    isPositive() {
        return this.unsigned || this.high >= 0;
    }
    /** Tests if this Long's value equals zero. */
    isZero() {
        return this.high === 0 && this.low === 0;
    }
    /** Tests if this Long's value is less than the specified's. */
    lessThan(other) {
        return this.comp(other) < 0;
    }
    /** This is an alias of {@link Long#lessThan}. */
    lt(other) {
        return this.lessThan(other);
    }
    /** Tests if this Long's value is less than or equal the specified's. */
    lessThanOrEqual(other) {
        return this.comp(other) <= 0;
    }
    /** This is an alias of {@link Long.lessThanOrEqual} */
    lte(other) {
        return this.lessThanOrEqual(other);
    }
    /** Returns this Long modulo the specified. */
    modulo(divisor) {
        if (!Long.isLong(divisor))
            divisor = Long.fromValue(divisor);
        // use wasm support if present
        if (wasm) {
            const low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    }
    /** This is an alias of {@link Long.modulo} */
    mod(divisor) {
        return this.modulo(divisor);
    }
    /** This is an alias of {@link Long.modulo} */
    rem(divisor) {
        return this.modulo(divisor);
    }
    /**
     * Returns the product of this and the specified Long.
     * @param multiplier - Multiplier
     * @returns Product
     */
    multiply(multiplier) {
        if (this.isZero())
            return Long.ZERO;
        if (!Long.isLong(multiplier))
            multiplier = Long.fromValue(multiplier);
        // use wasm support if present
        if (wasm) {
            const low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
            return Long.fromBits(low, wasm.get_high(), this.unsigned);
        }
        if (multiplier.isZero())
            return Long.ZERO;
        if (this.eq(Long.MIN_VALUE))
            return multiplier.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (multiplier.eq(Long.MIN_VALUE))
            return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        }
        else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
        // If both longs are small, use float multiplication
        if (this.lt(Long.TWO_PWR_24) && multiplier.lt(Long.TWO_PWR_24))
            return Long.fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.
        const a48 = this.high >>> 16;
        const a32 = this.high & 0xffff;
        const a16 = this.low >>> 16;
        const a00 = this.low & 0xffff;
        const b48 = multiplier.high >>> 16;
        const b32 = multiplier.high & 0xffff;
        const b16 = multiplier.low >>> 16;
        const b00 = multiplier.low & 0xffff;
        let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xffff;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xffff;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xffff;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xffff;
        return Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    }
    /** This is an alias of {@link Long.multiply} */
    mul(multiplier) {
        return this.multiply(multiplier);
    }
    /** Returns the Negation of this Long's value. */
    negate() {
        if (!this.unsigned && this.eq(Long.MIN_VALUE))
            return Long.MIN_VALUE;
        return this.not().add(Long.ONE);
    }
    /** This is an alias of {@link Long.negate} */
    neg() {
        return this.negate();
    }
    /** Returns the bitwise NOT of this Long. */
    not() {
        return Long.fromBits(~this.low, ~this.high, this.unsigned);
    }
    /** Tests if this Long's value differs from the specified's. */
    notEquals(other) {
        return !this.equals(other);
    }
    /** This is an alias of {@link Long.notEquals} */
    neq(other) {
        return this.notEquals(other);
    }
    /** This is an alias of {@link Long.notEquals} */
    ne(other) {
        return this.notEquals(other);
    }
    /**
     * Returns the bitwise OR of this Long and the specified.
     */
    or(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    }
    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftLeft(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return Long.fromBits(0, this.low << (numBits - 32), this.unsigned);
    }
    /** This is an alias of {@link Long.shiftLeft} */
    shl(numBits) {
        return this.shiftLeft(numBits);
    }
    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftRight(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return Long.fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return Long.fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    }
    /** This is an alias of {@link Long.shiftRight} */
    shr(numBits) {
        return this.shiftRight(numBits);
    }
    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @param numBits - Number of bits
     * @returns Shifted Long
     */
    shiftRightUnsigned(numBits) {
        if (Long.isLong(numBits))
            numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
            return this;
        else {
            const high = this.high;
            if (numBits < 32) {
                const low = this.low;
                return Long.fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            }
            else if (numBits === 32)
                return Long.fromBits(high, 0, this.unsigned);
            else
                return Long.fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    }
    /** This is an alias of {@link Long.shiftRightUnsigned} */
    shr_u(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    /** This is an alias of {@link Long.shiftRightUnsigned} */
    shru(numBits) {
        return this.shiftRightUnsigned(numBits);
    }
    /**
     * Returns the difference of this and the specified Long.
     * @param subtrahend - Subtrahend
     * @returns Difference
     */
    subtract(subtrahend) {
        if (!Long.isLong(subtrahend))
            subtrahend = Long.fromValue(subtrahend);
        return this.add(subtrahend.neg());
    }
    /** This is an alias of {@link Long.subtract} */
    sub(subtrahend) {
        return this.subtract(subtrahend);
    }
    /** Converts the Long to a 32 bit integer, assuming it is a 32 bit integer. */
    toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    }
    /** Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa). */
    toNumber() {
        if (this.unsigned)
            return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    }
    /** Converts the Long to a BigInt (arbitrary precision). */
    toBigInt() {
        return BigInt(this.toString());
    }
    /**
     * Converts this Long to its byte representation.
     * @param le - Whether little or big endian, defaults to big endian
     * @returns Byte representation
     */
    toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    }
    /**
     * Converts this Long to its little endian byte representation.
     * @returns Little endian byte representation
     */
    toBytesLE() {
        const hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            (lo >>> 8) & 0xff,
            (lo >>> 16) & 0xff,
            lo >>> 24,
            hi & 0xff,
            (hi >>> 8) & 0xff,
            (hi >>> 16) & 0xff,
            hi >>> 24
        ];
    }
    /**
     * Converts this Long to its big endian byte representation.
     * @returns Big endian byte representation
     */
    toBytesBE() {
        const hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            (hi >>> 16) & 0xff,
            (hi >>> 8) & 0xff,
            hi & 0xff,
            lo >>> 24,
            (lo >>> 16) & 0xff,
            (lo >>> 8) & 0xff,
            lo & 0xff
        ];
    }
    /**
     * Converts this Long to signed.
     */
    toSigned() {
        if (!this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, false);
    }
    /**
     * Converts the Long to a string written in the specified radix.
     * @param radix - Radix (2-36), defaults to 10
     * @throws RangeError If `radix` is out of range
     */
    toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(Long.MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                const radixLong = Long.fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            }
            else
                return '-' + this.neg().toString(radix);
        }
        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        const radixToPower = Long.fromNumber(Math.pow(radix, 6), this.unsigned);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let rem = this;
        let result = '';
        // eslint-disable-next-line no-constant-condition
        while (true) {
            const remDiv = rem.div(radixToPower);
            const intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
            let digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) {
                return digits + result;
            }
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    }
    /** Converts this Long to unsigned. */
    toUnsigned() {
        if (this.unsigned)
            return this;
        return Long.fromBits(this.low, this.high, true);
    }
    /** Returns the bitwise XOR of this Long and the given one. */
    xor(other) {
        if (!Long.isLong(other))
            other = Long.fromValue(other);
        return Long.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    }
    /** This is an alias of {@link Long.isZero} */
    eqz() {
        return this.isZero();
    }
    /** This is an alias of {@link Long.lessThanOrEqual} */
    le(other) {
        return this.lessThanOrEqual(other);
    }
    /*
     ****************************************************************
     *                  BSON SPECIFIC ADDITIONS                     *
     ****************************************************************
     */
    toExtendedJSON(options) {
        if (options && options.relaxed)
            return this.toNumber();
        return { $numberLong: this.toString() };
    }
    static fromExtendedJSON(doc, options) {
        const result = Long.fromString(doc.$numberLong);
        return options && options.relaxed ? result.toNumber() : result;
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `Long("${this.toString()}")`;
    }
}
exports.Long = Long;
Long.TWO_PWR_24 = Long.fromInt(TWO_PWR_24_DBL);
/** Maximum unsigned value. */
Long.MAX_UNSIGNED_VALUE = Long.fromBits(0xffffffff | 0, 0xffffffff | 0, true);
/** Signed zero */
Long.ZERO = Long.fromInt(0);
/** Unsigned zero. */
Long.UZERO = Long.fromInt(0, true);
/** Signed one. */
Long.ONE = Long.fromInt(1);
/** Unsigned one. */
Long.UONE = Long.fromInt(1, true);
/** Signed negative one. */
Long.NEG_ONE = Long.fromInt(-1);
/** Maximum signed value. */
Long.MAX_VALUE = Long.fromBits(0xffffffff | 0, 0x7fffffff | 0, false);
/** Minimum signed value. */
Long.MIN_VALUE = Long.fromBits(0, 0x80000000 | 0, false);
Object.defineProperty(Long.prototype, '__isLong__', { value: true });
Object.defineProperty(Long.prototype, '_bsontype', { value: 'Long' });
//# sourceMappingURL=long.js.map
}, function(modId) { var map = {"./parser/utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987845, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Double = void 0;
/**
 * A class representation of the BSON Double type.
 * @public
 */
class Double {
    /**
     * Create a Double type
     *
     * @param value - the number we want to represent as a double.
     */
    constructor(value) {
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value;
    }
    /**
     * Access the number value.
     *
     * @returns returns the wrapped double number.
     */
    valueOf() {
        return this.value;
    }
    /** @internal */
    toJSON() {
        return this.value;
    }
    /** @internal */
    toExtendedJSON(options) {
        if (options && (options.legacy || (options.relaxed && isFinite(this.value)))) {
            return this.value;
        }
        // NOTE: JavaScript has +0 and -0, apparently to model limit calculations. If a user
        // explicitly provided `-0` then we need to ensure the sign makes it into the output
        if (Object.is(Math.sign(this.value), -0)) {
            return { $numberDouble: `-${this.value.toFixed(1)}` };
        }
        let $numberDouble;
        if (Number.isInteger(this.value)) {
            $numberDouble = this.value.toFixed(1);
            if ($numberDouble.length >= 13) {
                $numberDouble = this.value.toExponential(13).toUpperCase();
            }
        }
        else {
            $numberDouble = this.value.toString();
        }
        return { $numberDouble };
    }
    /** @internal */
    static fromExtendedJSON(doc, options) {
        const doubleValue = parseFloat(doc.$numberDouble);
        return options && options.relaxed ? doubleValue : new Double(doubleValue);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        const eJSON = this.toExtendedJSON();
        return `Double(${eJSON.$numberDouble})`;
    }
}
exports.Double = Double;
Object.defineProperty(Double.prototype, '_bsontype', { value: 'Double' });
//# sourceMappingURL=double.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987846, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.EJSON = exports.isBSONType = void 0;
const binary_1 = require("./binary");
const code_1 = require("./code");
const db_ref_1 = require("./db_ref");
const decimal128_1 = require("./decimal128");
const double_1 = require("./double");
const int_32_1 = require("./int_32");
const long_1 = require("./long");
const max_key_1 = require("./max_key");
const min_key_1 = require("./min_key");
const objectid_1 = require("./objectid");
const utils_1 = require("./parser/utils");
const regexp_1 = require("./regexp");
const symbol_1 = require("./symbol");
const timestamp_1 = require("./timestamp");
function isBSONType(value) {
    return (utils_1.isObjectLike(value) && Reflect.has(value, '_bsontype') && typeof value._bsontype === 'string');
}
exports.isBSONType = isBSONType;
// INT32 boundaries
const BSON_INT32_MAX = 0x7fffffff;
const BSON_INT32_MIN = -0x80000000;
// INT64 boundaries
const BSON_INT64_MAX = 0x7fffffffffffffff;
const BSON_INT64_MIN = -0x8000000000000000;
// all the types where we don't need to do any special processing and can just pass the EJSON
//straight to type.fromExtendedJSON
const keysToCodecs = {
    $oid: objectid_1.ObjectId,
    $binary: binary_1.Binary,
    $uuid: binary_1.Binary,
    $symbol: symbol_1.BSONSymbol,
    $numberInt: int_32_1.Int32,
    $numberDecimal: decimal128_1.Decimal128,
    $numberDouble: double_1.Double,
    $numberLong: long_1.Long,
    $minKey: min_key_1.MinKey,
    $maxKey: max_key_1.MaxKey,
    $regex: regexp_1.BSONRegExp,
    $regularExpression: regexp_1.BSONRegExp,
    $timestamp: timestamp_1.Timestamp
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deserializeValue(value, options = {}) {
    if (typeof value === 'number') {
        if (options.relaxed || options.legacy) {
            return value;
        }
        // if it's an integer, should interpret as smallest BSON integer
        // that can represent it exactly. (if out of range, interpret as double.)
        if (Math.floor(value) === value) {
            if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX)
                return new int_32_1.Int32(value);
            if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX)
                return long_1.Long.fromNumber(value);
        }
        // If the number is a non-integer or out of integer range, should interpret as BSON Double.
        return new double_1.Double(value);
    }
    // from here on out we're looking for bson types, so bail if its not an object
    if (value == null || typeof value !== 'object')
        return value;
    // upgrade deprecated undefined to null
    if (value.$undefined)
        return null;
    const keys = Object.keys(value).filter(k => k.startsWith('$') && value[k] != null);
    for (let i = 0; i < keys.length; i++) {
        const c = keysToCodecs[keys[i]];
        if (c)
            return c.fromExtendedJSON(value, options);
    }
    if (value.$date != null) {
        const d = value.$date;
        const date = new Date();
        if (options.legacy) {
            if (typeof d === 'number')
                date.setTime(d);
            else if (typeof d === 'string')
                date.setTime(Date.parse(d));
        }
        else {
            if (typeof d === 'string')
                date.setTime(Date.parse(d));
            else if (long_1.Long.isLong(d))
                date.setTime(d.toNumber());
            else if (typeof d === 'number' && options.relaxed)
                date.setTime(d);
        }
        return date;
    }
    if (value.$code != null) {
        const copy = Object.assign({}, value);
        if (value.$scope) {
            copy.$scope = deserializeValue(value.$scope);
        }
        return code_1.Code.fromExtendedJSON(value);
    }
    if (value.$ref != null || value.$dbPointer != null) {
        const v = value.$ref ? value : value.$dbPointer;
        // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
        // because of the order JSON.parse goes through the document
        if (v instanceof db_ref_1.DBRef)
            return v;
        const dollarKeys = Object.keys(v).filter(k => k.startsWith('$'));
        let valid = true;
        dollarKeys.forEach(k => {
            if (['$ref', '$id', '$db'].indexOf(k) === -1)
                valid = false;
        });
        // only make DBRef if $ keys are all valid
        if (valid)
            return db_ref_1.DBRef.fromExtendedJSON(v);
    }
    return value;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeArray(array, options) {
    return array.map((v) => serializeValue(v, options));
}
function getISOString(date) {
    const isoStr = date.toISOString();
    // we should only show milliseconds in timestamp if they're non-zero
    return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeValue(value, options) {
    if (Array.isArray(value))
        return serializeArray(value, options);
    if (value === undefined)
        return null;
    if (value instanceof Date) {
        const dateNum = value.getTime(), 
        // is it in year range 1970-9999?
        inRange = dateNum > -1 && dateNum < 253402318800000;
        if (options.legacy) {
            return options.relaxed && inRange
                ? { $date: value.getTime() }
                : { $date: getISOString(value) };
        }
        return options.relaxed && inRange
            ? { $date: getISOString(value) }
            : { $date: { $numberLong: value.getTime().toString() } };
    }
    if (typeof value === 'number' && !options.relaxed) {
        // it's an integer
        if (Math.floor(value) === value) {
            const int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX, int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX;
            // interpret as being of the smallest BSON integer type that can represent the number exactly
            if (int32Range)
                return { $numberInt: value.toString() };
            if (int64Range)
                return { $numberLong: value.toString() };
        }
        return { $numberDouble: value.toString() };
    }
    if (value instanceof RegExp) {
        let flags = value.flags;
        if (flags === undefined) {
            const match = value.toString().match(/[gimuy]*$/);
            if (match) {
                flags = match[0];
            }
        }
        const rx = new regexp_1.BSONRegExp(value.source, flags);
        return rx.toExtendedJSON(options);
    }
    if (value != null && typeof value === 'object')
        return serializeDocument(value, options);
    return value;
}
const BSON_TYPE_MAPPINGS = {
    Binary: (o) => new binary_1.Binary(o.value(), o.sub_type),
    Code: (o) => new code_1.Code(o.code, o.scope),
    DBRef: (o) => new db_ref_1.DBRef(o.collection || o.namespace, o.oid, o.db, o.fields),
    Decimal128: (o) => new decimal128_1.Decimal128(o.bytes),
    Double: (o) => new double_1.Double(o.value),
    Int32: (o) => new int_32_1.Int32(o.value),
    Long: (o) => long_1.Long.fromBits(
    // underscore variants for 1.x backwards compatibility
    o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_),
    MaxKey: () => new max_key_1.MaxKey(),
    MinKey: () => new min_key_1.MinKey(),
    ObjectID: (o) => new objectid_1.ObjectId(o),
    ObjectId: (o) => new objectid_1.ObjectId(o),
    BSONRegExp: (o) => new regexp_1.BSONRegExp(o.pattern, o.options),
    Symbol: (o) => new symbol_1.BSONSymbol(o.value),
    Timestamp: (o) => timestamp_1.Timestamp.fromBits(o.low, o.high)
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function serializeDocument(doc, options) {
    if (doc == null || typeof doc !== 'object')
        throw new Error('not an object instance');
    const bsontype = doc._bsontype;
    if (typeof bsontype === 'undefined') {
        // It's a regular object. Recursively serialize its property values.
        const _doc = {};
        for (const name in doc) {
            _doc[name] = serializeValue(doc[name], options);
        }
        return _doc;
    }
    else if (isBSONType(doc)) {
        // the "document" is really just a BSON type object
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let outDoc = doc;
        if (typeof outDoc.toExtendedJSON !== 'function') {
            // There's no EJSON serialization function on the object. It's probably an
            // object created by a previous version of this library (or another library)
            // that's duck-typing objects to look like they were generated by this library).
            // Copy the object into this library's version of that type.
            const mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
            if (!mapper) {
                throw new TypeError('Unrecognized or invalid _bsontype: ' + doc._bsontype);
            }
            outDoc = mapper(outDoc);
        }
        // Two BSON types may have nested objects that may need to be serialized too
        if (bsontype === 'Code' && outDoc.scope) {
            outDoc = new code_1.Code(outDoc.code, serializeValue(outDoc.scope, options));
        }
        else if (bsontype === 'DBRef' && outDoc.oid) {
            outDoc = new db_ref_1.DBRef(outDoc.collection, serializeValue(outDoc.oid, options), outDoc.db, outDoc.fields);
        }
        return outDoc.toExtendedJSON(options);
    }
    else {
        throw new Error('_bsontype must be a string, but was: ' + typeof bsontype);
    }
}
/**
 * EJSON parse / stringify API
 * @public
 */
// the namespace here is used to emulate `export * as EJSON from '...'`
// which as of now (sept 2020) api-extractor does not support
// eslint-disable-next-line @typescript-eslint/no-namespace
var EJSON;
(function (EJSON) {
    /**
     * Parse an Extended JSON string, constructing the JavaScript value or object described by that
     * string.
     *
     * @example
     * ```js
     * const { EJSON } = require('bson');
     * const text = '{ "int32": { "$numberInt": "10" } }';
     *
     * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
     * console.log(EJSON.parse(text, { relaxed: false }));
     *
     * // prints { int32: 10 }
     * console.log(EJSON.parse(text));
     * ```
     */
    function parse(text, options) {
        const finalOptions = Object.assign({}, { relaxed: true, legacy: false }, options);
        // relaxed implies not strict
        if (typeof finalOptions.relaxed === 'boolean')
            finalOptions.strict = !finalOptions.relaxed;
        if (typeof finalOptions.strict === 'boolean')
            finalOptions.relaxed = !finalOptions.strict;
        return JSON.parse(text, (_key, value) => deserializeValue(value, finalOptions));
    }
    EJSON.parse = parse;
    /**
     * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
     * function is specified or optionally including only the specified properties if a replacer array
     * is specified.
     *
     * @param value - The value to convert to extended JSON
     * @param replacer - A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
     * @param space - A String or Number object that's used to insert white space into the output JSON string for readability purposes.
     * @param options - Optional settings
     *
     * @example
     * ```js
     * const { EJSON } = require('bson');
     * const Int32 = require('mongodb').Int32;
     * const doc = { int32: new Int32(10) };
     *
     * // prints '{"int32":{"$numberInt":"10"}}'
     * console.log(EJSON.stringify(doc, { relaxed: false }));
     *
     * // prints '{"int32":10}'
     * console.log(EJSON.stringify(doc));
     * ```
     */
    function stringify(value, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    replacer, space, options) {
        if (space != null && typeof space === 'object') {
            options = space;
            space = 0;
        }
        if (replacer != null && typeof replacer === 'object' && !Array.isArray(replacer)) {
            options = replacer;
            replacer = undefined;
            space = 0;
        }
        options = Object.assign({}, { relaxed: true, legacy: false }, options);
        const doc = serializeValue(value, options);
        return JSON.stringify(doc, replacer, space);
    }
    EJSON.stringify = stringify;
    /**
     * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
     *
     * @param value - The object to serialize
     * @param options - Optional settings passed to the `stringify` function
     */
    function serialize(value, options) {
        options = options || {};
        return JSON.parse(stringify(value, options));
    }
    EJSON.serialize = serialize;
    /**
     * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
     *
     * @param ejson - The Extended JSON object to deserialize
     * @param options - Optional settings passed to the parse method
     */
    function deserialize(ejson, options) {
        options = options || {};
        return parse(JSON.stringify(ejson), options);
    }
    EJSON.deserialize = deserialize;
})(EJSON = exports.EJSON || (exports.EJSON = {}));
//# sourceMappingURL=extended_json.js.map
}, function(modId) { var map = {"./binary":1609067987837,"./code":1609067987841,"./db_ref":1609067987842,"./decimal128":1609067987843,"./double":1609067987845,"./int_32":1609067987847,"./long":1609067987844,"./max_key":1609067987848,"./min_key":1609067987849,"./objectid":1609067987850,"./parser/utils":1609067987839,"./regexp":1609067987851,"./symbol":1609067987852,"./timestamp":1609067987853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987847, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Int32 = void 0;
/**
 * A class representation of a BSON Int32 type.
 * @public
 */
class Int32 {
    /**
     * Create an Int32 type
     *
     * @param value - the number we want to represent as an int32.
     */
    constructor(value) {
        if (value instanceof Number) {
            value = value.valueOf();
        }
        this.value = +value;
    }
    /**
     * Access the number value.
     *
     * @returns returns the wrapped int32 number.
     */
    valueOf() {
        return this.value;
    }
    /** @internal */
    toJSON() {
        return this.value;
    }
    /** @internal */
    toExtendedJSON(options) {
        if (options && (options.relaxed || options.legacy))
            return this.value;
        return { $numberInt: this.value.toString() };
    }
    /** @internal */
    static fromExtendedJSON(doc, options) {
        return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `Int32(${this.valueOf()})`;
    }
}
exports.Int32 = Int32;
Object.defineProperty(Int32.prototype, '_bsontype', { value: 'Int32' });
//# sourceMappingURL=int_32.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987848, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxKey = void 0;
/**
 * A class representation of the BSON MaxKey type.
 * @public
 */
class MaxKey {
    /** @internal */
    toExtendedJSON() {
        return { $maxKey: 1 };
    }
    /** @internal */
    static fromExtendedJSON() {
        return new MaxKey();
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return 'MaxKey()';
    }
}
exports.MaxKey = MaxKey;
Object.defineProperty(MaxKey.prototype, '_bsontype', { value: 'MaxKey' });
//# sourceMappingURL=max_key.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987849, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MinKey = void 0;
/**
 * A class representation of the BSON MinKey type.
 * @public
 */
class MinKey {
    /** @internal */
    toExtendedJSON() {
        return { $minKey: 1 };
    }
    /** @internal */
    static fromExtendedJSON() {
        return new MinKey();
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return 'MinKey()';
    }
}
exports.MinKey = MinKey;
Object.defineProperty(MinKey.prototype, '_bsontype', { value: 'MinKey' });
//# sourceMappingURL=min_key.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987850, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectId = void 0;
const buffer_1 = require("buffer");
const ensure_buffer_1 = require("./ensure_buffer");
const utils_1 = require("./parser/utils");
// constants
const PROCESS_UNIQUE = utils_1.randomBytes(5);
// Regular expression that checks for hex value
const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
// Precomputed hex table enables speedy hex string conversion
const hexTable = [];
for (let i = 0; i < 256; i++) {
    hexTable[i] = (i <= 15 ? '0' : '') + i.toString(16);
}
// Lookup tables
const decodeLookup = [];
let i = 0;
while (i < 10)
    decodeLookup[0x30 + i] = i++;
while (i < 16)
    decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
const kId = Symbol('id');
/**
 * A class representation of the BSON ObjectId type.
 * @public
 */
class ObjectId {
    /**
     * Create an ObjectId type
     *
     * @param id - Can be a 24 character hex string, 12 byte binary Buffer, or a number.
     */
    constructor(id) {
        // Duck-typing to support ObjectId from different npm packages
        if (id instanceof ObjectId) {
            this[kId] = id.id;
            this.__id = id.__id;
        }
        if (typeof id === 'object' && id && 'id' in id) {
            if ('toHexString' in id && typeof id.toHexString === 'function') {
                this[kId] = buffer_1.Buffer.from(id.toHexString(), 'hex');
            }
            else {
                this[kId] = typeof id.id === 'string' ? buffer_1.Buffer.from(id.id) : id.id;
            }
        }
        // The most common use case (blank id, new objectId instance)
        if (id == null || typeof id === 'number') {
            // Generate a new id
            this[kId] = ObjectId.generate(typeof id === 'number' ? id : undefined);
            // If we are caching the hex string
            if (ObjectId.cacheHexString) {
                this.__id = this.id.toString('hex');
            }
        }
        if (ArrayBuffer.isView(id) && id.byteLength === 12) {
            this[kId] = ensure_buffer_1.ensureBuffer(id);
        }
        if (typeof id === 'string') {
            if (id.length === 12) {
                const bytes = buffer_1.Buffer.from(id);
                if (bytes.byteLength === 12) {
                    this[kId] = bytes;
                }
            }
            else if (id.length === 24 && checkForHexRegExp.test(id)) {
                this[kId] = buffer_1.Buffer.from(id, 'hex');
            }
            else {
                throw new TypeError('Argument passed in must be a Buffer or string of 12 bytes or a string of 24 hex characters');
            }
        }
        if (ObjectId.cacheHexString) {
            this.__id = this.id.toString('hex');
        }
    }
    /**
     * The ObjectId bytes
     * @readonly
     */
    get id() {
        return this[kId];
    }
    set id(value) {
        this[kId] = value;
        if (ObjectId.cacheHexString) {
            this.__id = value.toString('hex');
        }
    }
    /**
     * The generation time of this ObjectId instance
     * @deprecated Please use getTimestamp / createFromTime which returns an int32 epoch
     */
    get generationTime() {
        return this.id.readInt32BE(0);
    }
    set generationTime(value) {
        // Encode time into first 4 bytes
        this.id.writeUInt32BE(value, 0);
    }
    /** Returns the ObjectId id as a 24 character hex string representation */
    toHexString() {
        if (ObjectId.cacheHexString && this.__id) {
            return this.__id;
        }
        const hexString = this.id.toString('hex');
        if (ObjectId.cacheHexString && !this.__id) {
            this.__id = hexString;
        }
        return hexString;
    }
    /**
     * Update the ObjectId index
     * @privateRemarks
     * Used in generating new ObjectId's on the driver
     * @internal
     */
    static getInc() {
        return (ObjectId.index = (ObjectId.index + 1) % 0xffffff);
    }
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @param time - pass in a second based timestamp.
     */
    static generate(time) {
        if ('number' !== typeof time) {
            time = ~~(Date.now() / 1000);
        }
        const inc = ObjectId.getInc();
        const buffer = buffer_1.Buffer.alloc(12);
        // 4-byte timestamp
        buffer.writeUInt32BE(time, 0);
        // 5-byte process unique
        buffer[4] = PROCESS_UNIQUE[0];
        buffer[5] = PROCESS_UNIQUE[1];
        buffer[6] = PROCESS_UNIQUE[2];
        buffer[7] = PROCESS_UNIQUE[3];
        buffer[8] = PROCESS_UNIQUE[4];
        // 3-byte counter
        buffer[11] = inc & 0xff;
        buffer[10] = (inc >> 8) & 0xff;
        buffer[9] = (inc >> 16) & 0xff;
        return buffer;
    }
    /**
     * Converts the id into a 24 character hex string for printing
     *
     * @param format - The Buffer toString format parameter.
     * @internal
     */
    toString(format) {
        // Is the id a buffer then use the buffer toString method to return the format
        if (format)
            return this.id.toString(format);
        return this.toHexString();
    }
    /**
     * Converts to its JSON the 24 character hex string representation.
     * @internal
     */
    toJSON() {
        return this.toHexString();
    }
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @param otherId - ObjectId instance to compare against.
     */
    equals(otherId) {
        if (otherId === undefined || otherId === null) {
            return false;
        }
        if (otherId instanceof ObjectId) {
            return this.toString() === otherId.toString();
        }
        if (typeof otherId === 'string' &&
            ObjectId.isValid(otherId) &&
            otherId.length === 12 &&
            this.id instanceof buffer_1.Buffer) {
            return otherId === this.id.toString('binary');
        }
        if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 24) {
            return otherId.toLowerCase() === this.toHexString();
        }
        if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12) {
            return buffer_1.Buffer.from(otherId).equals(this.id);
        }
        if (typeof otherId === 'object' &&
            'toHexString' in otherId &&
            typeof otherId.toHexString === 'function') {
            return otherId.toHexString() === this.toHexString();
        }
        return false;
    }
    /** Returns the generation date (accurate up to the second) that this ID was generated. */
    getTimestamp() {
        const timestamp = new Date();
        const time = this.id.readUInt32BE(0);
        timestamp.setTime(Math.floor(time) * 1000);
        return timestamp;
    }
    /** @internal */
    static createPk() {
        return new ObjectId();
    }
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @param time - an integer number representing a number of seconds.
     */
    static createFromTime(time) {
        const buffer = buffer_1.Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        // Encode time into first 4 bytes
        buffer.writeUInt32BE(time, 0);
        // Return the new objectId
        return new ObjectId(buffer);
    }
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @param hexString - create a ObjectId from a passed in 24 character hexstring.
     */
    static createFromHexString(hexString) {
        // Throw an error if it's not a valid setup
        if (typeof hexString === 'undefined' || (hexString != null && hexString.length !== 24)) {
            throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
        }
        return new ObjectId(buffer_1.Buffer.from(hexString, 'hex'));
    }
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @param id - ObjectId instance to validate.
     */
    static isValid(id) {
        if (id == null)
            return false;
        if (typeof id === 'number') {
            return true;
        }
        if (typeof id === 'string') {
            return id.length === 12 || (id.length === 24 && checkForHexRegExp.test(id));
        }
        if (id instanceof ObjectId) {
            return true;
        }
        if (id instanceof buffer_1.Buffer && id.length === 12) {
            return true;
        }
        // Duck-Typing detection of ObjectId like objects
        if (typeof id === 'object' && 'toHexString' in id && typeof id.toHexString === 'function') {
            if (typeof id.id === 'string') {
                return id.id.length === 12;
            }
            return id.toHexString().length === 24 && checkForHexRegExp.test(id.id.toString('hex'));
        }
        return false;
    }
    /** @internal */
    toExtendedJSON() {
        if (this.toHexString)
            return { $oid: this.toHexString() };
        return { $oid: this.toString('hex') };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        return new ObjectId(doc.$oid);
    }
    /**
     * Converts to a string representation of this Id.
     *
     * @returns return the 24 character hex string representation.
     * @internal
     */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `ObjectId("${this.toHexString()}")`;
    }
}
exports.ObjectId = ObjectId;
/** @internal */
ObjectId.index = ~~(Math.random() * 0xffffff);
// Deprecated methods
Object.defineProperty(ObjectId.prototype, 'generate', {
    value: utils_1.deprecate((time) => ObjectId.generate(time), 'Please use the static `ObjectId.generate(time)` instead')
});
Object.defineProperty(ObjectId.prototype, 'getInc', {
    value: utils_1.deprecate(() => ObjectId.getInc(), 'Please use the static `ObjectId.getInc()` instead')
});
Object.defineProperty(ObjectId.prototype, 'get_inc', {
    value: utils_1.deprecate(() => ObjectId.getInc(), 'Please use the static `ObjectId.getInc()` instead')
});
Object.defineProperty(ObjectId, 'get_inc', {
    value: utils_1.deprecate(() => ObjectId.getInc(), 'Please use the static `ObjectId.getInc()` instead')
});
Object.defineProperty(ObjectId.prototype, '_bsontype', { value: 'ObjectID' });
//# sourceMappingURL=objectid.js.map
}, function(modId) { var map = {"./ensure_buffer":1609067987838,"./parser/utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987851, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BSONRegExp = void 0;
function alphabetize(str) {
    return str.split('').sort().join('');
}
/**
 * A class representation of the BSON RegExp type.
 * @public
 */
class BSONRegExp {
    /**
     * @param pattern - The regular expression pattern to match
     * @param options - The regular expression options
     */
    constructor(pattern, options) {
        this.pattern = pattern;
        this.options = options !== null && options !== void 0 ? options : '';
        // Execute
        alphabetize(this.options);
        // Validate options
        for (let i = 0; i < this.options.length; i++) {
            if (!(this.options[i] === 'i' ||
                this.options[i] === 'm' ||
                this.options[i] === 'x' ||
                this.options[i] === 'l' ||
                this.options[i] === 's' ||
                this.options[i] === 'u')) {
                throw new Error(`The regular expression option [${this.options[i]}] is not supported`);
            }
        }
    }
    static parseOptions(options) {
        return options ? options.split('').sort().join('') : '';
    }
    /** @internal */
    toExtendedJSON(options) {
        options = options || {};
        if (options.legacy) {
            return { $regex: this.pattern, $options: this.options };
        }
        return { $regularExpression: { pattern: this.pattern, options: this.options } };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        if ('$regex' in doc) {
            if (typeof doc.$regex !== 'string') {
                // This is for $regex query operators that have extended json values.
                if (doc.$regex._bsontype === 'BSONRegExp') {
                    return doc;
                }
            }
            else {
                return new BSONRegExp(doc.$regex, BSONRegExp.parseOptions(doc.$options));
            }
        }
        if ('$regularExpression' in doc) {
            return new BSONRegExp(doc.$regularExpression.pattern, BSONRegExp.parseOptions(doc.$regularExpression.options));
        }
        throw new TypeError(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify(doc)}`);
    }
}
exports.BSONRegExp = BSONRegExp;
Object.defineProperty(BSONRegExp.prototype, '_bsontype', { value: 'BSONRegExp' });
//# sourceMappingURL=regexp.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987852, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BSONSymbol = void 0;
/**
 * A class representation of the BSON Symbol type.
 * @public
 */
class BSONSymbol {
    /**
     * @param value - the string representing the symbol.
     */
    constructor(value) {
        this.value = value;
    }
    /** Access the wrapped string value. */
    valueOf() {
        return this.value;
    }
    /** @internal */
    toString() {
        return this.value;
    }
    /** @internal */
    inspect() {
        return `BSONSymbol("${this.value}")`;
    }
    /** @internal */
    toJSON() {
        return this.value;
    }
    /** @internal */
    toExtendedJSON() {
        return { $symbol: this.value };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        return new BSONSymbol(doc.$symbol);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
}
exports.BSONSymbol = BSONSymbol;
Object.defineProperty(BSONSymbol.prototype, '_bsontype', { value: 'Symbol' });
//# sourceMappingURL=symbol.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987853, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.LongWithoutOverridesClass = void 0;
const long_1 = require("./long");
/** @public */
exports.LongWithoutOverridesClass = long_1.Long;
/** @public */
class Timestamp extends exports.LongWithoutOverridesClass {
    constructor(low, high) {
        if (long_1.Long.isLong(low)) {
            super(low.low, low.high, true);
        }
        else {
            super(low, high, true);
        }
        Object.defineProperty(this, '_bsontype', {
            value: 'Timestamp',
            writable: false,
            configurable: false,
            enumerable: false
        });
    }
    toJSON() {
        return {
            $timestamp: this.toString()
        };
    }
    /** Returns a Timestamp represented by the given (32-bit) integer value. */
    static fromInt(value) {
        return new Timestamp(long_1.Long.fromInt(value, true));
    }
    /** Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned. */
    static fromNumber(value) {
        return new Timestamp(long_1.Long.fromNumber(value, true));
    }
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @param lowBits - the low 32-bits.
     * @param highBits - the high 32-bits.
     */
    static fromBits(lowBits, highBits) {
        return new Timestamp(lowBits, highBits);
    }
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @param str - the textual representation of the Timestamp.
     * @param optRadix - the radix in which the text is written.
     */
    static fromString(str, optRadix) {
        return new Timestamp(long_1.Long.fromString(str, true, optRadix));
    }
    /** @internal */
    toExtendedJSON() {
        return { $timestamp: { t: this.high >>> 0, i: this.low >>> 0 } };
    }
    /** @internal */
    static fromExtendedJSON(doc) {
        return new Timestamp(doc.$timestamp.i, doc.$timestamp.t);
    }
    /** @internal */
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.inspect();
    }
    inspect() {
        return `Timestamp(${this.getLowBits().toString()}, ${this.getHighBits().toString()})`;
    }
}
exports.Timestamp = Timestamp;
Timestamp.MAX_VALUE = long_1.Long.MAX_UNSIGNED_VALUE;
//# sourceMappingURL=timestamp.js.map
}, function(modId) { var map = {"./long":1609067987844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987854, function(require, module, exports) {

/* eslint-disable @typescript-eslint/no-explicit-any */
// We have an ES6 Map available, return the native instance
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
/** @public */
let bsonMap;
exports.Map = bsonMap;
const check = function (potentialGlobal) {
    // eslint-disable-next-line eqeqeq
    return potentialGlobal && potentialGlobal.Math == Math && potentialGlobal;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
function getGlobal() {
    // eslint-disable-next-line no-undef
    return (check(typeof globalThis === 'object' && globalThis) ||
        check(typeof window === 'object' && window) ||
        check(typeof self === 'object' && self) ||
        check(typeof global === 'object' && global) ||
        Function('return this')());
}
const bsonGlobal = getGlobal();
if (Object.prototype.hasOwnProperty.call(bsonGlobal, 'Map')) {
    exports.Map = bsonMap = bsonGlobal.Map;
}
else {
    // We will return a polyfill
    exports.Map = bsonMap = class Map {
        constructor(array = []) {
            this._keys = [];
            this._values = {};
            for (let i = 0; i < array.length; i++) {
                if (array[i] == null)
                    continue; // skip null and undefined
                const entry = array[i];
                const key = entry[0];
                const value = entry[1];
                // Add the key to the list of keys in order
                this._keys.push(key);
                // Add the key and value to the values dictionary with a point
                // to the location in the ordered keys list
                this._values[key] = { v: value, i: this._keys.length - 1 };
            }
        }
        clear() {
            this._keys = [];
            this._values = {};
        }
        delete(key) {
            const value = this._values[key];
            if (value == null)
                return false;
            // Delete entry
            delete this._values[key];
            // Remove the key from the ordered keys list
            this._keys.splice(value.i, 1);
            return true;
        }
        entries() {
            let index = 0;
            return {
                next: () => {
                    const key = this._keys[index++];
                    return {
                        value: key !== undefined ? [key, this._values[key].v] : undefined,
                        done: key !== undefined ? false : true
                    };
                }
            };
        }
        forEach(callback, self) {
            self = self || this;
            for (let i = 0; i < this._keys.length; i++) {
                const key = this._keys[i];
                // Call the forEach callback
                callback.call(self, this._values[key].v, key, self);
            }
        }
        get(key) {
            return this._values[key] ? this._values[key].v : undefined;
        }
        has(key) {
            return this._values[key] != null;
        }
        keys() {
            let index = 0;
            return {
                next: () => {
                    const key = this._keys[index++];
                    return {
                        value: key !== undefined ? key : undefined,
                        done: key !== undefined ? false : true
                    };
                }
            };
        }
        set(key, value) {
            if (this._values[key]) {
                this._values[key].v = value;
                return this;
            }
            // Add the key to the list of keys in order
            this._keys.push(key);
            // Add the key and value to the values dictionary with a point
            // to the location in the ordered keys list
            this._values[key] = { v: value, i: this._keys.length - 1 };
            return this;
        }
        values() {
            let index = 0;
            return {
                next: () => {
                    const key = this._keys[index++];
                    return {
                        value: key !== undefined ? this._values[key].v : undefined,
                        done: key !== undefined ? false : true
                    };
                }
            };
        }
        get size() {
            return this._keys.length;
        }
    };
}
//# sourceMappingURL=map.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987855, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateObjectSize = void 0;
const buffer_1 = require("buffer");
const binary_1 = require("../binary");
const constants = require("../constants");
const utils_1 = require("./utils");
function calculateObjectSize(object, serializeFunctions, ignoreUndefined) {
    let totalLength = 4 + 1;
    if (Array.isArray(object)) {
        for (let i = 0; i < object.length; i++) {
            totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
        }
    }
    else {
        // If we have toBSON defined, override the current object
        if (object.toBSON) {
            object = object.toBSON();
        }
        // Calculate size
        for (const key in object) {
            totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
        }
    }
    return totalLength;
}
exports.calculateObjectSize = calculateObjectSize;
/** @internal */
function calculateElement(name, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
value, serializeFunctions = false, isArray = false, ignoreUndefined = false) {
    // If we have toBSON defined, override the current object
    if (value && value.toBSON) {
        value = value.toBSON();
    }
    switch (typeof value) {
        case 'string':
            return 1 + buffer_1.Buffer.byteLength(name, 'utf8') + 1 + 4 + buffer_1.Buffer.byteLength(value, 'utf8') + 1;
        case 'number':
            if (Math.floor(value) === value &&
                value >= constants.JS_INT_MIN &&
                value <= constants.JS_INT_MAX) {
                if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
                    // 32 bit
                    return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (4 + 1);
                }
                else {
                    return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
                }
            }
            else {
                // 64 bit
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
            }
        case 'undefined':
            if (isArray || !ignoreUndefined)
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + 1;
            return 0;
        case 'boolean':
            return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (1 + 1);
        case 'object':
            if (value == null || value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + 1;
            }
            else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (12 + 1);
            }
            else if (value instanceof Date || utils_1.isDate(value)) {
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
            }
            else if (ArrayBuffer.isView(value) || value instanceof ArrayBuffer) {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (1 + 4 + 1) + value.byteLength);
            }
            else if (value['_bsontype'] === 'Long' ||
                value['_bsontype'] === 'Double' ||
                value['_bsontype'] === 'Timestamp') {
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
            }
            else if (value['_bsontype'] === 'Decimal128') {
                return (name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (16 + 1);
            }
            else if (value['_bsontype'] === 'Code') {
                // Calculate size depending on the availability of a scope
                if (value.scope != null && Object.keys(value.scope).length > 0) {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                        1 +
                        4 +
                        4 +
                        buffer_1.Buffer.byteLength(value.code.toString(), 'utf8') +
                        1 +
                        calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined));
                }
                else {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                        1 +
                        4 +
                        buffer_1.Buffer.byteLength(value.code.toString(), 'utf8') +
                        1);
                }
            }
            else if (value['_bsontype'] === 'Binary') {
                // Check what kind of subtype we have
                if (value.sub_type === binary_1.Binary.SUBTYPE_BYTE_ARRAY) {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                        (value.position + 1 + 4 + 1 + 4));
                }
                else {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1));
                }
            }
            else if (value['_bsontype'] === 'Symbol') {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    buffer_1.Buffer.byteLength(value.value, 'utf8') +
                    4 +
                    1 +
                    1);
            }
            else if (value['_bsontype'] === 'DBRef') {
                // Set up correct object for serialization
                const ordered_values = Object.assign({
                    $ref: value.collection,
                    $id: value.oid
                }, value.fields);
                // Add db reference if it exists
                if (value.db != null) {
                    ordered_values['$db'] = value.db;
                }
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    1 +
                    calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined));
            }
            else if (value instanceof RegExp ||
                Object.prototype.toString.call(value) === '[object RegExp]') {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    1 +
                    buffer_1.Buffer.byteLength(value.source, 'utf8') +
                    1 +
                    (value.global ? 1 : 0) +
                    (value.ignoreCase ? 1 : 0) +
                    (value.multiline ? 1 : 0) +
                    1);
            }
            else if (value['_bsontype'] === 'BSONRegExp') {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    1 +
                    buffer_1.Buffer.byteLength(value.pattern, 'utf8') +
                    1 +
                    buffer_1.Buffer.byteLength(value.options, 'utf8') +
                    1);
            }
            else {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    calculateObjectSize(value, serializeFunctions, ignoreUndefined) +
                    1);
            }
        case 'function':
            // WTF for 0.4.X where typeof /someregexp/ === 'function'
            if (value instanceof RegExp ||
                Object.prototype.toString.call(value) === '[object RegExp]' ||
                String.call(value) === '[object RegExp]') {
                return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                    1 +
                    buffer_1.Buffer.byteLength(value.source, 'utf8') +
                    1 +
                    (value.global ? 1 : 0) +
                    (value.ignoreCase ? 1 : 0) +
                    (value.multiline ? 1 : 0) +
                    1);
            }
            else {
                if (serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                        1 +
                        4 +
                        4 +
                        buffer_1.Buffer.byteLength(utils_1.normalizedFunctionString(value), 'utf8') +
                        1 +
                        calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined));
                }
                else if (serializeFunctions) {
                    return ((name != null ? buffer_1.Buffer.byteLength(name, 'utf8') + 1 : 0) +
                        1 +
                        4 +
                        buffer_1.Buffer.byteLength(utils_1.normalizedFunctionString(value), 'utf8') +
                        1);
                }
            }
    }
    return 0;
}
//# sourceMappingURL=calculate_size.js.map
}, function(modId) { var map = {"../binary":1609067987837,"../constants":1609067987856,"./utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987856, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BSON_BINARY_SUBTYPE_USER_DEFINED = exports.BSON_BINARY_SUBTYPE_MD5 = exports.BSON_BINARY_SUBTYPE_UUID_NEW = exports.BSON_BINARY_SUBTYPE_UUID = exports.BSON_BINARY_SUBTYPE_BYTE_ARRAY = exports.BSON_BINARY_SUBTYPE_FUNCTION = exports.BSON_BINARY_SUBTYPE_DEFAULT = exports.BSON_DATA_MAX_KEY = exports.BSON_DATA_MIN_KEY = exports.BSON_DATA_DECIMAL128 = exports.BSON_DATA_LONG = exports.BSON_DATA_TIMESTAMP = exports.BSON_DATA_INT = exports.BSON_DATA_CODE_W_SCOPE = exports.BSON_DATA_SYMBOL = exports.BSON_DATA_CODE = exports.BSON_DATA_DBPOINTER = exports.BSON_DATA_REGEXP = exports.BSON_DATA_NULL = exports.BSON_DATA_DATE = exports.BSON_DATA_BOOLEAN = exports.BSON_DATA_OID = exports.BSON_DATA_UNDEFINED = exports.BSON_DATA_BINARY = exports.BSON_DATA_ARRAY = exports.BSON_DATA_OBJECT = exports.BSON_DATA_STRING = exports.BSON_DATA_NUMBER = exports.JS_INT_MIN = exports.JS_INT_MAX = exports.BSON_INT64_MIN = exports.BSON_INT64_MAX = exports.BSON_INT32_MIN = exports.BSON_INT32_MAX = void 0;
/** @internal */
exports.BSON_INT32_MAX = 0x7fffffff;
/** @internal */
exports.BSON_INT32_MIN = -0x80000000;
/** @internal */
exports.BSON_INT64_MAX = Math.pow(2, 63) - 1;
/** @internal */
exports.BSON_INT64_MIN = -Math.pow(2, 63);
/**
 * Any integer up to 2^53 can be precisely represented by a double.
 * @internal
 */
exports.JS_INT_MAX = Math.pow(2, 53);
/**
 * Any integer down to -2^53 can be precisely represented by a double.
 * @internal
 */
exports.JS_INT_MIN = -Math.pow(2, 53);
/** Number BSON Type @internal */
exports.BSON_DATA_NUMBER = 1;
/** String BSON Type @internal */
exports.BSON_DATA_STRING = 2;
/** Object BSON Type @internal */
exports.BSON_DATA_OBJECT = 3;
/** Array BSON Type @internal */
exports.BSON_DATA_ARRAY = 4;
/** Binary BSON Type @internal */
exports.BSON_DATA_BINARY = 5;
/** Binary BSON Type @internal */
exports.BSON_DATA_UNDEFINED = 6;
/** ObjectId BSON Type @internal */
exports.BSON_DATA_OID = 7;
/** Boolean BSON Type @internal */
exports.BSON_DATA_BOOLEAN = 8;
/** Date BSON Type @internal */
exports.BSON_DATA_DATE = 9;
/** null BSON Type @internal */
exports.BSON_DATA_NULL = 10;
/** RegExp BSON Type @internal */
exports.BSON_DATA_REGEXP = 11;
/** Code BSON Type @internal */
exports.BSON_DATA_DBPOINTER = 12;
/** Code BSON Type @internal */
exports.BSON_DATA_CODE = 13;
/** Symbol BSON Type @internal */
exports.BSON_DATA_SYMBOL = 14;
/** Code with Scope BSON Type @internal */
exports.BSON_DATA_CODE_W_SCOPE = 15;
/** 32 bit Integer BSON Type @internal */
exports.BSON_DATA_INT = 16;
/** Timestamp BSON Type @internal */
exports.BSON_DATA_TIMESTAMP = 17;
/** Long BSON Type @internal */
exports.BSON_DATA_LONG = 18;
/** Decimal128 BSON Type @internal */
exports.BSON_DATA_DECIMAL128 = 19;
/** MinKey BSON Type @internal */
exports.BSON_DATA_MIN_KEY = 0xff;
/** MaxKey BSON Type @internal */
exports.BSON_DATA_MAX_KEY = 0x7f;
/** Binary Default Type @internal */
exports.BSON_BINARY_SUBTYPE_DEFAULT = 0;
/** Binary Function Type @internal */
exports.BSON_BINARY_SUBTYPE_FUNCTION = 1;
/** Binary Byte Array Type @internal */
exports.BSON_BINARY_SUBTYPE_BYTE_ARRAY = 2;
/** Binary Deprecated UUID Type @deprecated Please use BSON_BINARY_SUBTYPE_UUID_NEW @internal */
exports.BSON_BINARY_SUBTYPE_UUID = 3;
/** Binary UUID Type @internal */
exports.BSON_BINARY_SUBTYPE_UUID_NEW = 4;
/** Binary MD5 Type @internal */
exports.BSON_BINARY_SUBTYPE_MD5 = 5;
/** Binary User Defined Type @internal */
exports.BSON_BINARY_SUBTYPE_USER_DEFINED = 128;
//# sourceMappingURL=constants.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987857, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const buffer_1 = require("buffer");
const binary_1 = require("../binary");
const code_1 = require("../code");
const constants = require("../constants");
const db_ref_1 = require("../db_ref");
const decimal128_1 = require("../decimal128");
const double_1 = require("../double");
const int_32_1 = require("../int_32");
const long_1 = require("../long");
const max_key_1 = require("../max_key");
const min_key_1 = require("../min_key");
const objectid_1 = require("../objectid");
const regexp_1 = require("../regexp");
const symbol_1 = require("../symbol");
const timestamp_1 = require("../timestamp");
const validate_utf8_1 = require("../validate_utf8");
// Internal long versions
const JS_INT_MAX_LONG = long_1.Long.fromNumber(constants.JS_INT_MAX);
const JS_INT_MIN_LONG = long_1.Long.fromNumber(constants.JS_INT_MIN);
const functionCache = {};
function deserialize(buffer, options, isArray) {
    options = options == null ? {} : options;
    const index = options && options.index ? options.index : 0;
    // Read the document size
    const size = buffer[index] |
        (buffer[index + 1] << 8) |
        (buffer[index + 2] << 16) |
        (buffer[index + 3] << 24);
    if (size < 5) {
        throw new Error(`bson size must be >= 5, is ${size}`);
    }
    if (options.allowObjectSmallerThanBufferSize && buffer.length < size) {
        throw new Error(`buffer length ${buffer.length} must be >= bson size ${size}`);
    }
    if (!options.allowObjectSmallerThanBufferSize && buffer.length !== size) {
        throw new Error(`buffer length ${buffer.length} must === bson size ${size}`);
    }
    if (size + index > buffer.byteLength) {
        throw new Error(`(bson size ${size} + options.index ${index} must be <= buffer length ${buffer.byteLength})`);
    }
    // Illegal end value
    if (buffer[index + size - 1] !== 0) {
        throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
    }
    // Start deserializtion
    return deserializeObject(buffer, index, options, isArray);
}
exports.deserialize = deserialize;
function deserializeObject(buffer, index, options, isArray = false) {
    const evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];
    const cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];
    const fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw'];
    // Return raw bson buffer instead of parsing it
    const raw = options['raw'] == null ? false : options['raw'];
    // Return BSONRegExp objects instead of native regular expressions
    const bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false;
    // Controls the promotion of values vs wrapper classes
    const promoteBuffers = options['promoteBuffers'] == null ? false : options['promoteBuffers'];
    const promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];
    const promoteValues = options['promoteValues'] == null ? true : options['promoteValues'];
    // Set the start index
    const startIndex = index;
    // Validate that we have at least 4 bytes of buffer
    if (buffer.length < 5)
        throw new Error('corrupt bson message < 5 bytes long');
    // Read the document size
    const size = buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24);
    // Ensure buffer is valid size
    if (size < 5 || size > buffer.length)
        throw new Error('corrupt bson message');
    // Create holding object
    const object = isArray ? [] : {};
    // Used for arrays to skip having to perform utf8 decoding
    let arrayIndex = 0;
    const done = false;
    // While we have more left data left keep parsing
    while (!done) {
        // Read the type
        const elementType = buffer[index++];
        // If we get a zero it's the last byte, exit
        if (elementType === 0)
            break;
        // Get the start search index
        let i = index;
        // Locate the end of the c string
        while (buffer[i] !== 0x00 && i < buffer.length) {
            i++;
        }
        // If are at the end of the buffer there is a problem with the document
        if (i >= buffer.byteLength)
            throw new Error('Bad BSON Document: illegal CString');
        const name = isArray ? arrayIndex++ : buffer.toString('utf8', index, i);
        index = i + 1;
        if (elementType === constants.BSON_DATA_STRING) {
            const stringSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new Error('bad string length in bson');
            if (!validate_utf8_1.validateUtf8(buffer, index, index + stringSize - 1)) {
                throw new Error('Invalid UTF-8 string in BSON document');
            }
            const s = buffer.toString('utf8', index, index + stringSize - 1);
            object[name] = s;
            index = index + stringSize;
        }
        else if (elementType === constants.BSON_DATA_OID) {
            const oid = buffer_1.Buffer.alloc(12);
            buffer.copy(oid, 0, index, index + 12);
            object[name] = new objectid_1.ObjectId(oid);
            index = index + 12;
        }
        else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
            object[name] = new int_32_1.Int32(buffer[index++] | (buffer[index++] << 8) | (buffer[index++] << 16) | (buffer[index++] << 24));
        }
        else if (elementType === constants.BSON_DATA_INT) {
            object[name] =
                buffer[index++] |
                    (buffer[index++] << 8) |
                    (buffer[index++] << 16) |
                    (buffer[index++] << 24);
        }
        else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
            object[name] = new double_1.Double(buffer.readDoubleLE(index));
            index = index + 8;
        }
        else if (elementType === constants.BSON_DATA_NUMBER) {
            object[name] = buffer.readDoubleLE(index);
            index = index + 8;
        }
        else if (elementType === constants.BSON_DATA_DATE) {
            const lowBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            const highBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            object[name] = new Date(new long_1.Long(lowBits, highBits).toNumber());
        }
        else if (elementType === constants.BSON_DATA_BOOLEAN) {
            if (buffer[index] !== 0 && buffer[index] !== 1)
                throw new Error('illegal boolean type value');
            object[name] = buffer[index++] === 1;
        }
        else if (elementType === constants.BSON_DATA_OBJECT) {
            const _index = index;
            const objectSize = buffer[index] |
                (buffer[index + 1] << 8) |
                (buffer[index + 2] << 16) |
                (buffer[index + 3] << 24);
            if (objectSize <= 0 || objectSize > buffer.length - index)
                throw new Error('bad embedded document length in bson');
            // We have a raw value
            if (raw) {
                object[name] = buffer.slice(index, index + objectSize);
            }
            else {
                object[name] = deserializeObject(buffer, _index, options, false);
            }
            index = index + objectSize;
        }
        else if (elementType === constants.BSON_DATA_ARRAY) {
            const _index = index;
            const objectSize = buffer[index] |
                (buffer[index + 1] << 8) |
                (buffer[index + 2] << 16) |
                (buffer[index + 3] << 24);
            let arrayOptions = options;
            // Stop index
            const stopIndex = index + objectSize;
            // All elements of array to be returned as raw bson
            if (fieldsAsRaw && fieldsAsRaw[name]) {
                arrayOptions = {};
                for (const n in options) {
                    arrayOptions[n] = options[n];
                }
                arrayOptions['raw'] = true;
            }
            object[name] = deserializeObject(buffer, _index, arrayOptions, true);
            index = index + objectSize;
            if (buffer[index - 1] !== 0)
                throw new Error('invalid array terminator byte');
            if (index !== stopIndex)
                throw new Error('corrupted array bson');
        }
        else if (elementType === constants.BSON_DATA_UNDEFINED) {
            object[name] = undefined;
        }
        else if (elementType === constants.BSON_DATA_NULL) {
            object[name] = null;
        }
        else if (elementType === constants.BSON_DATA_LONG) {
            // Unpack the low and high bits
            const lowBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            const highBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            const long = new long_1.Long(lowBits, highBits);
            // Promote the long if possible
            if (promoteLongs && promoteValues === true) {
                object[name] =
                    long.lessThanOrEqual(JS_INT_MAX_LONG) && long.greaterThanOrEqual(JS_INT_MIN_LONG)
                        ? long.toNumber()
                        : long;
            }
            else {
                object[name] = long;
            }
        }
        else if (elementType === constants.BSON_DATA_DECIMAL128) {
            // Buffer to contain the decimal bytes
            const bytes = buffer_1.Buffer.alloc(16);
            // Copy the next 16 bytes into the bytes buffer
            buffer.copy(bytes, 0, index, index + 16);
            // Update index
            index = index + 16;
            // Assign the new Decimal128 value
            const decimal128 = new decimal128_1.Decimal128(bytes);
            // If we have an alternative mapper use that
            if ('toObject' in decimal128 && typeof decimal128.toObject === 'function') {
                object[name] = decimal128.toObject();
            }
            else {
                object[name] = decimal128;
            }
        }
        else if (elementType === constants.BSON_DATA_BINARY) {
            let binarySize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            const totalBinarySize = binarySize;
            const subType = buffer[index++];
            // Did we have a negative binary size, throw
            if (binarySize < 0)
                throw new Error('Negative binary type element size found');
            // Is the length longer than the document
            if (binarySize > buffer.byteLength)
                throw new Error('Binary type size larger than document size');
            // Decode as raw Buffer object if options specifies it
            if (buffer['slice'] != null) {
                // If we have subtype 2 skip the 4 bytes for the size
                if (subType === binary_1.Binary.SUBTYPE_BYTE_ARRAY) {
                    binarySize =
                        buffer[index++] |
                            (buffer[index++] << 8) |
                            (buffer[index++] << 16) |
                            (buffer[index++] << 24);
                    if (binarySize < 0)
                        throw new Error('Negative binary type element size found for subtype 0x02');
                    if (binarySize > totalBinarySize - 4)
                        throw new Error('Binary type with subtype 0x02 contains too long binary size');
                    if (binarySize < totalBinarySize - 4)
                        throw new Error('Binary type with subtype 0x02 contains too short binary size');
                }
                if (promoteBuffers && promoteValues) {
                    object[name] = buffer.slice(index, index + binarySize);
                }
                else {
                    object[name] = new binary_1.Binary(buffer.slice(index, index + binarySize), subType);
                }
            }
            else {
                const _buffer = buffer_1.Buffer.alloc(binarySize);
                // If we have subtype 2 skip the 4 bytes for the size
                if (subType === binary_1.Binary.SUBTYPE_BYTE_ARRAY) {
                    binarySize =
                        buffer[index++] |
                            (buffer[index++] << 8) |
                            (buffer[index++] << 16) |
                            (buffer[index++] << 24);
                    if (binarySize < 0)
                        throw new Error('Negative binary type element size found for subtype 0x02');
                    if (binarySize > totalBinarySize - 4)
                        throw new Error('Binary type with subtype 0x02 contains too long binary size');
                    if (binarySize < totalBinarySize - 4)
                        throw new Error('Binary type with subtype 0x02 contains too short binary size');
                }
                // Copy the data
                for (i = 0; i < binarySize; i++) {
                    _buffer[i] = buffer[index + i];
                }
                if (promoteBuffers && promoteValues) {
                    object[name] = _buffer;
                }
                else {
                    object[name] = new binary_1.Binary(_buffer, subType);
                }
            }
            // Update the index
            index = index + binarySize;
        }
        else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
            // Get the start search index
            i = index;
            // Locate the end of the c string
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            // If are at the end of the buffer there is a problem with the document
            if (i >= buffer.length)
                throw new Error('Bad BSON Document: illegal CString');
            // Return the C string
            const source = buffer.toString('utf8', index, i);
            // Create the regexp
            index = i + 1;
            // Get the start search index
            i = index;
            // Locate the end of the c string
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            // If are at the end of the buffer there is a problem with the document
            if (i >= buffer.length)
                throw new Error('Bad BSON Document: illegal CString');
            // Return the C string
            const regExpOptions = buffer.toString('utf8', index, i);
            index = i + 1;
            // For each option add the corresponding one for javascript
            const optionsArray = new Array(regExpOptions.length);
            // Parse options
            for (i = 0; i < regExpOptions.length; i++) {
                switch (regExpOptions[i]) {
                    case 'm':
                        optionsArray[i] = 'm';
                        break;
                    case 's':
                        optionsArray[i] = 'g';
                        break;
                    case 'i':
                        optionsArray[i] = 'i';
                        break;
                }
            }
            object[name] = new RegExp(source, optionsArray.join(''));
        }
        else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
            // Get the start search index
            i = index;
            // Locate the end of the c string
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            // If are at the end of the buffer there is a problem with the document
            if (i >= buffer.length)
                throw new Error('Bad BSON Document: illegal CString');
            // Return the C string
            const source = buffer.toString('utf8', index, i);
            index = i + 1;
            // Get the start search index
            i = index;
            // Locate the end of the c string
            while (buffer[i] !== 0x00 && i < buffer.length) {
                i++;
            }
            // If are at the end of the buffer there is a problem with the document
            if (i >= buffer.length)
                throw new Error('Bad BSON Document: illegal CString');
            // Return the C string
            const regExpOptions = buffer.toString('utf8', index, i);
            index = i + 1;
            // Set the object
            object[name] = new regexp_1.BSONRegExp(source, regExpOptions);
        }
        else if (elementType === constants.BSON_DATA_SYMBOL) {
            const stringSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new Error('bad string length in bson');
            const symbol = buffer.toString('utf8', index, index + stringSize - 1);
            object[name] = promoteValues ? symbol : new symbol_1.BSONSymbol(symbol);
            index = index + stringSize;
        }
        else if (elementType === constants.BSON_DATA_TIMESTAMP) {
            const lowBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            const highBits = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            object[name] = new timestamp_1.Timestamp(lowBits, highBits);
        }
        else if (elementType === constants.BSON_DATA_MIN_KEY) {
            object[name] = new min_key_1.MinKey();
        }
        else if (elementType === constants.BSON_DATA_MAX_KEY) {
            object[name] = new max_key_1.MaxKey();
        }
        else if (elementType === constants.BSON_DATA_CODE) {
            const stringSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new Error('bad string length in bson');
            const functionString = buffer.toString('utf8', index, index + stringSize - 1);
            // If we are evaluating the functions
            if (evalFunctions) {
                // If we have cache enabled let's look for the md5 of the function in the cache
                if (cacheFunctions) {
                    // Got to do this to avoid V8 deoptimizing the call due to finding eval
                    object[name] = isolateEval(functionString, functionCache, object);
                }
                else {
                    object[name] = isolateEval(functionString);
                }
            }
            else {
                object[name] = new code_1.Code(functionString);
            }
            // Update parse index position
            index = index + stringSize;
        }
        else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
            const totalSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            // Element cannot be shorter than totalSize + stringSize + documentSize + terminator
            if (totalSize < 4 + 4 + 4 + 1) {
                throw new Error('code_w_scope total size shorter minimum expected length');
            }
            // Get the code string size
            const stringSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            // Check if we have a valid string
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new Error('bad string length in bson');
            // Javascript function
            const functionString = buffer.toString('utf8', index, index + stringSize - 1);
            // Update parse index position
            index = index + stringSize;
            // Parse the element
            const _index = index;
            // Decode the size of the object document
            const objectSize = buffer[index] |
                (buffer[index + 1] << 8) |
                (buffer[index + 2] << 16) |
                (buffer[index + 3] << 24);
            // Decode the scope object
            const scopeObject = deserializeObject(buffer, _index, options, false);
            // Adjust the index
            index = index + objectSize;
            // Check if field length is too short
            if (totalSize < 4 + 4 + objectSize + stringSize) {
                throw new Error('code_w_scope total size is too short, truncating scope');
            }
            // Check if totalSize field is too long
            if (totalSize > 4 + 4 + objectSize + stringSize) {
                throw new Error('code_w_scope total size is too long, clips outer document');
            }
            // If we are evaluating the functions
            if (evalFunctions) {
                // If we have cache enabled let's look for the md5 of the function in the cache
                if (cacheFunctions) {
                    // Got to do this to avoid V8 deoptimizing the call due to finding eval
                    object[name] = isolateEval(functionString, functionCache, object);
                }
                else {
                    object[name] = isolateEval(functionString);
                }
                object[name].scope = scopeObject;
            }
            else {
                object[name] = new code_1.Code(functionString, scopeObject);
            }
        }
        else if (elementType === constants.BSON_DATA_DBPOINTER) {
            // Get the code string size
            const stringSize = buffer[index++] |
                (buffer[index++] << 8) |
                (buffer[index++] << 16) |
                (buffer[index++] << 24);
            // Check if we have a valid string
            if (stringSize <= 0 ||
                stringSize > buffer.length - index ||
                buffer[index + stringSize - 1] !== 0)
                throw new Error('bad string length in bson');
            // Namespace
            if (!validate_utf8_1.validateUtf8(buffer, index, index + stringSize - 1)) {
                throw new Error('Invalid UTF-8 string in BSON document');
            }
            const namespace = buffer.toString('utf8', index, index + stringSize - 1);
            // Update parse index position
            index = index + stringSize;
            // Read the oid
            const oidBuffer = buffer_1.Buffer.alloc(12);
            buffer.copy(oidBuffer, 0, index, index + 12);
            const oid = new objectid_1.ObjectId(oidBuffer);
            // Update the index
            index = index + 12;
            // Upgrade to DBRef type
            object[name] = new db_ref_1.DBRef(namespace, oid);
        }
        else {
            throw new Error('Detected unknown BSON type ' + elementType.toString(16) + ' for fieldname "' + name + '"');
        }
    }
    // Check if the deserialization was against a valid array/object
    if (size !== index - startIndex) {
        if (isArray)
            throw new Error('corrupt array bson');
        throw new Error('corrupt object bson');
    }
    // check if object's $ keys are those of a DBRef
    const dollarKeys = Object.keys(object).filter(k => k.startsWith('$'));
    let valid = true;
    dollarKeys.forEach(k => {
        if (['$ref', '$id', '$db'].indexOf(k) === -1)
            valid = false;
    });
    // if a $key not in "$ref", "$id", "$db", don't make a DBRef
    if (!valid)
        return object;
    if (db_ref_1.isDBRefLike(object)) {
        const copy = Object.assign({}, object);
        delete copy.$ref;
        delete copy.$id;
        delete copy.$db;
        return new db_ref_1.DBRef(object.$ref, object.$id, object.$db, copy);
    }
    return object;
}
/**
 * Ensure eval is isolated, store the result in functionCache.
 *
 * @internal
 */
function isolateEval(functionString, functionCache, object) {
    if (!functionCache)
        return new Function(functionString);
    // Check for cache hit, eval if missing and return cached function
    if (functionCache[functionString] == null) {
        functionCache[functionString] = new Function(functionString);
    }
    // Set the object
    return functionCache[functionString].bind(object);
}
//# sourceMappingURL=deserializer.js.map
}, function(modId) { var map = {"../binary":1609067987837,"../code":1609067987841,"../constants":1609067987856,"../db_ref":1609067987842,"../decimal128":1609067987843,"../double":1609067987845,"../int_32":1609067987847,"../long":1609067987844,"../max_key":1609067987848,"../min_key":1609067987849,"../objectid":1609067987850,"../regexp":1609067987851,"../symbol":1609067987852,"../timestamp":1609067987853,"../validate_utf8":1609067987858}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987858, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUtf8 = void 0;
const FIRST_BIT = 0x80;
const FIRST_TWO_BITS = 0xc0;
const FIRST_THREE_BITS = 0xe0;
const FIRST_FOUR_BITS = 0xf0;
const FIRST_FIVE_BITS = 0xf8;
const TWO_BIT_CHAR = 0xc0;
const THREE_BIT_CHAR = 0xe0;
const FOUR_BIT_CHAR = 0xf0;
const CONTINUING_CHAR = 0x80;
/**
 * Determines if the passed in bytes are valid utf8
 * @param bytes - An array of 8-bit bytes. Must be indexable and have length property
 * @param start - The index to start validating
 * @param end - The index to end validating
 */
function validateUtf8(bytes, start, end) {
    let continuation = 0;
    for (let i = start; i < end; i += 1) {
        const byte = bytes[i];
        if (continuation) {
            if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
                return false;
            }
            continuation -= 1;
        }
        else if (byte & FIRST_BIT) {
            if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
                continuation = 1;
            }
            else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
                continuation = 2;
            }
            else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
                continuation = 3;
            }
            else {
                return false;
            }
        }
    }
    return !continuation;
}
exports.validateUtf8 = validateUtf8;
//# sourceMappingURL=validate_utf8.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987859, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeInto = void 0;
const binary_1 = require("../binary");
const constants = require("../constants");
const ensure_buffer_1 = require("../ensure_buffer");
const extended_json_1 = require("../extended_json");
const float_parser_1 = require("../float_parser");
const long_1 = require("../long");
const map_1 = require("../map");
const utils_1 = require("./utils");
const regexp = /\x00/; // eslint-disable-line no-control-regex
const ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']);
function isRegExp(d) {
    return Object.prototype.toString.call(d) === '[object RegExp]';
}
/*
 * isArray indicates if we are writing to a BSON array (type 0x04)
 * which forces the "key" which really an array index as a string to be written as ascii
 * This will catch any errors in index as a string generation
 */
function serializeString(buffer, key, value, index, isArray) {
    // Encode String type
    buffer[index++] = constants.BSON_DATA_STRING;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes + 1;
    buffer[index - 1] = 0;
    // Write the string
    const size = buffer.write(value, index + 4, undefined, 'utf8');
    // Write the size of the string to buffer
    buffer[index + 3] = ((size + 1) >> 24) & 0xff;
    buffer[index + 2] = ((size + 1) >> 16) & 0xff;
    buffer[index + 1] = ((size + 1) >> 8) & 0xff;
    buffer[index] = (size + 1) & 0xff;
    // Update index
    index = index + 4 + size;
    // Write zero
    buffer[index++] = 0;
    return index;
}
function serializeNumber(buffer, key, value, index, isArray) {
    // We have an integer value
    // TODO(NODE-2529): Add support for big int
    if (Number.isInteger(value) &&
        value >= constants.BSON_INT32_MIN &&
        value <= constants.BSON_INT32_MAX) {
        // If the value fits in 32 bits encode as int32
        // Set int type 32 bits or less
        buffer[index++] = constants.BSON_DATA_INT;
        // Number of written bytes
        const numberOfWrittenBytes = !isArray
            ? buffer.write(key, index, undefined, 'utf8')
            : buffer.write(key, index, undefined, 'ascii');
        // Encode the name
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        // Write the int value
        buffer[index++] = value & 0xff;
        buffer[index++] = (value >> 8) & 0xff;
        buffer[index++] = (value >> 16) & 0xff;
        buffer[index++] = (value >> 24) & 0xff;
    }
    else {
        // Encode as double
        buffer[index++] = constants.BSON_DATA_NUMBER;
        // Number of written bytes
        const numberOfWrittenBytes = !isArray
            ? buffer.write(key, index, undefined, 'utf8')
            : buffer.write(key, index, undefined, 'ascii');
        // Encode the name
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        // Write float
        float_parser_1.writeIEEE754(buffer, value, index, 'little', 52, 8);
        // Adjust index
        index = index + 8;
    }
    return index;
}
function serializeNull(buffer, key, _, index, isArray) {
    // Set long type
    buffer[index++] = constants.BSON_DATA_NULL;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeBoolean(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_BOOLEAN;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Encode the boolean value
    buffer[index++] = value ? 1 : 0;
    return index;
}
function serializeDate(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_DATE;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the date
    const dateInMilis = long_1.Long.fromNumber(value.getTime());
    const lowBits = dateInMilis.getLowBits();
    const highBits = dateInMilis.getHighBits();
    // Encode low bits
    buffer[index++] = lowBits & 0xff;
    buffer[index++] = (lowBits >> 8) & 0xff;
    buffer[index++] = (lowBits >> 16) & 0xff;
    buffer[index++] = (lowBits >> 24) & 0xff;
    // Encode high bits
    buffer[index++] = highBits & 0xff;
    buffer[index++] = (highBits >> 8) & 0xff;
    buffer[index++] = (highBits >> 16) & 0xff;
    buffer[index++] = (highBits >> 24) & 0xff;
    return index;
}
function serializeRegExp(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_REGEXP;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    if (value.source && value.source.match(regexp) != null) {
        throw Error('value ' + value.source + ' must not contain null bytes');
    }
    // Adjust the index
    index = index + buffer.write(value.source, index, undefined, 'utf8');
    // Write zero
    buffer[index++] = 0x00;
    // Write the parameters
    if (value.ignoreCase)
        buffer[index++] = 0x69; // i
    if (value.global)
        buffer[index++] = 0x73; // s
    if (value.multiline)
        buffer[index++] = 0x6d; // m
    // Add ending zero
    buffer[index++] = 0x00;
    return index;
}
function serializeBSONRegExp(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_REGEXP;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Check the pattern for 0 bytes
    if (value.pattern.match(regexp) != null) {
        // The BSON spec doesn't allow keys with null bytes because keys are
        // null-terminated.
        throw Error('pattern ' + value.pattern + ' must not contain null bytes');
    }
    // Adjust the index
    index = index + buffer.write(value.pattern, index, undefined, 'utf8');
    // Write zero
    buffer[index++] = 0x00;
    // Write the options
    index = index + buffer.write(value.options.split('').sort().join(''), index, undefined, 'utf8');
    // Add ending zero
    buffer[index++] = 0x00;
    return index;
}
function serializeMinMax(buffer, key, value, index, isArray) {
    // Write the type of either min or max key
    if (value === null) {
        buffer[index++] = constants.BSON_DATA_NULL;
    }
    else if (value._bsontype === 'MinKey') {
        buffer[index++] = constants.BSON_DATA_MIN_KEY;
    }
    else {
        buffer[index++] = constants.BSON_DATA_MAX_KEY;
    }
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    return index;
}
function serializeObjectId(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_OID;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the objectId into the shared buffer
    if (typeof value.id === 'string') {
        buffer.write(value.id, index, undefined, 'binary');
    }
    else if (value.id && value.id.copy) {
        value.id.copy(buffer, index, 0, 12);
    }
    else {
        throw new TypeError('object [' + JSON.stringify(value) + '] is not a valid ObjectId');
    }
    // Adjust index
    return index + 12;
}
function serializeBuffer(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_BINARY;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Get size of the buffer (current write point)
    const size = value.length;
    // Write the size of the string to buffer
    buffer[index++] = size & 0xff;
    buffer[index++] = (size >> 8) & 0xff;
    buffer[index++] = (size >> 16) & 0xff;
    buffer[index++] = (size >> 24) & 0xff;
    // Write the default subtype
    buffer[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT;
    // Copy the content form the binary field to the buffer
    buffer.set(ensure_buffer_1.ensureBuffer(value), index);
    // Adjust the index
    index = index + size;
    return index;
}
function serializeObject(buffer, key, value, index, checkKeys = false, depth = 0, serializeFunctions = false, ignoreUndefined = true, isArray = false, path = []) {
    for (let i = 0; i < path.length; i++) {
        if (path[i] === value)
            throw new Error('cyclic dependency detected');
    }
    // Push value to stack
    path.push(value);
    // Write the type
    buffer[index++] = Array.isArray(value) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    const endIndex = serializeInto(buffer, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path);
    // Pop stack
    path.pop();
    return endIndex;
}
function serializeDecimal128(buffer, key, value, index, isArray) {
    buffer[index++] = constants.BSON_DATA_DECIMAL128;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the data from the value
    value.bytes.copy(buffer, index, 0, 16);
    return index + 16;
}
function serializeLong(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] =
        value._bsontype === 'Long' ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the date
    const lowBits = value.getLowBits();
    const highBits = value.getHighBits();
    // Encode low bits
    buffer[index++] = lowBits & 0xff;
    buffer[index++] = (lowBits >> 8) & 0xff;
    buffer[index++] = (lowBits >> 16) & 0xff;
    buffer[index++] = (lowBits >> 24) & 0xff;
    // Encode high bits
    buffer[index++] = highBits & 0xff;
    buffer[index++] = (highBits >> 8) & 0xff;
    buffer[index++] = (highBits >> 16) & 0xff;
    buffer[index++] = (highBits >> 24) & 0xff;
    return index;
}
function serializeInt32(buffer, key, value, index, isArray) {
    value = value.valueOf();
    // Set int type 32 bits or less
    buffer[index++] = constants.BSON_DATA_INT;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the int value
    buffer[index++] = value & 0xff;
    buffer[index++] = (value >> 8) & 0xff;
    buffer[index++] = (value >> 16) & 0xff;
    buffer[index++] = (value >> 24) & 0xff;
    return index;
}
function serializeDouble(buffer, key, value, index, isArray) {
    // Encode as double
    buffer[index++] = constants.BSON_DATA_NUMBER;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write float
    float_parser_1.writeIEEE754(buffer, value.value, index, 'little', 52, 8);
    // Adjust index
    index = index + 8;
    return index;
}
function serializeFunction(buffer, key, value, index, _checkKeys = false, _depth = 0, isArray) {
    buffer[index++] = constants.BSON_DATA_CODE;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Function string
    const functionString = utils_1.normalizedFunctionString(value);
    // Write the string
    const size = buffer.write(functionString, index + 4, undefined, 'utf8') + 1;
    // Write the size of the string to buffer
    buffer[index] = size & 0xff;
    buffer[index + 1] = (size >> 8) & 0xff;
    buffer[index + 2] = (size >> 16) & 0xff;
    buffer[index + 3] = (size >> 24) & 0xff;
    // Update index
    index = index + 4 + size - 1;
    // Write zero
    buffer[index++] = 0;
    return index;
}
function serializeCode(buffer, key, value, index, checkKeys = false, depth = 0, serializeFunctions = false, ignoreUndefined = true, isArray = false) {
    if (value.scope && typeof value.scope === 'object') {
        // Write the type
        buffer[index++] = constants.BSON_DATA_CODE_W_SCOPE;
        // Number of written bytes
        const numberOfWrittenBytes = !isArray
            ? buffer.write(key, index, undefined, 'utf8')
            : buffer.write(key, index, undefined, 'ascii');
        // Encode the name
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        // Starting index
        let startIndex = index;
        // Serialize the function
        // Get the function string
        const functionString = typeof value.code === 'string' ? value.code : value.code.toString();
        // Index adjustment
        index = index + 4;
        // Write string into buffer
        const codeSize = buffer.write(functionString, index + 4, undefined, 'utf8') + 1;
        // Write the size of the string to buffer
        buffer[index] = codeSize & 0xff;
        buffer[index + 1] = (codeSize >> 8) & 0xff;
        buffer[index + 2] = (codeSize >> 16) & 0xff;
        buffer[index + 3] = (codeSize >> 24) & 0xff;
        // Write end 0
        buffer[index + 4 + codeSize - 1] = 0;
        // Write the
        index = index + codeSize + 4;
        //
        // Serialize the scope value
        const endIndex = serializeInto(buffer, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
        index = endIndex - 1;
        // Writ the total
        const totalSize = endIndex - startIndex;
        // Write the total size of the object
        buffer[startIndex++] = totalSize & 0xff;
        buffer[startIndex++] = (totalSize >> 8) & 0xff;
        buffer[startIndex++] = (totalSize >> 16) & 0xff;
        buffer[startIndex++] = (totalSize >> 24) & 0xff;
        // Write trailing zero
        buffer[index++] = 0;
    }
    else {
        buffer[index++] = constants.BSON_DATA_CODE;
        // Number of written bytes
        const numberOfWrittenBytes = !isArray
            ? buffer.write(key, index, undefined, 'utf8')
            : buffer.write(key, index, undefined, 'ascii');
        // Encode the name
        index = index + numberOfWrittenBytes;
        buffer[index++] = 0;
        // Function string
        const functionString = value.code.toString();
        // Write the string
        const size = buffer.write(functionString, index + 4, undefined, 'utf8') + 1;
        // Write the size of the string to buffer
        buffer[index] = size & 0xff;
        buffer[index + 1] = (size >> 8) & 0xff;
        buffer[index + 2] = (size >> 16) & 0xff;
        buffer[index + 3] = (size >> 24) & 0xff;
        // Update index
        index = index + 4 + size - 1;
        // Write zero
        buffer[index++] = 0;
    }
    return index;
}
function serializeBinary(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_BINARY;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Extract the buffer
    const data = value.value(true);
    // Calculate size
    let size = value.position;
    // Add the deprecated 02 type 4 bytes of size to total
    if (value.sub_type === binary_1.Binary.SUBTYPE_BYTE_ARRAY)
        size = size + 4;
    // Write the size of the string to buffer
    buffer[index++] = size & 0xff;
    buffer[index++] = (size >> 8) & 0xff;
    buffer[index++] = (size >> 16) & 0xff;
    buffer[index++] = (size >> 24) & 0xff;
    // Write the subtype to the buffer
    buffer[index++] = value.sub_type;
    // If we have binary type 2 the 4 first bytes are the size
    if (value.sub_type === binary_1.Binary.SUBTYPE_BYTE_ARRAY) {
        size = size - 4;
        buffer[index++] = size & 0xff;
        buffer[index++] = (size >> 8) & 0xff;
        buffer[index++] = (size >> 16) & 0xff;
        buffer[index++] = (size >> 24) & 0xff;
    }
    // Write the data to the object
    buffer.set(data, index);
    // Adjust the index
    index = index + value.position;
    return index;
}
function serializeSymbol(buffer, key, value, index, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_SYMBOL;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    // Write the string
    const size = buffer.write(value.value, index + 4, undefined, 'utf8') + 1;
    // Write the size of the string to buffer
    buffer[index] = size & 0xff;
    buffer[index + 1] = (size >> 8) & 0xff;
    buffer[index + 2] = (size >> 16) & 0xff;
    buffer[index + 3] = (size >> 24) & 0xff;
    // Update index
    index = index + 4 + size - 1;
    // Write zero
    buffer[index++] = 0x00;
    return index;
}
function serializeDBRef(buffer, key, value, index, depth, serializeFunctions, isArray) {
    // Write the type
    buffer[index++] = constants.BSON_DATA_OBJECT;
    // Number of written bytes
    const numberOfWrittenBytes = !isArray
        ? buffer.write(key, index, undefined, 'utf8')
        : buffer.write(key, index, undefined, 'ascii');
    // Encode the name
    index = index + numberOfWrittenBytes;
    buffer[index++] = 0;
    let startIndex = index;
    let output = {
        $ref: value.collection || value.namespace,
        $id: value.oid
    };
    if (value.db != null) {
        output.$db = value.db;
    }
    output = Object.assign(output, value.fields);
    const endIndex = serializeInto(buffer, output, false, index, depth + 1, serializeFunctions);
    // Calculate object size
    const size = endIndex - startIndex;
    // Write the size
    buffer[startIndex++] = size & 0xff;
    buffer[startIndex++] = (size >> 8) & 0xff;
    buffer[startIndex++] = (size >> 16) & 0xff;
    buffer[startIndex++] = (size >> 24) & 0xff;
    // Set index
    return endIndex;
}
function serializeInto(buffer, object, checkKeys = false, startingIndex = 0, depth = 0, serializeFunctions = false, ignoreUndefined = true, path = []) {
    startingIndex = startingIndex || 0;
    path = path || [];
    // Push the object to the path
    path.push(object);
    // Start place to serialize into
    let index = startingIndex + 4;
    // Special case isArray
    if (Array.isArray(object)) {
        // Get object keys
        for (let i = 0; i < object.length; i++) {
            const key = '' + i;
            let value = object[i];
            // Is there an override value
            if (value && value.toBSON) {
                if (typeof value.toBSON !== 'function')
                    throw new TypeError('toBSON is not a function');
                value = value.toBSON();
            }
            if (typeof value === 'string') {
                index = serializeString(buffer, key, value, index, true);
            }
            else if (typeof value === 'number') {
                index = serializeNumber(buffer, key, value, index, true);
            }
            else if (typeof value === 'bigint') {
                throw new TypeError('Unsupported type BigInt, please use Decimal128');
            }
            else if (typeof value === 'boolean') {
                index = serializeBoolean(buffer, key, value, index, true);
            }
            else if (value instanceof Date || utils_1.isDate(value)) {
                index = serializeDate(buffer, key, value, index, true);
            }
            else if (value === undefined) {
                index = serializeNull(buffer, key, value, index, true);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
                index = serializeObjectId(buffer, key, value, index, true);
            }
            else if (utils_1.isBuffer(value) || utils_1.isUint8Array(value)) {
                index = serializeBuffer(buffer, key, value, index, true);
            }
            else if (value instanceof RegExp || isRegExp(value)) {
                index = serializeRegExp(buffer, key, value, index, true);
            }
            else if (typeof value === 'object' && value['_bsontype'] == null) {
                index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
            }
            else if (typeof value === 'object' &&
                extended_json_1.isBSONType(value) &&
                value._bsontype === 'Decimal128') {
                index = serializeDecimal128(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
                index = serializeLong(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'Double') {
                index = serializeDouble(buffer, key, value, index, true);
            }
            else if (typeof value === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index, checkKeys, depth, true);
            }
            else if (value['_bsontype'] === 'Code') {
                index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
            }
            else if (value['_bsontype'] === 'Binary') {
                index = serializeBinary(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'Symbol') {
                index = serializeSymbol(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'DBRef') {
                index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions, true);
            }
            else if (value['_bsontype'] === 'BSONRegExp') {
                index = serializeBSONRegExp(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'Int32') {
                index = serializeInt32(buffer, key, value, index, true);
            }
            else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
                index = serializeMinMax(buffer, key, value, index, true);
            }
            else if (typeof value['_bsontype'] !== 'undefined') {
                throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
            }
        }
    }
    else if (object instanceof map_1.Map) {
        const iterator = object.entries();
        let done = false;
        while (!done) {
            // Unpack the next entry
            const entry = iterator.next();
            done = !!entry.done;
            // Are we done, then skip and terminate
            if (done)
                continue;
            // Get the entry values
            const key = entry.value[0];
            const value = entry.value[1];
            // Check the type of the value
            const type = typeof value;
            // Check the key and throw error if it's illegal
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    // The BSON spec doesn't allow keys with null bytes because keys are
                    // null-terminated.
                    throw Error('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw Error('key ' + key + " must not start with '$'");
                    }
                    else if (~key.indexOf('.')) {
                        throw Error('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint' || utils_1.isBigInt64Array(value) || utils_1.isBigUInt64Array(value)) {
                throw new TypeError('Unsupported type BigInt, please use Decimal128');
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (value instanceof Date || utils_1.isDate(value)) {
                index = serializeDate(buffer, key, value, index);
            }
            else if (value === null || (value === undefined && ignoreUndefined === false)) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
                index = serializeObjectId(buffer, key, value, index);
            }
            else if (utils_1.isBuffer(value) || utils_1.isUint8Array(value)) {
                index = serializeBuffer(buffer, key, value, index);
            }
            else if (value instanceof RegExp || isRegExp(value)) {
                index = serializeRegExp(buffer, key, value, index);
            }
            else if (type === 'object' && value['_bsontype'] == null) {
                index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
            }
            else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
                index = serializeDecimal128(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
                index = serializeLong(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Double') {
                index = serializeDouble(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Code') {
                index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
            }
            else if (typeof value === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index, checkKeys, depth, serializeFunctions);
            }
            else if (value['_bsontype'] === 'Binary') {
                index = serializeBinary(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Symbol') {
                index = serializeSymbol(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'DBRef') {
                index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions);
            }
            else if (value['_bsontype'] === 'BSONRegExp') {
                index = serializeBSONRegExp(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Int32') {
                index = serializeInt32(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
                index = serializeMinMax(buffer, key, value, index);
            }
            else if (typeof value['_bsontype'] !== 'undefined') {
                throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
            }
        }
    }
    else {
        // Did we provide a custom serialization method
        if (object.toBSON) {
            if (typeof object.toBSON !== 'function')
                throw new TypeError('toBSON is not a function');
            object = object.toBSON();
            if (object != null && typeof object !== 'object')
                throw new TypeError('toBSON function did not return an object');
        }
        // Iterate over all the keys
        for (const key in object) {
            let value = object[key];
            // Is there an override value
            if (value && value.toBSON) {
                if (typeof value.toBSON !== 'function')
                    throw new TypeError('toBSON is not a function');
                value = value.toBSON();
            }
            // Check the type of the value
            const type = typeof value;
            // Check the key and throw error if it's illegal
            if (typeof key === 'string' && !ignoreKeys.has(key)) {
                if (key.match(regexp) != null) {
                    // The BSON spec doesn't allow keys with null bytes because keys are
                    // null-terminated.
                    throw Error('key ' + key + ' must not contain null bytes');
                }
                if (checkKeys) {
                    if ('$' === key[0]) {
                        throw Error('key ' + key + " must not start with '$'");
                    }
                    else if (~key.indexOf('.')) {
                        throw Error('key ' + key + " must not contain '.'");
                    }
                }
            }
            if (type === 'string') {
                index = serializeString(buffer, key, value, index);
            }
            else if (type === 'number') {
                index = serializeNumber(buffer, key, value, index);
            }
            else if (type === 'bigint') {
                throw new TypeError('Unsupported type BigInt, please use Decimal128');
            }
            else if (type === 'boolean') {
                index = serializeBoolean(buffer, key, value, index);
            }
            else if (value instanceof Date || utils_1.isDate(value)) {
                index = serializeDate(buffer, key, value, index);
            }
            else if (value === undefined) {
                if (ignoreUndefined === false)
                    index = serializeNull(buffer, key, value, index);
            }
            else if (value === null) {
                index = serializeNull(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
                index = serializeObjectId(buffer, key, value, index);
            }
            else if (utils_1.isBuffer(value) || utils_1.isUint8Array(value)) {
                index = serializeBuffer(buffer, key, value, index);
            }
            else if (value instanceof RegExp || isRegExp(value)) {
                index = serializeRegExp(buffer, key, value, index);
            }
            else if (type === 'object' && value['_bsontype'] == null) {
                index = serializeObject(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
            }
            else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
                index = serializeDecimal128(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
                index = serializeLong(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Double') {
                index = serializeDouble(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Code') {
                index = serializeCode(buffer, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
            }
            else if (typeof value === 'function' && serializeFunctions) {
                index = serializeFunction(buffer, key, value, index, checkKeys, depth, serializeFunctions);
            }
            else if (value['_bsontype'] === 'Binary') {
                index = serializeBinary(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Symbol') {
                index = serializeSymbol(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'DBRef') {
                index = serializeDBRef(buffer, key, value, index, depth, serializeFunctions);
            }
            else if (value['_bsontype'] === 'BSONRegExp') {
                index = serializeBSONRegExp(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'Int32') {
                index = serializeInt32(buffer, key, value, index);
            }
            else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
                index = serializeMinMax(buffer, key, value, index);
            }
            else if (typeof value['_bsontype'] !== 'undefined') {
                throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
            }
        }
    }
    // Remove the path
    path.pop();
    // Final padding byte for object
    buffer[index++] = 0x00;
    // Final size
    const size = index - startingIndex;
    // Write the size of the object
    buffer[startingIndex++] = size & 0xff;
    buffer[startingIndex++] = (size >> 8) & 0xff;
    buffer[startingIndex++] = (size >> 16) & 0xff;
    buffer[startingIndex++] = (size >> 24) & 0xff;
    return index;
}
exports.serializeInto = serializeInto;
//# sourceMappingURL=serializer.js.map
}, function(modId) { var map = {"../binary":1609067987837,"../constants":1609067987856,"../ensure_buffer":1609067987838,"../extended_json":1609067987846,"../float_parser":1609067987860,"../long":1609067987844,"../map":1609067987854,"./utils":1609067987839}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1609067987860, function(require, module, exports) {

// Copyright (c) 2008, Fair Oaks Labs, Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
//
//  * Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
//    may be used to endorse or promote products derived from this software
//    without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
//
// Modifications to writeIEEE754 to support negative zeroes made by Brian White
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeIEEE754 = exports.readIEEE754 = void 0;
function readIEEE754(buffer, offset, endian, mLen, nBytes) {
    let e;
    let m;
    const bBE = endian === 'big';
    const eLen = nBytes * 8 - mLen - 1;
    const eMax = (1 << eLen) - 1;
    const eBias = eMax >> 1;
    let nBits = -7;
    let i = bBE ? 0 : nBytes - 1;
    const d = bBE ? 1 : -1;
    let s = buffer[offset + i];
    i += d;
    e = s & ((1 << -nBits) - 1);
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8)
        ;
    m = e & ((1 << -nBits) - 1);
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8)
        ;
    if (e === 0) {
        e = 1 - eBias;
    }
    else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    }
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}
exports.readIEEE754 = readIEEE754;
function writeIEEE754(buffer, value, offset, endian, mLen, nBytes) {
    let e;
    let m;
    let c;
    const bBE = endian === 'big';
    let eLen = nBytes * 8 - mLen - 1;
    const eMax = (1 << eLen) - 1;
    const eBias = eMax >> 1;
    const rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    let i = bBE ? nBytes - 1 : 0;
    const d = bBE ? -1 : 1;
    const s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    }
    else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        }
        else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        }
        else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        }
        else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    if (isNaN(value))
        m = 0;
    while (mLen >= 8) {
        buffer[offset + i] = m & 0xff;
        i += d;
        m /= 256;
        mLen -= 8;
    }
    e = (e << mLen) | m;
    if (isNaN(value))
        e += 8;
    eLen += mLen;
    while (eLen > 0) {
        buffer[offset + i] = e & 0xff;
        i += d;
        e /= 256;
        eLen -= 8;
    }
    buffer[offset + i - d] |= s * 128;
}
exports.writeIEEE754 = writeIEEE754;
//# sourceMappingURL=float_parser.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1609067987836);
})()
//# sourceMappingURL=index.js.map