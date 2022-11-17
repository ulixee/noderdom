"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFrameSetElementConstantKeys = exports.HTMLFrameSetElementPropertyKeys = exports.HTMLFrameSetElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFrameSetElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFrameSetElementGenerator(HTMLElement) {
    return class HTMLFrameSetElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLFrameSetElement',
            });
        }
        // properties
        get cols() {
            return exports.awaitedHandler.getProperty(this, 'cols', false);
        }
        get rows() {
            return exports.awaitedHandler.getProperty(this, 'rows', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLFrameSetElementPropertyKeys, exports.HTMLFrameSetElementConstantKeys);
        }
    };
}
exports.HTMLFrameSetElementGenerator = HTMLFrameSetElementGenerator;
exports.HTMLFrameSetElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'cols', 'rows'];
exports.HTMLFrameSetElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFrameSetElement.js.map