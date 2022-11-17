"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLabelElementIsolateConstantKeys = exports.HTMLLabelElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLabelElementIsolate', exports.getState, exports.setState);
class HTMLLabelElementIsolate {
    get control() {
        throw new Error('HTMLLabelElementIsolate.control getter not implemented');
    }
    get form() {
        throw new Error('HTMLLabelElementIsolate.form getter not implemented');
    }
    get htmlFor() {
        return exports.awaitedHandler.getProperty(this, 'htmlFor', false);
    }
}
exports.default = HTMLLabelElementIsolate;
exports.HTMLLabelElementIsolatePropertyKeys = ['control', 'form', 'htmlFor'];
exports.HTMLLabelElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLLabelElementIsolate.js.map