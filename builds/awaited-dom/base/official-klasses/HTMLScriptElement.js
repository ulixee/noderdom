"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLScriptElementConstantKeys = exports.HTMLScriptElementPropertyKeys = exports.HTMLScriptElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLScriptElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLScriptElementGenerator(HTMLElement) {
    return class HTMLScriptElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLScriptElement',
            });
        }
        // properties
        get async() {
            return exports.awaitedHandler.getProperty(this, 'async', false);
        }
        get charset() {
            return exports.awaitedHandler.getProperty(this, 'charset', false);
        }
        get crossOrigin() {
            return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
        }
        get defer() {
            return exports.awaitedHandler.getProperty(this, 'defer', false);
        }
        get event() {
            return exports.awaitedHandler.getProperty(this, 'event', false);
        }
        get noModule() {
            return exports.awaitedHandler.getProperty(this, 'noModule', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
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
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLScriptElementPropertyKeys, exports.HTMLScriptElementConstantKeys);
        }
    };
}
exports.HTMLScriptElementGenerator = HTMLScriptElementGenerator;
exports.HTMLScriptElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'async', 'charset', 'crossOrigin', 'defer', 'event', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];
exports.HTMLScriptElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLScriptElement.js.map