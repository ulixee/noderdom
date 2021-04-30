"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLMapElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLMapElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLMapElementIsolate extends HTMLMapElementIsolate_1.default {
    get areas() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty(this, 'areas'), awaitedOptions);
    }
}
exports.default = HTMLMapElementIsolate;
//# sourceMappingURL=HTMLMapElementIsolate.js.map