"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOptionElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLOptionElementGenerator(HTMLElement) {
    return class HTMLOptionElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLOptionElementConstantKeys, exports.HTMLOptionElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLOptionElement',
            });
        }
        // properties
        get defaultSelected() {
            return exports.awaitedHandler.getProperty(this, 'defaultSelected', false);
        }
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get form() {
            throw new Error('HTMLOptionElement.form getter not implemented');
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
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLOptionElementGenerator = HTMLOptionElementGenerator;
exports.HTMLOptionElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'defaultSelected', 'disabled', 'form', 'index', 'label', 'selected', 'text', 'value'];
exports.HTMLOptionElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLOptionElement.js.map