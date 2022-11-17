"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRangeConstantKeys = exports.AbstractRangePropertyKeys = exports.AbstractRangeGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('AbstractRange', exports.getState, exports.setState);
function AbstractRangeGenerator() {
    return class AbstractRange {
        constructor() {
        }
        // properties
        get collapsed() {
            return exports.awaitedHandler.getProperty(this, 'collapsed', false);
        }
        get endContainer() {
            throw new Error('AbstractRange.endContainer getter not implemented');
        }
        get endOffset() {
            return exports.awaitedHandler.getProperty(this, 'endOffset', false);
        }
        get startContainer() {
            throw new Error('AbstractRange.startContainer getter not implemented');
        }
        get startOffset() {
            return exports.awaitedHandler.getProperty(this, 'startOffset', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.AbstractRangePropertyKeys, exports.AbstractRangeConstantKeys);
        }
    };
}
exports.AbstractRangeGenerator = AbstractRangeGenerator;
exports.AbstractRangePropertyKeys = ['collapsed', 'endContainer', 'endOffset', 'startContainer', 'startOffset'];
exports.AbstractRangeConstantKeys = [];
//# sourceMappingURL=AbstractRange.js.map