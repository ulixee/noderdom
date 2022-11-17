"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFieldSetElementConstantKeys = exports.HTMLFieldSetElementPropertyKeys = exports.HTMLFieldSetElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFieldSetElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFieldSetElementGenerator(HTMLElement) {
    return class HTMLFieldSetElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLFieldSetElement',
            });
        }
        // properties
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get elements() {
            throw new Error('HTMLFieldSetElement.elements getter not implemented');
        }
        get form() {
            throw new Error('HTMLFieldSetElement.form getter not implemented');
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
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLFieldSetElementPropertyKeys, exports.HTMLFieldSetElementConstantKeys);
        }
    };
}
exports.HTMLFieldSetElementGenerator = HTMLFieldSetElementGenerator;
exports.HTMLFieldSetElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'disabled', 'elements', 'form', 'name', 'type', 'validationMessage', 'validity', 'willValidate'];
exports.HTMLFieldSetElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFieldSetElement.js.map