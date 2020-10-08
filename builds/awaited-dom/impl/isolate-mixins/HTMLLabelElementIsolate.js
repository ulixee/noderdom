"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLLabelElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLLabelElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLLabelElementIsolate extends HTMLLabelElementIsolate_1.default {
    get control() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLElement(awaitedPath.addProperty('control'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
    }
}
exports.default = HTMLLabelElementIsolate;
//# sourceMappingURL=HTMLLabelElementIsolate.js.map