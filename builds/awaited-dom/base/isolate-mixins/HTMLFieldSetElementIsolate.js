"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFieldSetElementIsolateConstantKeys = exports.HTMLFieldSetElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFieldSetElementIsolate', exports.getState, exports.setState);
class HTMLFieldSetElementIsolate {
    get disabled() {
        return exports.awaitedHandler.getProperty(this, 'disabled', false);
    }
    get elements() {
        throw new Error('HTMLFieldSetElementIsolate.elements getter not implemented');
    }
    get form() {
        throw new Error('HTMLFieldSetElementIsolate.form getter not implemented');
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
exports.default = HTMLFieldSetElementIsolate;
exports.HTMLFieldSetElementIsolatePropertyKeys = ['disabled', 'elements', 'form', 'name', 'type', 'validationMessage', 'validity', 'willValidate'];
exports.HTMLFieldSetElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLFieldSetElementIsolate.js.map