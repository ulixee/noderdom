"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRangesConstantKeys = exports.TimeRangesPropertyKeys = exports.TimeRangesGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('TimeRanges', exports.getState, exports.setState);
function TimeRangesGenerator() {
    return class TimeRanges {
        constructor() {
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        end(index) {
            return exports.awaitedHandler.runMethod(this, 'end', [index]);
        }
        start(index) {
            return exports.awaitedHandler.runMethod(this, 'start', [index]);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.TimeRangesPropertyKeys, exports.TimeRangesConstantKeys);
        }
    };
}
exports.TimeRangesGenerator = TimeRangesGenerator;
exports.TimeRangesPropertyKeys = ['length'];
exports.TimeRangesConstantKeys = [];
//# sourceMappingURL=TimeRanges.js.map