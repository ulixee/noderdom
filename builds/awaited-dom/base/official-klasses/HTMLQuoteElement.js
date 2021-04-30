"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLQuoteElementConstantKeys = exports.HTMLQuoteElementPropertyKeys = exports.HTMLQuoteElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLQuoteElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLQuoteElementGenerator(HTMLElement) {
    return class HTMLQuoteElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLQuoteElementConstantKeys, exports.HTMLQuoteElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLQuoteElement',
            });
        }
        // properties
        get cite() {
            return exports.awaitedHandler.getProperty(this, 'cite', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLQuoteElementGenerator = HTMLQuoteElementGenerator;
exports.HTMLQuoteElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'cite'];
exports.HTMLQuoteElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLQuoteElement.js.map