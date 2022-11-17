"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoTrackConstantKeys = exports.VideoTrackPropertyKeys = exports.VideoTrackGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('VideoTrack', exports.getState, exports.setState);
function VideoTrackGenerator() {
    return class VideoTrack {
        constructor() {
        }
        // properties
        get id() {
            return exports.awaitedHandler.getProperty(this, 'id', false);
        }
        get kind() {
            return exports.awaitedHandler.getProperty(this, 'kind', false);
        }
        get label() {
            return exports.awaitedHandler.getProperty(this, 'label', false);
        }
        get language() {
            return exports.awaitedHandler.getProperty(this, 'language', false);
        }
        get selected() {
            return exports.awaitedHandler.getProperty(this, 'selected', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.VideoTrackPropertyKeys, exports.VideoTrackConstantKeys);
        }
    };
}
exports.VideoTrackGenerator = VideoTrackGenerator;
exports.VideoTrackPropertyKeys = ['id', 'kind', 'label', 'language', 'selected'];
exports.VideoTrackConstantKeys = [];
//# sourceMappingURL=VideoTrack.js.map