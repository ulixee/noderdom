"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLParamElementIsolateConstantKeys = exports.HTMLParamElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLParamElementIsolate', exports.getState, exports.setState);
class HTMLParamElementIsolate {
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
    get valueType() {
        return exports.awaitedHandler.getProperty(this, 'valueType', false);
    }
}
exports.default = HTMLParamElementIsolate;
exports.HTMLParamElementIsolatePropertyKeys = ['name', 'type', 'value', 'valueType'];
exports.HTMLParamElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLParamElementIsolate.js.map