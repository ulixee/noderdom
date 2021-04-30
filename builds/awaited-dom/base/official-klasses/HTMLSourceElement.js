"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceElementConstantKeys = exports.HTMLSourceElementPropertyKeys = exports.HTMLSourceElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSourceElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLSourceElementGenerator(HTMLElement) {
    return class HTMLSourceElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLSourceElementConstantKeys, exports.HTMLSourceElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLSourceElement',
            });
        }
        // properties
        get media() {
            return exports.awaitedHandler.getProperty(this, 'media', false);
        }
        get sizes() {
            return exports.awaitedHandler.getProperty(this, 'sizes', false);
        }
        get src() {
            return exports.awaitedHandler.getProperty(this, 'src', false);
        }
        get srcset() {
            return exports.awaitedHandler.getProperty(this, 'srcset', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLSourceElementGenerator = HTMLSourceElementGenerator;
exports.HTMLSourceElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'media', 'sizes', 'src', 'srcset', 'type'];
exports.HTMLSourceElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLSourceElement.js.map