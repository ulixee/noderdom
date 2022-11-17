"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMeterElementConstantKeys = exports.HTMLMeterElementPropertyKeys = exports.HTMLMeterElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMeterElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLMeterElementGenerator(HTMLElement) {
    return class HTMLMeterElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLMeterElement',
            });
        }
        // properties
        get high() {
            return exports.awaitedHandler.getProperty(this, 'high', false);
        }
        get labels() {
            throw new Error('HTMLMeterElement.labels getter not implemented');
        }
        get low() {
            return exports.awaitedHandler.getProperty(this, 'low', false);
        }
        get max() {
            return exports.awaitedHandler.getProperty(this, 'max', false);
        }
        get min() {
            return exports.awaitedHandler.getProperty(this, 'min', false);
        }
        get optimum() {
            return exports.awaitedHandler.getProperty(this, 'optimum', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLMeterElementPropertyKeys, exports.HTMLMeterElementConstantKeys);
        }
    };
}
exports.HTMLMeterElementGenerator = HTMLMeterElementGenerator;
exports.HTMLMeterElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'high', 'labels', 'low', 'max', 'min', 'optimum', 'value'];
exports.HTMLMeterElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLMeterElement.js.map