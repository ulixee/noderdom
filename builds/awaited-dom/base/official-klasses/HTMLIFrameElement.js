"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLIFrameElementConstantKeys = exports.HTMLIFrameElementPropertyKeys = exports.HTMLIFrameElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLIFrameElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLIFrameElementGenerator(HTMLElement) {
    return class HTMLIFrameElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLIFrameElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get allow() {
            return exports.awaitedHandler.getProperty(this, 'allow', false);
        }
        get allowFullscreen() {
            return exports.awaitedHandler.getProperty(this, 'allowFullscreen', false);
        }
        get allowPaymentRequest() {
            return exports.awaitedHandler.getProperty(this, 'allowPaymentRequest', false);
        }
        get contentDocument() {
            throw new Error('HTMLIFrameElement.contentDocument getter not implemented');
        }
        get csp() {
            return exports.awaitedHandler.getProperty(this, 'csp', false);
        }
        get featurePolicy() {
            throw new Error('HTMLIFrameElement.featurePolicy getter not implemented');
        }
        get frameBorder() {
            return exports.awaitedHandler.getProperty(this, 'frameBorder', false);
        }
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
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
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get sandbox() {
            throw new Error('HTMLIFrameElement.sandbox getter not implemented');
        }
        get scrolling() {
            return exports.awaitedHandler.getProperty(this, 'scrolling', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
        }
        get srcdoc() {
            return exports.awaitedHandler.getProperty(this, 'srcdoc', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLIFrameElementPropertyKeys, exports.HTMLIFrameElementConstantKeys);
        }
    };
}
exports.HTMLIFrameElementGenerator = HTMLIFrameElementGenerator;
exports.HTMLIFrameElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'allow', 'allowFullscreen', 'allowPaymentRequest', 'contentDocument', 'csp', 'featurePolicy', 'frameBorder', 'height', 'longDesc', 'marginHeight', 'marginWidth', 'name', 'referrerPolicy', 'sandbox', 'scrolling', 'src', 'srcdoc', 'width'];
exports.HTMLIFrameElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLIFrameElement.js.map