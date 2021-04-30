"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLEmbedElementConstantKeys = exports.HTMLEmbedElementPropertyKeys = exports.HTMLEmbedElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLEmbedElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLEmbedElementGenerator(HTMLElement) {
    return class HTMLEmbedElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLEmbedElementConstantKeys, exports.HTMLEmbedElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLEmbedElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLEmbedElementGenerator = HTMLEmbedElementGenerator;
exports.HTMLEmbedElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'height', 'name', 'src', 'type', 'width'];
exports.HTMLEmbedElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLEmbedElement.js.map