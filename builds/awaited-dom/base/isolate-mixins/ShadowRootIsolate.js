"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowRootIsolateConstantKeys = exports.ShadowRootIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('ShadowRootIsolate', exports.getState, exports.setState);
class ShadowRootIsolate {
    get delegatesFocus() {
        return exports.awaitedHandler.getProperty(this, 'delegatesFocus', false);
    }
    get host() {
        throw new Error('ShadowRootIsolate.host getter not implemented');
    }
    get innerHTML() {
        return exports.awaitedHandler.getProperty(this, 'innerHTML', false);
    }
    get mode() {
        return exports.awaitedHandler.getProperty(this, 'mode', false);
    }
}
exports.default = ShadowRootIsolate;
exports.ShadowRootIsolatePropertyKeys = ['delegatesFocus', 'host', 'innerHTML', 'mode'];
exports.ShadowRootIsolateConstantKeys = [];
//# sourceMappingURL=ShadowRootIsolate.js.map