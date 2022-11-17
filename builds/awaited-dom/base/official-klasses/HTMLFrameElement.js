"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFrameElementConstantKeys = exports.HTMLFrameElementPropertyKeys = exports.HTMLFrameElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFrameElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFrameElementGenerator(HTMLElement) {
    return class HTMLFrameElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLFrameElement',
            });
        }
        // properties
        get contentDocument() {
            throw new Error('HTMLFrameElement.contentDocument getter not implemented');
        }
        get frameBorder() {
            return exports.awaitedHandler.getProperty(this, 'frameBorder', false);
        }
        get longDesc() {
            return exports.awaitedHandler.getProperty(this, 'longDesc', false);
        }
        get marginHeight() {
            return exports.awaitedHandler.getProperty(this, 'marginHeight', false);
        }
        get marginWidth() {
            return exports.awaitedHandler.getProperty(this, 'marginWidth', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get noResize() {
            return exports.awaitedHandler.getProperty(this, 'noResize', false);
        }
        get scrolling() {
            return exports.awaitedHandler.getProperty(this, 'scrolling', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLFrameElementPropertyKeys, exports.HTMLFrameElementConstantKeys);
        }
    };
}
exports.HTMLFrameElementGenerator = HTMLFrameElementGenerator;
exports.HTMLFrameElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'contentDocument', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'noResize', 'scrolling', 'src'];
exports.HTMLFrameElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFrameElement.js.map