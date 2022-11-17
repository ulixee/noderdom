"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDialogElementConstantKeys = exports.HTMLDialogElementPropertyKeys = exports.HTMLDialogElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDialogElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLDialogElementGenerator(HTMLElement) {
    return class HTMLDialogElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLDialogElement',
            });
        }
        // properties
        get open() {
            return exports.awaitedHandler.getProperty(this, 'open', false);
        }
        get returnValue() {
            return exports.awaitedHandler.getProperty(this, 'returnValue', false);
        }
        // methods
        close(returnValue) {
            return exports.awaitedHandler.runMethod(this, 'close', [returnValue]);
        }
        show() {
            return exports.awaitedHandler.runMethod(this, 'show', []);
        }
        showModal() {
            return exports.awaitedHandler.runMethod(this, 'showModal', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLDialogElementPropertyKeys, exports.HTMLDialogElementConstantKeys);
        }
    };
}
exports.HTMLDialogElementGenerator = HTMLDialogElementGenerator;
exports.HTMLDialogElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'open', 'returnValue'];
exports.HTMLDialogElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLDialogElement.js.map