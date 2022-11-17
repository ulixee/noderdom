"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyConstantKeys = exports.BodyPropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Body', exports.getState, exports.setState);
class Body {
    get bodyUsed() {
        return exports.awaitedHandler.getProperty(this, 'bodyUsed', false);
    }
    // methods
    arrayBuffer() {
        return exports.awaitedHandler.runMethod(this, 'arrayBuffer', []);
    }
    json() {
        return exports.awaitedHandler.runMethod(this, 'json', []);
    }
    text() {
        return exports.awaitedHandler.runMethod(this, 'text', []);
    }
}
exports.default = Body;
exports.BodyPropertyKeys = ['bodyUsed'];
exports.BodyConstantKeys = [];
//# sourceMappingURL=Body.js.map