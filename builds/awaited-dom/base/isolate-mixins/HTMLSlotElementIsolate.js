"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSlotElementIsolateConstantKeys = exports.HTMLSlotElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSlotElementIsolate', exports.getState, exports.setState);
class HTMLSlotElementIsolate {
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    // methods
    assignedElements(options) {
        return exports.awaitedHandler.runMethod(this, 'assignedElements', [options]);
    }
    assignedNodes(options) {
        return exports.awaitedHandler.runMethod(this, 'assignedNodes', [options]);
    }
}
exports.default = HTMLSlotElementIsolate;
exports.HTMLSlotElementIsolatePropertyKeys = ['name'];
exports.HTMLSlotElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLSlotElementIsolate.js.map