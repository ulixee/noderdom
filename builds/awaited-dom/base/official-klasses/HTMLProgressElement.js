"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLProgressElementConstantKeys = exports.HTMLProgressElementPropertyKeys = exports.HTMLProgressElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLProgressElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLProgressElementGenerator(HTMLElement) {
    return class HTMLProgressElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLProgressElement',
            });
        }
        // properties
        get labels() {
            throw new Error('HTMLProgressElement.labels getter not implemented');
        }
        get max() {
            return exports.awaitedHandler.getProperty(this, 'max', false);
        }
        get position() {
            return exports.awaitedHandler.getProperty(this, 'position', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLProgressElementPropertyKeys, exports.HTMLProgressElementConstantKeys);
        }
    };
}
exports.HTMLProgressElementGenerator = HTMLProgressElementGenerator;
exports.HTMLProgressElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'labels', 'max', 'position', 'value'];
exports.HTMLProgressElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLProgressElement.js.map