"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBodyElementConstantKeys = exports.HTMLBodyElementPropertyKeys = exports.HTMLBodyElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLBodyElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLBodyElementGenerator(HTMLElement) {
    return class HTMLBodyElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLBodyElement',
            });
        }
        // properties
        get aLink() {
            return exports.awaitedHandler.getProperty(this, 'aLink', false);
        }
        get background() {
            return exports.awaitedHandler.getProperty(this, 'background', false);
        }
        get bgColor() {
            return exports.awaitedHandler.getProperty(this, 'bgColor', false);
        }
        get link() {
            return exports.awaitedHandler.getProperty(this, 'link', false);
        }
        get text() {
            return exports.awaitedHandler.getProperty(this, 'text', false);
        }
        get vLink() {
            return exports.awaitedHandler.getProperty(this, 'vLink', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLBodyElementPropertyKeys, exports.HTMLBodyElementConstantKeys);
        }
    };
}
exports.HTMLBodyElementGenerator = HTMLBodyElementGenerator;
exports.HTMLBodyElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];
exports.HTMLBodyElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLBodyElement.js.map