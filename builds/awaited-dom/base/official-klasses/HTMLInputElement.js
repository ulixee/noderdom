"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLInputElementConstantKeys = exports.HTMLInputElementPropertyKeys = exports.HTMLInputElementGenerator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLInputElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLInputElementGenerator(HTMLElement) {
    return class HTMLInputElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLInputElementConstantKeys, exports.HTMLInputElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLInputElement',
            });
        }
        // properties
        get accept() {
            return exports.awaitedHandler.getProperty(this, 'accept', false);
        }
        get alt() {
            return exports.awaitedHandler.getProperty(this, 'alt', false);
        }
        get autocomplete() {
            return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
        }
        get autofocus() {
            return exports.awaitedHandler.getProperty(this, 'autofocus', false);
        }
        get checked() {
            return exports.awaitedHandler.getProperty(this, 'checked', false);
        }
        get defaultChecked() {
            return exports.awaitedHandler.getProperty(this, 'defaultChecked', false);
        }
        get defaultValue() {
            return exports.awaitedHandler.getProperty(this, 'defaultValue', false);
        }
        get dirName() {
            return exports.awaitedHandler.getProperty(this, 'dirName', false);
        }
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get form() {
            throw new Error('HTMLInputElement.form getter not implemented');
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
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get indeterminate() {
            return exports.awaitedHandler.getProperty(this, 'indeterminate', false);
        }
        get inputMode() {
            return exports.awaitedHandler.getProperty(this, 'inputMode', false);
        }
        get labels() {
            throw new Error('HTMLInputElement.labels getter not implemented');
        }
        get list() {
            throw new Error('HTMLInputElement.list getter not implemented');
        }
        get max() {
            return exports.awaitedHandler.getProperty(this, 'max', false);
        }
        get maxLength() {
            return exports.awaitedHandler.getProperty(this, 'maxLength', false);
        }
        get min() {
            return exports.awaitedHandler.getProperty(this, 'min', false);
        }
        get minLength() {
            return exports.awaitedHandler.getProperty(this, 'minLength', false);
        }
        get multiple() {
            return exports.awaitedHandler.getProperty(this, 'multiple', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get pattern() {
            return exports.awaitedHandler.getProperty(this, 'pattern', false);
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
        get selectionDirection() {
            return exports.awaitedHandler.getProperty(this, 'selectionDirection', true);
        }
        get selectionEnd() {
            return exports.awaitedHandler.getProperty(this, 'selectionEnd', true);
        }
        get selectionStart() {
            return exports.awaitedHandler.getProperty(this, 'selectionStart', true);
        }
        get size() {
            return exports.awaitedHandler.getProperty(this, 'size', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
        }
        get step() {
            return exports.awaitedHandler.getProperty(this, 'step', false);
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
        get valueAsDate() {
            return exports.awaitedHandler.getProperty(this, 'valueAsDate', true);
        }
        get valueAsNumber() {
            return exports.awaitedHandler.getProperty(this, 'valueAsNumber', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
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
        select() {
            return exports.awaitedHandler.runMethod(this, 'select', []);
        }
        setRangeText(replacement, start, end, selectionMode) {
            return exports.awaitedHandler.runMethod(this, 'setRangeText', [replacement, start, end, selectionMode]);
        }
        setSelectionRange(start, end, direction) {
            return exports.awaitedHandler.runMethod(this, 'setSelectionRange', [start, end, direction]);
        }
        stepDown(n) {
            return exports.awaitedHandler.runMethod(this, 'stepDown', [n]);
        }
        stepUp(n) {
            return exports.awaitedHandler.runMethod(this, 'stepUp', [n]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLInputElementGenerator = HTMLInputElementGenerator;
exports.HTMLInputElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'defaultChecked', 'defaultValue', 'dirName', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'height', 'indeterminate', 'inputMode', 'labels', 'list', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'pattern', 'placeholder', 'readOnly', 'required', 'selectionDirection', 'selectionEnd', 'selectionStart', 'size', 'src', 'step', 'type', 'validationMessage', 'validity', 'value', 'valueAsDate', 'valueAsNumber', 'width', 'willValidate'];
exports.HTMLInputElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLInputElement.js.map