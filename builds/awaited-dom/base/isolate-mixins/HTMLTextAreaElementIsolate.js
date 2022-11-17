"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTextAreaElementIsolateConstantKeys = exports.HTMLTextAreaElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTextAreaElementIsolate', exports.getState, exports.setState);
class HTMLTextAreaElementIsolate {
    get autocomplete() {
        return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
    }
    get autofocus() {
        return exports.awaitedHandler.getProperty(this, 'autofocus', false);
    }
    get cols() {
        return exports.awaitedHandler.getProperty(this, 'cols', false);
    }
    get defaultValue() {
        return exports.awaitedHandler.getProperty(this, 'defaultValue', false);
    }
    get disabled() {
        return exports.awaitedHandler.getProperty(this, 'disabled', false);
    }
    get form() {
        throw new Error('HTMLTextAreaElementIsolate.form getter not implemented');
    }
    get inputMode() {
        return exports.awaitedHandler.getProperty(this, 'inputMode', false);
    }
    get labels() {
        throw new Error('HTMLTextAreaElementIsolate.labels getter not implemented');
    }
    get maxLength() {
        return exports.awaitedHandler.getProperty(this, 'maxLength', false);
    }
    get minLength() {
        return exports.awaitedHandler.getProperty(this, 'minLength', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get placeholder() {
        return exports.awaitedHandler.getProperty(this, 'placeholder', false);
    }
    get readOnly() {
        return exports.awaitedHandler.getProperty(this, 'readOnly', false);
    }
    get required() {
        return exports.awaitedHandler.getProperty(this, 'required', false);
    }
    get rows() {
        return exports.awaitedHandler.getProperty(this, 'rows', false);
    }
    get selectionDirection() {
        return exports.awaitedHandler.getProperty(this, 'selectionDirection', true);
    }
    get selectionEnd() {
        return exports.awaitedHandler.getProperty(this, 'selectionEnd', true);
    }
    get selectionStart() {
        return exports.awaitedHandler.getProperty(this, 'selectionStart', true);
    }
    get textLength() {
        return exports.awaitedHandler.getProperty(this, 'textLength', false);
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
    get wrap() {
        return exports.awaitedHandler.getProperty(this, 'wrap', false);
    }
    // methods
    checkValidity() {
        return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
    }
    reportValidity() {
        return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
    }
    select() {
        return exports.awaitedHandler.runMethod(this, 'select', []);
    }
    setCustomValidity(error) {
        return exports.awaitedHandler.runMethod(this, 'setCustomValidity', [error]);
    }
    setRangeText(replacement, start, end, selectionMode) {
        return exports.awaitedHandler.runMethod(this, 'setRangeText', [replacement, start, end, selectionMode]);
    }
    setSelectionRange(start, end, direction) {
        return exports.awaitedHandler.runMethod(this, 'setSelectionRange', [start, end, direction]);
    }
}
exports.default = HTMLTextAreaElementIsolate;
exports.HTMLTextAreaElementIsolatePropertyKeys = ['autocomplete', 'autofocus', 'cols', 'defaultValue', 'disabled', 'form', 'inputMode', 'labels', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'rows', 'selectionDirection', 'selectionEnd', 'selectionStart', 'textLength', 'type', 'validationMessage', 'validity', 'value', 'willValidate', 'wrap'];
exports.HTMLTextAreaElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLTextAreaElementIsolate.js.map