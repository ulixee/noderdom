"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBaseElementConstantKeys = exports.HTMLBaseElementPropertyKeys = exports.HTMLBaseElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLBaseElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLBaseElementGenerator(HTMLElement) {
    return class HTMLBaseElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLBaseElementConstantKeys, exports.HTMLBaseElementPropertyKeys);
            exports.setState(this, {
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
    };
}
exports.HTMLBaseElementGenerator = HTMLBaseElementGenerator;
exports.HTMLBaseElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'href', 'target'];
exports.HTMLBaseElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLBaseElement.js.map