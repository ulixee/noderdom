"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBodyElementConstantKeys = exports.HTMLBodyElementPropertyKeys = exports.HTMLBodyElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLBodyElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLBodyElementGenerator(HTMLElement) {
    return class HTMLBodyElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLBodyElementConstantKeys, exports.HTMLBodyElementPropertyKeys);
            exports.setState(this, {
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
    };
}
exports.HTMLBodyElementGenerator = HTMLBodyElementGenerator;
exports.HTMLBodyElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'aLink', 'background', 'bgColor', 'link', 'text', 'vLink'];
exports.HTMLBodyElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLBodyElement.js.map