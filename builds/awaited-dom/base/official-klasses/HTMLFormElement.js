"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFormElementConstantKeys = exports.HTMLFormElementPropertyKeys = exports.HTMLFormElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFormElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFormElementGenerator(HTMLElement) {
    return class HTMLFormElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLFormElement',
            });
        }
        // properties
        get acceptCharset() {
            return exports.awaitedHandler.getProperty(this, 'acceptCharset', false);
        }
        get action() {
            return exports.awaitedHandler.getProperty(this, 'action', false);
        }
        get autocomplete() {
            return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
        }
        get encoding() {
            return exports.awaitedHandler.getProperty(this, 'encoding', false);
        }
        get enctype() {
            return exports.awaitedHandler.getProperty(this, 'enctype', false);
        }
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get noValidate() {
            return exports.awaitedHandler.getProperty(this, 'noValidate', false);
        }
        get target() {
            return exports.awaitedHandler.getProperty(this, 'target', false);
        }
        // methods
        checkValidity() {
            return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
        }
        reportValidity() {
            return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
        }
        reset() {
            return exports.awaitedHandler.runMethod(this, 'reset', []);
        }
        submit() {
            return exports.awaitedHandler.runMethod(this, 'submit', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLFormElementPropertyKeys, exports.HTMLFormElementConstantKeys);
        }
    };
}
exports.HTMLFormElementGenerator = HTMLFormElementGenerator;
exports.HTMLFormElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'acceptCharset', 'action', 'autocomplete', 'encoding', 'enctype', 'length', 'name', 'noValidate', 'target'];
exports.HTMLFormElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFormElement.js.map