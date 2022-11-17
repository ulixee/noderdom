"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLinkElementConstantKeys = exports.HTMLLinkElementPropertyKeys = exports.HTMLLinkElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
const LinkStyle_1 = require("../official-mixins/LinkStyle");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLinkElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLLinkElementGenerator(HTMLElement, LinkStyle) {
    const Parent = (0, ClassMixer_1.default)(HTMLElement, [LinkStyle]);
    return class HTMLLinkElement extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLLinkElement',
            });
        }
        // properties
        get as() {
            return exports.awaitedHandler.getProperty(this, 'as', false);
        }
        get crossOrigin() {
            return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
        }
        get href() {
            return exports.awaitedHandler.getProperty(this, 'href', false);
        }
        get hreflang() {
            return exports.awaitedHandler.getProperty(this, 'hreflang', false);
        }
        get media() {
            return exports.awaitedHandler.getProperty(this, 'media', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get rel() {
            return exports.awaitedHandler.getProperty(this, 'rel', false);
        }
        get relList() {
            throw new Error('HTMLLinkElement.relList getter not implemented');
        }
        get sizes() {
            throw new Error('HTMLLinkElement.sizes getter not implemented');
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLLinkElementPropertyKeys, exports.HTMLLinkElementConstantKeys);
        }
    };
}
exports.HTMLLinkElementGenerator = HTMLLinkElementGenerator;
exports.HTMLLinkElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, ...LinkStyle_1.LinkStylePropertyKeys, 'as', 'crossOrigin', 'href', 'hreflang', 'media', 'referrerPolicy', 'rel', 'relList', 'sizes', 'type'];
exports.HTMLLinkElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, ...LinkStyle_1.LinkStyleConstantKeys];
//# sourceMappingURL=HTMLLinkElement.js.map