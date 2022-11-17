"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLVideoElementIsolateConstantKeys = exports.HTMLVideoElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLVideoElementIsolate', exports.getState, exports.setState);
class HTMLVideoElementIsolate {
    get height() {
        return exports.awaitedHandler.getProperty(this, 'height', false);
    }
    get poster() {
        return exports.awaitedHandler.getProperty(this, 'poster', false);
    }
    get videoHeight() {
        return exports.awaitedHandler.getProperty(this, 'videoHeight', false);
    }
    get videoWidth() {
        return exports.awaitedHandler.getProperty(this, 'videoWidth', false);
    }
    get width() {
        return exports.awaitedHandler.getProperty(this, 'width', false);
    }
    // methods
    getVideoPlaybackQuality() {
        throw new Error('HTMLVideoElementIsolate.getVideoPlaybackQuality not implemented');
    }
}
exports.default = HTMLVideoElementIsolate;
exports.HTMLVideoElementIsolatePropertyKeys = ['height', 'poster', 'videoHeight', 'videoWidth', 'width'];
exports.HTMLVideoElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLVideoElementIsolate.js.map