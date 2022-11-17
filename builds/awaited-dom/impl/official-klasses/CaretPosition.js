"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CaretPosition_1 = require("../../base/official-klasses/CaretPosition");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const CaretPositionBaseClass = (0, CaretPosition_1.CaretPositionGenerator)();
class CaretPosition extends CaretPositionBaseClass {
    get offsetNode() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'offsetNode'), awaitedOptions);
    }
    // methods
    getClientRect() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMRect)(awaitedPath.addMethod(this, 'getClientRect'), awaitedOptions);
    }
}
exports.default = CaretPosition;
//# sourceMappingURL=CaretPosition.js.map