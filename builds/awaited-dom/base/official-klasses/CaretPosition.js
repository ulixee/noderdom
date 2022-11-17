"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaretPositionConstantKeys = exports.CaretPositionPropertyKeys = exports.CaretPositionGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('CaretPosition', exports.getState, exports.setState);
function CaretPositionGenerator() {
    return class CaretPosition {
        constructor() {
        }
        // properties
        get offset() {
            return exports.awaitedHandler.getProperty(this, 'offset', false);
        }
        get offsetNode() {
            throw new Error('CaretPosition.offsetNode getter not implemented');
        }
        // methods
        getClientRect() {
            throw new Error('CaretPosition.getClientRect not implemented');
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.CaretPositionPropertyKeys, exports.CaretPositionConstantKeys);
        }
    };
}
exports.CaretPositionGenerator = CaretPositionGenerator;
exports.CaretPositionPropertyKeys = ['offset', 'offsetNode'];
exports.CaretPositionConstantKeys = [];
//# sourceMappingURL=CaretPosition.js.map