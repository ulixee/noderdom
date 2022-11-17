"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLAreaElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLAreaElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLAreaElementIsolate extends HTMLAreaElementIsolate_1.default {
    get relList() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'relList'), awaitedOptions);
    }
}
exports.default = HTMLAreaElementIsolate;
//# sourceMappingURL=HTMLAreaElementIsolate.js.map