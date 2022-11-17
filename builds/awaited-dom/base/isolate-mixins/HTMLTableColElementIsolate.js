"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableColElementIsolateConstantKeys = exports.HTMLTableColElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableColElementIsolate', exports.getState, exports.setState);
class HTMLTableColElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
    get ch() {
        return exports.awaitedHandler.getProperty(this, 'ch', false);
    }
    get chOff() {
        return exports.awaitedHandler.getProperty(this, 'chOff', false);
    }
    get span() {
        return exports.awaitedHandler.getProperty(this, 'span', false);
    }
    get vAlign() {
        return exports.awaitedHandler.getProperty(this, 'vAlign', false);
    }
    get width() {
        return exports.awaitedHandler.getProperty(this, 'width', false);
    }
}
exports.default = HTMLTableColElementIsolate;
exports.HTMLTableColElementIsolatePropertyKeys = ['align', 'ch', 'chOff', 'span', 'vAlign', 'width'];
exports.HTMLTableColElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLTableColElementIsolate.js.map