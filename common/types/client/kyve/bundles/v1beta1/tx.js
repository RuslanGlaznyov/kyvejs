"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgSkipUploaderRoleResponse = exports.MsgSkipUploaderRole = exports.MsgClaimUploaderRoleResponse = exports.MsgClaimUploaderRole = exports.MsgVoteBundleProposalResponse = exports.MsgVoteBundleProposal = exports.MsgSubmitBundleProposalResponse = exports.MsgSubmitBundleProposal = exports.voteTypeToJSON = exports.voteTypeFromJSON = exports.VoteType = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.bundles.v1beta1";
/** VoteType ... */
var VoteType;
(function (VoteType) {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
    VoteType[VoteType["VOTE_TYPE_UNSPECIFIED"] = 0] = "VOTE_TYPE_UNSPECIFIED";
    /** VOTE_TYPE_VALID - VOTE_TYPE_VALID ... */
    VoteType[VoteType["VOTE_TYPE_VALID"] = 1] = "VOTE_TYPE_VALID";
    /** VOTE_TYPE_INVALID - VOTE_TYPE_INVALID ... */
    VoteType[VoteType["VOTE_TYPE_INVALID"] = 2] = "VOTE_TYPE_INVALID";
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
    VoteType[VoteType["VOTE_TYPE_ABSTAIN"] = 3] = "VOTE_TYPE_ABSTAIN";
    VoteType[VoteType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
function voteTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_TYPE_UNSPECIFIED":
            return VoteType.VOTE_TYPE_UNSPECIFIED;
        case 1:
        case "VOTE_TYPE_VALID":
            return VoteType.VOTE_TYPE_VALID;
        case 2:
        case "VOTE_TYPE_INVALID":
            return VoteType.VOTE_TYPE_INVALID;
        case 3:
        case "VOTE_TYPE_ABSTAIN":
            return VoteType.VOTE_TYPE_ABSTAIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteType.UNRECOGNIZED;
    }
}
exports.voteTypeFromJSON = voteTypeFromJSON;
function voteTypeToJSON(object) {
    switch (object) {
        case VoteType.VOTE_TYPE_UNSPECIFIED:
            return "VOTE_TYPE_UNSPECIFIED";
        case VoteType.VOTE_TYPE_VALID:
            return "VOTE_TYPE_VALID";
        case VoteType.VOTE_TYPE_INVALID:
            return "VOTE_TYPE_INVALID";
        case VoteType.VOTE_TYPE_ABSTAIN:
            return "VOTE_TYPE_ABSTAIN";
        case VoteType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteTypeToJSON = voteTypeToJSON;
function createBaseMsgSubmitBundleProposal() {
    return {
        creator: "",
        staker: "",
        pool_id: "0",
        storage_id: "",
        data_size: "0",
        data_hash: "",
        from_index: "0",
        bundle_size: "0",
        from_key: "",
        to_key: "",
        bundle_summary: "",
    };
}
exports.MsgSubmitBundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        if (message.storage_id !== "") {
            writer.uint32(34).string(message.storage_id);
        }
        if (message.data_size !== "0") {
            writer.uint32(40).uint64(message.data_size);
        }
        if (message.data_hash !== "") {
            writer.uint32(50).string(message.data_hash);
        }
        if (message.from_index !== "0") {
            writer.uint32(56).uint64(message.from_index);
        }
        if (message.bundle_size !== "0") {
            writer.uint32(64).uint64(message.bundle_size);
        }
        if (message.from_key !== "") {
            writer.uint32(74).string(message.from_key);
        }
        if (message.to_key !== "") {
            writer.uint32(82).string(message.to_key);
        }
        if (message.bundle_summary !== "") {
            writer.uint32(90).string(message.bundle_summary);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitBundleProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.storage_id = reader.string();
                    break;
                case 5:
                    message.data_size = longToString(reader.uint64());
                    break;
                case 6:
                    message.data_hash = reader.string();
                    break;
                case 7:
                    message.from_index = longToString(reader.uint64());
                    break;
                case 8:
                    message.bundle_size = longToString(reader.uint64());
                    break;
                case 9:
                    message.from_key = reader.string();
                    break;
                case 10:
                    message.to_key = reader.string();
                    break;
                case 11:
                    message.bundle_summary = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            data_size: isSet(object.data_size) ? String(object.data_size) : "0",
            data_hash: isSet(object.data_hash) ? String(object.data_hash) : "",
            from_index: isSet(object.from_index) ? String(object.from_index) : "0",
            bundle_size: isSet(object.bundle_size) ? String(object.bundle_size) : "0",
            from_key: isSet(object.from_key) ? String(object.from_key) : "",
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            bundle_summary: isSet(object.bundle_summary) ? String(object.bundle_summary) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.data_size !== undefined && (obj.data_size = message.data_size);
        message.data_hash !== undefined && (obj.data_hash = message.data_hash);
        message.from_index !== undefined && (obj.from_index = message.from_index);
        message.bundle_size !== undefined && (obj.bundle_size = message.bundle_size);
        message.from_key !== undefined && (obj.from_key = message.from_key);
        message.to_key !== undefined && (obj.to_key = message.to_key);
        message.bundle_summary !== undefined && (obj.bundle_summary = message.bundle_summary);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseMsgSubmitBundleProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.storage_id = (_d = object.storage_id) !== null && _d !== void 0 ? _d : "";
        message.data_size = (_e = object.data_size) !== null && _e !== void 0 ? _e : "0";
        message.data_hash = (_f = object.data_hash) !== null && _f !== void 0 ? _f : "";
        message.from_index = (_g = object.from_index) !== null && _g !== void 0 ? _g : "0";
        message.bundle_size = (_h = object.bundle_size) !== null && _h !== void 0 ? _h : "0";
        message.from_key = (_j = object.from_key) !== null && _j !== void 0 ? _j : "";
        message.to_key = (_k = object.to_key) !== null && _k !== void 0 ? _k : "";
        message.bundle_summary = (_l = object.bundle_summary) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseMsgSubmitBundleProposalResponse() {
    return {};
}
exports.MsgSubmitBundleProposalResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitBundleProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSubmitBundleProposalResponse();
        return message;
    },
};
function createBaseMsgVoteBundleProposal() {
    return { creator: "", staker: "", pool_id: "0", storage_id: "", vote: 0 };
}
exports.MsgVoteBundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        if (message.storage_id !== "") {
            writer.uint32(34).string(message.storage_id);
        }
        if (message.vote !== 0) {
            writer.uint32(40).int32(message.vote);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteBundleProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.storage_id = reader.string();
                    break;
                case 5:
                    message.vote = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.vote !== undefined && (obj.vote = voteTypeToJSON(message.vote));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMsgVoteBundleProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.storage_id = (_d = object.storage_id) !== null && _d !== void 0 ? _d : "";
        message.vote = (_e = object.vote) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseMsgVoteBundleProposalResponse() {
    return {};
}
exports.MsgVoteBundleProposalResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteBundleProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgVoteBundleProposalResponse();
        return message;
    },
};
function createBaseMsgClaimUploaderRole() {
    return { creator: "", staker: "", pool_id: "0" };
}
exports.MsgClaimUploaderRole = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimUploaderRole();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgClaimUploaderRole();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseMsgClaimUploaderRoleResponse() {
    return {};
}
exports.MsgClaimUploaderRoleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimUploaderRoleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgClaimUploaderRoleResponse();
        return message;
    },
};
function createBaseMsgSkipUploaderRole() {
    return { creator: "", staker: "", pool_id: "0", from_index: "0" };
}
exports.MsgSkipUploaderRole = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(24).uint64(message.pool_id);
        }
        if (message.from_index !== "0") {
            writer.uint32(32).uint64(message.from_index);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSkipUploaderRole();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.from_index = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            from_index: isSet(object.from_index) ? String(object.from_index) : "0",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.from_index !== undefined && (obj.from_index = message.from_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgSkipUploaderRole();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.pool_id = (_c = object.pool_id) !== null && _c !== void 0 ? _c : "0";
        message.from_index = (_d = object.from_index) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseMsgSkipUploaderRoleResponse() {
    return {};
}
exports.MsgSkipUploaderRoleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSkipUploaderRoleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSkipUploaderRoleResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return { authority: "", payload: "" };
}
exports.MsgUpdateParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.payload !== "") {
            writer.uint32(18).string(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.payload = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            payload: isSet(object.payload) ? String(object.payload) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.payload !== undefined && (obj.payload = message.payload);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgUpdateParams();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "kyve.bundles.v1beta1.Msg";
        this.rpc = rpc;
        this.SubmitBundleProposal = this.SubmitBundleProposal.bind(this);
        this.VoteBundleProposal = this.VoteBundleProposal.bind(this);
        this.ClaimUploaderRole = this.ClaimUploaderRole.bind(this);
        this.SkipUploaderRole = this.SkipUploaderRole.bind(this);
        this.UpdateParams = this.UpdateParams.bind(this);
    }
    MsgClientImpl.prototype.SubmitBundleProposal = function (request) {
        var data = exports.MsgSubmitBundleProposal.encode(request).finish();
        var promise = this.rpc.request(this.service, "SubmitBundleProposal", data);
        return promise.then(function (data) { return exports.MsgSubmitBundleProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.VoteBundleProposal = function (request) {
        var data = exports.MsgVoteBundleProposal.encode(request).finish();
        var promise = this.rpc.request(this.service, "VoteBundleProposal", data);
        return promise.then(function (data) { return exports.MsgVoteBundleProposalResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.ClaimUploaderRole = function (request) {
        var data = exports.MsgClaimUploaderRole.encode(request).finish();
        var promise = this.rpc.request(this.service, "ClaimUploaderRole", data);
        return promise.then(function (data) { return exports.MsgClaimUploaderRoleResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.SkipUploaderRole = function (request) {
        var data = exports.MsgSkipUploaderRole.encode(request).finish();
        var promise = this.rpc.request(this.service, "SkipUploaderRole", data);
        return promise.then(function (data) { return exports.MsgSkipUploaderRoleResponse.decode(new minimal_1.default.Reader(data)); });
    };
    MsgClientImpl.prototype.UpdateParams = function (request) {
        var data = exports.MsgUpdateParams.encode(request).finish();
        var promise = this.rpc.request(this.service, "UpdateParams", data);
        return promise.then(function (data) { return exports.MsgUpdateParamsResponse.decode(new minimal_1.default.Reader(data)); });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function longToString(long) {
    return long.toString();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map