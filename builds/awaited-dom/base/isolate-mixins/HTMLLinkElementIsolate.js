"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLinkElementIsolateConstantKeys = exports.HTMLLinkElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLinkElementIsolate', exports.getState, exports.setState);
class HTMLLinkElementIsolate {
    get as() {
        return exports.awaitedHandler.getProperty(this, 'as', false);
    }
    get crossOrigin() {
        return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
    }
    get href() {
        return exports.awaitedHandler.getProperty(this, 'href', false);
    }
    get hreflang() {
        return exports.awaitedHandler.getProperty(this, 'hreflang', false);
    }
    get media() {
        return exports.awaitedHandler.getProperty(this, 'media', false);
    }
    get referrerPolicy() {
        return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
    }
    get rel() {
        return exports.awaitedHandler.getProperty(this, 'rel', false);
    }
    get relList() {
        throw new Error('HTMLLinkElementIsolate.relList getter not implemented');
    }
    get sizes() {
        throw new Error('HTMLLinkElementIsolate.sizes getter not implemented');
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLLinkElementIsolate;
exports.HTMLLinkElementIsolatePropertyKeys = ['as', 'crossOrigin', 'href', 'hreflang', 'media', 'referrerPolicy', 'rel', 'relList', 'sizes', 'type'];
exports.HTMLLinkElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLLinkElementIsolate.js.map