"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLinkElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLLinkElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLLinkElementIsolate extends HTMLLinkElementIsolate_1.default {
    get relList() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMTokenList(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
    }
    get sizes() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMTokenList(awaitedPath.addProperty(this, 'sizes'), awaitedOptions);
    }
}
exports.default = HTMLLinkElementIsolate;
//# sourceMappingURL=HTMLLinkElementIsolate.js.map