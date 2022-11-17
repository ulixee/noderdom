"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLImageElementIsolateConstantKeys = exports.HTMLImageElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLImageElementIsolate', exports.getState, exports.setState);
class HTMLImageElementIsolate {
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
}
exports.default = HTMLImageElementIsolate;
exports.HTMLImageElementIsolatePropertyKeys = ['alt', 'complete', 'crossOrigin', 'currentSrc', 'decoding', 'height', 'isMap', 'naturalHeight', 'naturalWidth', 'referrerPolicy', 'sizes', 'src', 'srcset', 'useMap', 'width', 'x', 'y'];
exports.HTMLImageElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLImageElementIsolate.js.map