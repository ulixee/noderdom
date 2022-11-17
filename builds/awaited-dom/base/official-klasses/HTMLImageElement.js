"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLImageElementConstantKeys = exports.HTMLImageElementPropertyKeys = exports.HTMLImageElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLImageElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLImageElementGenerator(HTMLElement) {
    return class HTMLImageElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLImageElement',
            });
        }
        // properties
        get alt() {
            return exports.awaitedHandler.getProperty(this, 'alt', false);
        }
        get complete() {
            return exports.awaitedHandler.getProperty(this, 'complete', false);
        }
        get crossOrigin() {
            return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
        }
        get currentSrc() {
            return exports.awaitedHandler.getProperty(this, 'currentSrc', false);
        }
        get decoding() {
            return exports.awaitedHandler.getProperty(this, 'decoding', false);
        }
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get isMap() {
            return exports.awaitedHandler.getProperty(this, 'isMap', false);
        }
        get naturalHeight() {
            return exports.awaitedHandler.getProperty(this, 'naturalHeight', false);
        }
        get naturalWidth() {
            return exports.awaitedHandler.getProperty(this, 'naturalWidth', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
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
        get useMap() {
            return exports.awaitedHandler.getProperty(this, 'useMap', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        get x() {
            return exports.awaitedHandler.getProperty(this, 'x', false);
        }
        get y() {
            return exports.awaitedHandler.getProperty(this, 'y', false);
        }
        // methods
        decode() {
            return exports.awaitedHandler.runMethod(this, 'decode', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLImageElementPropertyKeys, exports.HTMLImageElementConstantKeys);
        }
    };
}
exports.HTMLImageElementGenerator = HTMLImageElementGenerator;
exports.HTMLImageElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'alt', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'isMap', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'width', 'x', 'y'];
exports.HTMLImageElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLImageElement.js.map