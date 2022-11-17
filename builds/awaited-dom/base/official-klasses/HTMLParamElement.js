"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLParamElementConstantKeys = exports.HTMLParamElementPropertyKeys = exports.HTMLParamElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLParamElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLParamElementGenerator(HTMLElement) {
    return class HTMLParamElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLParamElement',
            });
        }
        // properties
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        get valueType() {
            return exports.awaitedHandler.getProperty(this, 'valueType', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLParamElementPropertyKeys, exports.HTMLParamElementConstantKeys);
        }
    };
}
exports.HTMLParamElementGenerator = HTMLParamElementGenerator;
exports.HTMLParamElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'name', 'type', 'value', 'valueType'];
exports.HTMLParamElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLParamElement.js.map