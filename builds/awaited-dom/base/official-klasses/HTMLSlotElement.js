"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSlotElementConstantKeys = exports.HTMLSlotElementPropertyKeys = exports.HTMLSlotElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSlotElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLSlotElementGenerator(HTMLElement) {
    return class HTMLSlotElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLSlotElementConstantKeys, exports.HTMLSlotElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLSlotElement',
            });
        }
        // properties
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        // methods
        assignedElements(options) {
            return exports.awaitedHandler.runMethod(this, 'assignedElements', [options]);
        }
        assignedNodes(options) {
            return exports.awaitedHandler.runMethod(this, 'assignedNodes', [options]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLSlotElementGenerator = HTMLSlotElementGenerator;
exports.HTMLSlotElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'name'];
exports.HTMLSlotElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLSlotElement.js.map