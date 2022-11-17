"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLOListElementIsolateConstantKeys = exports.HTMLOListElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOListElementIsolate', exports.getState, exports.setState);
class HTMLOListElementIsolate {
    get compact() {
        return exports.awaitedHandler.getProperty(this, 'compact', false);
    }
    get reversed() {
        return exports.awaitedHandler.getProperty(this, 'reversed', false);
    }
    get start() {
        return exports.awaitedHandler.getProperty(this, 'start', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
}
exports.default = HTMLOListElementIsolate;
exports.HTMLOListElementIsolatePropertyKeys = ['compact', 'reversed', 'start', 'type'];
exports.HTMLOListElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLOListElementIsolate.js.map