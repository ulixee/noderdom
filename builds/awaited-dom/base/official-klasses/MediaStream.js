"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStreamConstantKeys = exports.MediaStreamPropertyKeys = exports.MediaStreamGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('MediaStream', exports.getState, exports.setState);
function MediaStreamGenerator() {
    return class MediaStream {
        constructor(_stream) {
        }
        // properties
        get active() {
            return exports.awaitedHandler.getProperty(this, 'active', false);
        }
        get id() {
            return exports.awaitedHandler.getProperty(this, 'id', false);
        }
        // methods
        clone() {
            throw new Error('MediaStream.clone not implemented');
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.MediaStreamPropertyKeys, exports.MediaStreamConstantKeys);
        }
    };
}
exports.MediaStreamGenerator = MediaStreamGenerator;
exports.MediaStreamPropertyKeys = ['active', 'id'];
exports.MediaStreamConstantKeys = [];
//# sourceMappingURL=MediaStream.js.map