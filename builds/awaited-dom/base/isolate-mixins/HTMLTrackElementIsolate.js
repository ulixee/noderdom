"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTrackElementIsolateConstantKeys = exports.HTMLTrackElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTrackElementIsolate', exports.getState, exports.setState);
class HTMLTrackElementIsolate {
    constructor() {
        this.ERROR = 3;
        this.LOADED = 2;
        this.LOADING = 1;
        this.NONE = 0;
    }
    // properties
    get default() {
        return exports.awaitedHandler.getProperty(this, 'default', false);
    }
    get kind() {
        return exports.awaitedHandler.getProperty(this, 'kind', false);
    }
    get label() {
        return exports.awaitedHandler.getProperty(this, 'label', false);
    }
    get readyState() {
        return exports.awaitedHandler.getProperty(this, 'readyState', false);
    }
    get src() {
        return exports.awaitedHandler.getProperty(this, 'src', false);
    }
    get srclang() {
        return exports.awaitedHandler.getProperty(this, 'srclang', false);
    }
    get track() {
        return exports.awaitedHandler.getProperty(this, 'track', false);
    }
}
exports.default = HTMLTrackElementIsolate;
HTMLTrackElementIsolate.ERROR = 3;
HTMLTrackElementIsolate.LOADED = 2;
HTMLTrackElementIsolate.LOADING = 1;
HTMLTrackElementIsolate.NONE = 0;
exports.HTMLTrackElementIsolatePropertyKeys = ['default', 'kind', 'label', 'readyState', 'src', 'srclang', 'track'];
exports.HTMLTrackElementIsolateConstantKeys = ['ERROR', 'LOADED', 'LOADING', 'NONE'];
//# sourceMappingURL=HTMLTrackElementIsolate.js.map