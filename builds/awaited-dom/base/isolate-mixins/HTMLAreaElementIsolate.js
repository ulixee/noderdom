"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAreaElementIsolateConstantKeys = exports.HTMLAreaElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLAreaElementIsolate', exports.getState, exports.setState);
class HTMLAreaElementIsolate {
    get alt() {
        return exports.awaitedHandler.getProperty(this, 'alt', false);
    }
    get coords() {
        return exports.awaitedHandler.getProperty(this, 'coords', false);
    }
    get download() {
        return exports.awaitedHandler.getProperty(this, 'download', false);
    }
    get hreflang() {
        return exports.awaitedHandler.getProperty(this, 'hreflang', false);
    }
    get noHref() {
        return exports.awaitedHandler.getProperty(this, 'noHref', false);
    }
    get referrerPolicy() {
        return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
    }
    get rel() {
        return exports.awaitedHandler.getProperty(this, 'rel', false);
    }
    get relList() {
        throw new Error('HTMLAreaElementIsolate.relList getter not implemented');
    }
    get shape() {
        return exports.awaitedHandler.getProperty(this, 'shape', false);
    }
    get target() {
        return exports.awaitedHandler.getProperty(this, 'target', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLAreaElementIsolate;
exports.HTMLAreaElementIsolatePropertyKeys = ['alt', 'coords', 'download', 'hreflang', 'noHref', 'referrerPolicy', 'rel', 'relList', 'shape', 'target', 'type'];
exports.HTMLAreaElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLAreaElementIsolate.js.map