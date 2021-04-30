"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCanvasElementConstantKeys = exports.HTMLCanvasElementPropertyKeys = exports.HTMLCanvasElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCanvasElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLCanvasElementGenerator(HTMLElement) {
    return class HTMLCanvasElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLCanvasElementConstantKeys, exports.HTMLCanvasElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLCanvasElement',
            });
        }
        // properties
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        // methods
        captureStream(frameRequestRate) {
            throw new Error('HTMLCanvasElement.captureStream not implemented');
        }
        toDataURL(type, quality) {
            return exports.awaitedHandler.runMethod(this, 'toDataURL', [type, quality]);
        }
        transferControlToOffscreen() {
            throw new Error('HTMLCanvasElement.transferControlToOffscreen not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLCanvasElementGenerator = HTMLCanvasElementGenerator;
exports.HTMLCanvasElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'height', 'width'];
exports.HTMLCanvasElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLCanvasElement.js.map