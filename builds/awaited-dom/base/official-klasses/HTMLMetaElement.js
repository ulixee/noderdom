"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMetaElementConstantKeys = exports.HTMLMetaElementPropertyKeys = exports.HTMLMetaElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMetaElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLMetaElementGenerator(HTMLElement) {
    return class HTMLMetaElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLMetaElementConstantKeys, exports.HTMLMetaElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLMetaElement',
            });
        }
        // properties
        get content() {
            return exports.awaitedHandler.getProperty(this, 'content', false);
        }
        get httpEquiv() {
            return exports.awaitedHandler.getProperty(this, 'httpEquiv', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get scheme() {
            return exports.awaitedHandler.getProperty(this, 'scheme', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLMetaElementGenerator = HTMLMetaElementGenerator;
exports.HTMLMetaElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'content', 'httpEquiv', 'name', 'scheme'];
exports.HTMLMetaElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLMetaElement.js.map