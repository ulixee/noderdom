"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTemplateElementConstantKeys = exports.HTMLTemplateElementPropertyKeys = exports.HTMLTemplateElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTemplateElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTemplateElementGenerator(HTMLElement) {
    return class HTMLTemplateElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLTemplateElementConstantKeys, exports.HTMLTemplateElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLTemplateElement',
            });
        }
        // properties
        get content() {
            throw new Error('HTMLTemplateElement.content getter not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLTemplateElementGenerator = HTMLTemplateElementGenerator;
exports.HTMLTemplateElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'content'];
exports.HTMLTemplateElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLTemplateElement.js.map