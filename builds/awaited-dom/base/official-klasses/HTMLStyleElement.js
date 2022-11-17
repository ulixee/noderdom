"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLStyleElementConstantKeys = exports.HTMLStyleElementPropertyKeys = exports.HTMLStyleElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
const LinkStyle_1 = require("../official-mixins/LinkStyle");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLStyleElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLStyleElementGenerator(HTMLElement, LinkStyle) {
    const Parent = (0, ClassMixer_1.default)(HTMLElement, [LinkStyle]);
    return class HTMLStyleElement extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLStyleElement',
            });
        }
        // properties
        get media() {
            return exports.awaitedHandler.getProperty(this, 'media', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLStyleElementPropertyKeys, exports.HTMLStyleElementConstantKeys);
        }
    };
}
exports.HTMLStyleElementGenerator = HTMLStyleElementGenerator;
exports.HTMLStyleElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, ...LinkStyle_1.LinkStylePropertyKeys, 'media', 'type'];
exports.HTMLStyleElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, ...LinkStyle_1.LinkStyleConstantKeys];
//# sourceMappingURL=HTMLStyleElement.js.map