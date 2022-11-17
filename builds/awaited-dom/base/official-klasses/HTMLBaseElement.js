"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBaseElementConstantKeys = exports.HTMLBaseElementPropertyKeys = exports.HTMLBaseElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLBaseElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLBaseElementGenerator(HTMLElement) {
    return class HTMLBaseElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLBaseElement',
            });
        }
        // properties
        get href() {
            return exports.awaitedHandler.getProperty(this, 'href', false);
        }
        get target() {
            return exports.awaitedHandler.getProperty(this, 'target', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLBaseElementPropertyKeys, exports.HTMLBaseElementConstantKeys);
        }
    };
}
exports.HTMLBaseElementGenerator = HTMLBaseElementGenerator;
exports.HTMLBaseElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'href', 'target'];
exports.HTMLBaseElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLBaseElement.js.map