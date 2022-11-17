"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLIElementConstantKeys = exports.HTMLLIElementPropertyKeys = exports.HTMLLIElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLIElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLLIElementGenerator(HTMLElement) {
    return class HTMLLIElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLLIElement',
            });
        }
        // properties
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLLIElementPropertyKeys, exports.HTMLLIElementConstantKeys);
        }
    };
}
exports.HTMLLIElementGenerator = HTMLLIElementGenerator;
exports.HTMLLIElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'type', 'value'];
exports.HTMLLIElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLLIElement.js.map