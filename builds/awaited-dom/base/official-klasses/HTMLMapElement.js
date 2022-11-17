"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMapElementConstantKeys = exports.HTMLMapElementPropertyKeys = exports.HTMLMapElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMapElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLMapElementGenerator(HTMLElement) {
    return class HTMLMapElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLMapElement',
            });
        }
        // properties
        get areas() {
            throw new Error('HTMLMapElement.areas getter not implemented');
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLMapElementPropertyKeys, exports.HTMLMapElementConstantKeys);
        }
    };
}
exports.HTMLMapElementGenerator = HTMLMapElementGenerator;
exports.HTMLMapElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'areas', 'name'];
exports.HTMLMapElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLMapElement.js.map