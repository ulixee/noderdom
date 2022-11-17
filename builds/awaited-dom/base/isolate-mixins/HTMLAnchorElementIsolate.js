"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAnchorElementIsolateConstantKeys = exports.HTMLAnchorElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLAnchorElementIsolate', exports.getState, exports.setState);
class HTMLAnchorElementIsolate {
    get download() {
        return exports.awaitedHandler.getProperty(this, 'download', false);
    }
    get hreflang() {
        return exports.awaitedHandler.getProperty(this, 'hreflang', false);
    }
    get referrerPolicy() {
        return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
    }
    get rel() {
        return exports.awaitedHandler.getProperty(this, 'rel', false);
    }
    get relList() {
        throw new Error('HTMLAnchorElementIsolate.relList getter not implemented');
    }
    get target() {
        return exports.awaitedHandler.getProperty(this, 'target', false);
    }
    get text() {
        return exports.awaitedHandler.getProperty(this, 'text', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLAnchorElementIsolate;
exports.HTMLAnchorElementIsolatePropertyKeys = ['download', 'hreflang', 'referrerPolicy', 'rel', 'relList', 'target', 'text', 'type'];
exports.HTMLAnchorElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLAnchorElementIsolate.js.map