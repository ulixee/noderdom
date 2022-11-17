"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLScriptElementIsolateConstantKeys = exports.HTMLScriptElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLScriptElementIsolate', exports.getState, exports.setState);
class HTMLScriptElementIsolate {
    get async() {
        return exports.awaitedHandler.getProperty(this, 'async', false);
    }
    get charset() {
        return exports.awaitedHandler.getProperty(this, 'charset', false);
    }
    get crossOrigin() {
        return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
    }
    get defer() {
        return exports.awaitedHandler.getProperty(this, 'defer', false);
    }
    get event() {
        return exports.awaitedHandler.getProperty(this, 'event', false);
    }
    get noModule() {
        return exports.awaitedHandler.getProperty(this, 'noModule', false);
    }
    get referrerPolicy() {
        return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
    }
    get src() {
        return exports.awaitedHandler.getProperty(this, 'src', false);
    }
    get text() {
        return exports.awaitedHandler.getProperty(this, 'text', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLScriptElementIsolate;
exports.HTMLScriptElementIsolatePropertyKeys = ['async', 'charset', 'crossOrigin', 'defer', 'event', 'noModule', 'referrerPolicy', 'src', 'text', 'type'];
exports.HTMLScriptElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLScriptElementIsolate.js.map