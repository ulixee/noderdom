"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAreaElementConstantKeys = exports.HTMLAreaElementPropertyKeys = exports.HTMLAreaElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
const HTMLHyperlinkElementUtils_1 = require("../official-mixins/HTMLHyperlinkElementUtils");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLAreaElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLAreaElementGenerator(HTMLElement, HTMLHyperlinkElementUtils) {
    const Parent = (0, ClassMixer_1.default)(HTMLElement, [HTMLHyperlinkElementUtils]);
    return class HTMLAreaElement extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLAreaElement',
            });
        }
        // properties
        get alt() {
            return exports.awaitedHandler.getProperty(this, 'alt', false);
        }
        get coords() {
            return exports.awaitedHandler.getProperty(this, 'coords', false);
        }
        get download() {
            return exports.awaitedHandler.getProperty(this, 'download', false);
        }
        get hreflang() {
            return exports.awaitedHandler.getProperty(this, 'hreflang', false);
        }
        get noHref() {
            return exports.awaitedHandler.getProperty(this, 'noHref', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get rel() {
            return exports.awaitedHandler.getProperty(this, 'rel', false);
        }
        get relList() {
            throw new Error('HTMLAreaElement.relList getter not implemented');
        }
        get shape() {
            return exports.awaitedHandler.getProperty(this, 'shape', false);
        }
        get target() {
            return exports.awaitedHandler.getProperty(this, 'target', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLAreaElementPropertyKeys, exports.HTMLAreaElementConstantKeys);
        }
    };
}
exports.HTMLAreaElementGenerator = HTMLAreaElementGenerator;
exports.HTMLAreaElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsPropertyKeys, 'alt', 'coords', 'download', 'hreflang', 'noHref', 'referrerPolicy', 'rel', 'relList', 'shape', 'target', 'type'];
exports.HTMLAreaElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsConstantKeys];
//# sourceMappingURL=HTMLAreaElement.js.map