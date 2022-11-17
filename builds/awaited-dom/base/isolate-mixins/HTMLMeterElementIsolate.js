"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMeterElementIsolateConstantKeys = exports.HTMLMeterElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMeterElementIsolate', exports.getState, exports.setState);
class HTMLMeterElementIsolate {
    get high() {
        return exports.awaitedHandler.getProperty(this, 'high', false);
    }
    get labels() {
        throw new Error('HTMLMeterElementIsolate.labels getter not implemented');
    }
    get low() {
        return exports.awaitedHandler.getProperty(this, 'low', false);
    }
    get max() {
        return exports.awaitedHandler.getProperty(this, 'max', false);
    }
    get min() {
        return exports.awaitedHandler.getProperty(this, 'min', false);
    }
    get optimum() {
        return exports.awaitedHandler.getProperty(this, 'optimum', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
}
exports.default = HTMLMeterElementIsolate;
exports.HTMLMeterElementIsolatePropertyKeys = ['high', 'labels', 'low', 'max', 'min', 'optimum', 'value'];
exports.HTMLMeterElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLMeterElementIsolate.js.map