"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLButtonElementConstantKeys = exports.HTMLButtonElementPropertyKeys = exports.HTMLButtonElementGenerator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLButtonElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLButtonElementGenerator(HTMLElement) {
    return class HTMLButtonElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLButtonElementConstantKeys, exports.HTMLButtonElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLButtonElement',
            });
        }
        // properties
        get autofocus() {
            return exports.awaitedHandler.getProperty(this, 'autofocus', false);
        }
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get form() {
            throw new Error('HTMLButtonElement.form getter not implemented');
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
            throw new Error('HTMLButtonElement.labels getter not implemented');
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
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLButtonElementGenerator = HTMLButtonElementGenerator;
exports.HTMLButtonElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'autofocus', 'disabled', 'form', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'labels', 'name', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
exports.HTMLButtonElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLButtonElement.js.map