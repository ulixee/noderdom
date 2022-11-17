"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAnchorElementConstantKeys = exports.HTMLAnchorElementPropertyKeys = exports.HTMLAnchorElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
const HTMLHyperlinkElementUtils_1 = require("../official-mixins/HTMLHyperlinkElementUtils");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLAnchorElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLAnchorElementGenerator(HTMLElement, HTMLHyperlinkElementUtils) {
    const Parent = (0, ClassMixer_1.default)(HTMLElement, [HTMLHyperlinkElementUtils]);
    return class HTMLAnchorElement extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLAnchorElement',
            });
        }
        // properties
        get download() {
            return exports.awaitedHandler.getProperty(this, 'download', false);
        }
        get hreflang() {
            return exports.awaitedHandler.getProperty(this, 'hreflang', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get rel() {
            return exports.awaitedHandler.getProperty(this, 'rel', false);
        }
        get relList() {
            throw new Error('HTMLAnchorElement.relList getter not implemented');
        }
        get target() {
            return exports.awaitedHandler.getProperty(this, 'target', false);
        }
        get text() {
            return exports.awaitedHandler.getProperty(this, 'text', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLAnchorElementPropertyKeys, exports.HTMLAnchorElementConstantKeys);
        }
    };
}
exports.HTMLAnchorElementGenerator = HTMLAnchorElementGenerator;
exports.HTMLAnchorElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsPropertyKeys, 'download', 'hreflang', 'referrerPolicy', 'rel', 'relList', 'target', 'text', 'type'];
exports.HTMLAnchorElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsConstantKeys];
//# sourceMappingURL=HTMLAnchorElement.js.map