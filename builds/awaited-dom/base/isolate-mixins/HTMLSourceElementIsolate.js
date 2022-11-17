"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceElementIsolateConstantKeys = exports.HTMLSourceElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSourceElementIsolate', exports.getState, exports.setState);
class HTMLSourceElementIsolate {
    get media() {
        return exports.awaitedHandler.getProperty(this, 'media', false);
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
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLSourceElementIsolate;
exports.HTMLSourceElementIsolatePropertyKeys = ['media', 'sizes', 'src', 'srcset', 'type'];
exports.HTMLSourceElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLSourceElementIsolate.js.map