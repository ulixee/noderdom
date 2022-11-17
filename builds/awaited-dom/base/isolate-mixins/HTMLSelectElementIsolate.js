"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSelectElementIsolateConstantKeys = exports.HTMLSelectElementIsolatePropertyKeys = exports.awaitedIterator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSelectElementIsolate', exports.getState, exports.setState);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
class HTMLSelectElementIsolate {
    get autocomplete() {
        return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
    }
    get autofocus() {
        return exports.awaitedHandler.getProperty(this, 'autofocus', false);
    }
    get disabled() {
        return exports.awaitedHandler.getProperty(this, 'disabled', false);
    }
    get form() {
        throw new Error('HTMLSelectElementIsolate.form getter not implemented');
    }
    get labels() {
        throw new Error('HTMLSelectElementIsolate.labels getter not implemented');
    }
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    get multiple() {
        return exports.awaitedHandler.getProperty(this, 'multiple', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get options() {
        throw new Error('HTMLSelectElementIsolate.options getter not implemented');
    }
    get required() {
        return exports.awaitedHandler.getProperty(this, 'required', false);
    }
    get selectedIndex() {
        return exports.awaitedHandler.getProperty(this, 'selectedIndex', false);
    }
    get selectedOptions() {
        throw new Error('HTMLSelectElementIsolate.selectedOptions getter not implemented');
    }
    get size() {
        return exports.awaitedHandler.getProperty(this, 'size', false);
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
    item(index) {
        throw new Error('HTMLSelectElementIsolate.item not implemented');
    }
    namedItem(name) {
        throw new Error('HTMLSelectElementIsolate.namedItem not implemented');
    }
    reportValidity() {
        return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
    }
    [Symbol.iterator]() {
        return exports.awaitedIterator.iterateNodePointers(this);
    }
}
exports.default = HTMLSelectElementIsolate;
exports.HTMLSelectElementIsolatePropertyKeys = ['autocomplete', 'autofocus', 'disabled', 'form', 'labels', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
exports.HTMLSelectElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLSelectElementIsolate.js.map