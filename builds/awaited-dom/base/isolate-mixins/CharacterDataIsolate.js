"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDataIsolateConstantKeys = exports.CharacterDataIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('CharacterDataIsolate', exports.getState, exports.setState);
class CharacterDataIsolate {
    get data() {
        return exports.awaitedHandler.getProperty(this, 'data', false);
    }
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    // methods
    substringData(offset, count) {
        return exports.awaitedHandler.runMethod(this, 'substringData', [offset, count]);
    }
}
exports.default = CharacterDataIsolate;
exports.CharacterDataIsolatePropertyKeys = ['data', 'length'];
exports.CharacterDataIsolateConstantKeys = [];
//# sourceMappingURL=CharacterDataIsolate.js.map