"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDialogElementIsolateConstantKeys = exports.HTMLDialogElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDialogElementIsolate', exports.getState, exports.setState);
class HTMLDialogElementIsolate {
    get open() {
        return exports.awaitedHandler.getProperty(this, 'open', false);
    }
    get returnValue() {
        return exports.awaitedHandler.getProperty(this, 'returnValue', false);
    }
    // methods
    close(returnValue) {
        return exports.awaitedHandler.runMethod(this, 'close', [returnValue]);
    }
    show() {
        return exports.awaitedHandler.runMethod(this, 'show', []);
    }
    showModal() {
        return exports.awaitedHandler.runMethod(this, 'showModal', []);
    }
}
exports.default = HTMLDialogElementIsolate;
exports.HTMLDialogElementIsolatePropertyKeys = ['open', 'returnValue'];
exports.HTMLDialogElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLDialogElementIsolate.js.map