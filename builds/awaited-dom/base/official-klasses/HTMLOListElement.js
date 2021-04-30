"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLOListElementConstantKeys = exports.HTMLOListElementPropertyKeys = exports.HTMLOListElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOListElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLOListElementGenerator(HTMLElement) {
    return class HTMLOListElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLOListElementConstantKeys, exports.HTMLOListElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLOListElement',
            });
        }
        // properties
        get compact() {
            return exports.awaitedHandler.getProperty(this, 'compact', false);
        }
        get reversed() {
            return exports.awaitedHandler.getProperty(this, 'reversed', false);
        }
        get start() {
            return exports.awaitedHandler.getProperty(this, 'start', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLOListElementGenerator = HTMLOListElementGenerator;
exports.HTMLOListElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'compact', 'reversed', 'start', 'type'];
exports.HTMLOListElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLOListElement.js.map