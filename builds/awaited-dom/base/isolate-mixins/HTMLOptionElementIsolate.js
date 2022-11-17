"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLOptionElementIsolateConstantKeys = exports.HTMLOptionElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOptionElementIsolate', exports.getState, exports.setState);
class HTMLOptionElementIsolate {
    get defaultSelected() {
        return exports.awaitedHandler.getProperty(this, 'defaultSelected', false);
    }
    get disabled() {
        return exports.awaitedHandler.getProperty(this, 'disabled', false);
    }
    get form() {
        throw new Error('HTMLOptionElementIsolate.form getter not implemented');
    }
    get index() {
        return exports.awaitedHandler.getProperty(this, 'index', false);
    }
    get label() {
        return exports.awaitedHandler.getProperty(this, 'label', false);
    }
    get selected() {
        return exports.awaitedHandler.getProperty(this, 'selected', false);
    }
    get text() {
        return exports.awaitedHandler.getProperty(this, 'text', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
}
exports.default = HTMLOptionElementIsolate;
exports.HTMLOptionElementIsolatePropertyKeys = ['defaultSelected', 'disabled', 'form', 'index', 'label', 'selected', 'text', 'value'];
exports.HTMLOptionElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLOptionElementIsolate.js.map