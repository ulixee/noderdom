"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLModElementConstantKeys = exports.HTMLModElementPropertyKeys = exports.HTMLModElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLModElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLModElementGenerator(HTMLElement) {
    return class HTMLModElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLModElement',
            });
        }
        // properties
        get cite() {
            return exports.awaitedHandler.getProperty(this, 'cite', false);
        }
        get dateTime() {
            return exports.awaitedHandler.getProperty(this, 'dateTime', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLModElementPropertyKeys, exports.HTMLModElementConstantKeys);
        }
    };
}
exports.HTMLModElementGenerator = HTMLModElementGenerator;
exports.HTMLModElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'cite', 'dateTime'];
exports.HTMLModElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLModElement.js.map