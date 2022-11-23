"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var delegation_1 = require("./delegation");
var params_1 = require("./params");
exports.protobufPackage = "kyve.delegation.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        delegator_list: [],
        delegation_entry_list: [],
        delegation_data_list: [],
        delegation_slash_list: [],
        undelegation_queue_entry_list: [],
        queue_state_undelegation: undefined,
        redelegation_cooldown_list: [],
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.delegator_list; _i < _a.length; _i++) {
            var v = _a[_i];
            delegation_1.Delegator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.delegation_entry_list; _b < _c.length; _b++) {
            var v = _c[_b];
            delegation_1.DelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _d = 0, _e = message.delegation_data_list; _d < _e.length; _d++) {
            var v = _e[_d];
            delegation_1.DelegationData.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _f = 0, _g = message.delegation_slash_list; _f < _g.length; _f++) {
            var v = _g[_f];
            delegation_1.DelegationSlash.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _h = 0, _j = message.undelegation_queue_entry_list; _h < _j.length; _h++) {
            var v = _j[_h];
            delegation_1.UndelegationQueueEntry.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.queue_state_undelegation !== undefined) {
            delegation_1.QueueState.encode(message.queue_state_undelegation, writer.uint32(58).fork()).ldelim();
        }
        for (var _k = 0, _l = message.redelegation_cooldown_list; _k < _l.length; _k++) {
            var v = _l[_k];
            delegation_1.RedelegationCooldown.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.delegator_list.push(delegation_1.Delegator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegation_entry_list.push(delegation_1.DelegationEntry.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegation_data_list.push(delegation_1.DelegationData.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegation_slash_list.push(delegation_1.DelegationSlash.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.undelegation_queue_entry_list.push(delegation_1.UndelegationQueueEntry.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.queue_state_undelegation = delegation_1.QueueState.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.redelegation_cooldown_list.push(delegation_1.RedelegationCooldown.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            delegator_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_list)
                ? object.delegator_list.map(function (e) { return delegation_1.Delegator.fromJSON(e); })
                : [],
            delegation_entry_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_entry_list)
                ? object.delegation_entry_list.map(function (e) { return delegation_1.DelegationEntry.fromJSON(e); })
                : [],
            delegation_data_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_data_list)
                ? object.delegation_data_list.map(function (e) { return delegation_1.DelegationData.fromJSON(e); })
                : [],
            delegation_slash_list: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_slash_list)
                ? object.delegation_slash_list.map(function (e) { return delegation_1.DelegationSlash.fromJSON(e); })
                : [],
            undelegation_queue_entry_list: Array.isArray(object === null || object === void 0 ? void 0 : object.undelegation_queue_entry_list)
                ? object.undelegation_queue_entry_list.map(function (e) { return delegation_1.UndelegationQueueEntry.fromJSON(e); })
                : [],
            queue_state_undelegation: isSet(object.queue_state_undelegation)
                ? delegation_1.QueueState.fromJSON(object.queue_state_undelegation)
                : undefined,
            redelegation_cooldown_list: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_cooldown_list)
                ? object.redelegation_cooldown_list.map(function (e) { return delegation_1.RedelegationCooldown.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.delegator_list) {
            obj.delegator_list = message.delegator_list.map(function (e) { return e ? delegation_1.Delegator.toJSON(e) : undefined; });
        }
        else {
            obj.delegator_list = [];
        }
        if (message.delegation_entry_list) {
            obj.delegation_entry_list = message.delegation_entry_list.map(function (e) { return e ? delegation_1.DelegationEntry.toJSON(e) : undefined; });
        }
        else {
            obj.delegation_entry_list = [];
        }
        if (message.delegation_data_list) {
            obj.delegation_data_list = message.delegation_data_list.map(function (e) { return e ? delegation_1.DelegationData.toJSON(e) : undefined; });
        }
        else {
            obj.delegation_data_list = [];
        }
        if (message.delegation_slash_list) {
            obj.delegation_slash_list = message.delegation_slash_list.map(function (e) { return e ? delegation_1.DelegationSlash.toJSON(e) : undefined; });
        }
        else {
            obj.delegation_slash_list = [];
        }
        if (message.undelegation_queue_entry_list) {
            obj.undelegation_queue_entry_list = message.undelegation_queue_entry_list.map(function (e) {
                return e ? delegation_1.UndelegationQueueEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.undelegation_queue_entry_list = [];
        }
        message.queue_state_undelegation !== undefined && (obj.queue_state_undelegation = message.queue_state_undelegation
            ? delegation_1.QueueState.toJSON(message.queue_state_undelegation)
            : undefined);
        if (message.redelegation_cooldown_list) {
            obj.redelegation_cooldown_list = message.redelegation_cooldown_list.map(function (e) {
                return e ? delegation_1.RedelegationCooldown.toJSON(e) : undefined;
            });
        }
        else {
            obj.redelegation_cooldown_list = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_1.Params.fromPartial(object.params)
            : undefined;
        message.delegator_list = ((_a = object.delegator_list) === null || _a === void 0 ? void 0 : _a.map(function (e) { return delegation_1.Delegator.fromPartial(e); })) || [];
        message.delegation_entry_list = ((_b = object.delegation_entry_list) === null || _b === void 0 ? void 0 : _b.map(function (e) { return delegation_1.DelegationEntry.fromPartial(e); })) || [];
        message.delegation_data_list = ((_c = object.delegation_data_list) === null || _c === void 0 ? void 0 : _c.map(function (e) { return delegation_1.DelegationData.fromPartial(e); })) || [];
        message.delegation_slash_list = ((_d = object.delegation_slash_list) === null || _d === void 0 ? void 0 : _d.map(function (e) { return delegation_1.DelegationSlash.fromPartial(e); })) || [];
        message.undelegation_queue_entry_list =
            ((_e = object.undelegation_queue_entry_list) === null || _e === void 0 ? void 0 : _e.map(function (e) { return delegation_1.UndelegationQueueEntry.fromPartial(e); })) || [];
        message.queue_state_undelegation =
            (object.queue_state_undelegation !== undefined && object.queue_state_undelegation !== null)
                ? delegation_1.QueueState.fromPartial(object.queue_state_undelegation)
                : undefined;
        message.redelegation_cooldown_list =
            ((_f = object.redelegation_cooldown_list) === null || _f === void 0 ? void 0 : _f.map(function (e) { return delegation_1.RedelegationCooldown.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map