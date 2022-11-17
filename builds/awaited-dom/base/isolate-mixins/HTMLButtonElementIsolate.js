"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLButtonElementIsolateConstantKeys = exports.HTMLButtonElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLButtonElementIsolate', exports.getState, exports.setState);
class HTMLButtonElementIsolate {
    get autofocus() {
        return exports.awaitedHandler.getProperty(this, 'autofocus', false);
    }
    get disabled() {
        return exports.awaitedHandler.getProperty(this, 'disabled', false);
    }
    get form() {
        throw new Error('HTMLButtonElementIsolate.form getter not implemented');
    }
    get formAction() {
        return exports.awaitedHandler.getProperty(this, 'formAction', false);
    }
    get formEnctype() {
        return exports.awaitedHandler.getProperty(this, 'formEnctype', false);
    }
    get formMethod() {
        return exports.awaitedHandler.getProperty(this, 'formMethod', false);
    }
    get formNoValidate() {
        return exports.awaitedHandler.getProperty(this, 'formNoValidate', false);
    }
    get formTarget() {
        return exports.awaitedHandler.getProperty(this, 'formTarget', false);
    }
    get labels() {
        throw new Error('HTMLButtonElementIsolate.labels getter not implemented');
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
    get validationMessage() {
        return exports.awaitedHandler.getProperty(this, 'validationMessage', false);
    }
    get validity() {
        return exports.awaitedHandler.getProperty(this, 'validity', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
    get willValidate() {
        return exports.awaitedHandler.getProperty(this, 'willValidate', false);
    }
    // methods
    checkValidity() {
        return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
    }
    reportValidity() {
        return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
    }
}
exports.default = HTMLButtonElementIsolate;
exports.HTMLButtonElementIsolatePropertyKeys = ['autofocus', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
exports.HTMLButtonElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLButtonElementIsolate.js.map