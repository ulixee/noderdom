"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoPlaybackQualityConstantKeys = exports.VideoPlaybackQualityPropertyKeys = exports.VideoPlaybackQualityGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('VideoPlaybackQuality', exports.getState, exports.setState);
function VideoPlaybackQualityGenerator() {
    return class VideoPlaybackQuality {
        constructor() {
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.VideoPlaybackQualityPropertyKeys, exports.VideoPlaybackQualityConstantKeys);
        }
    };
}
exports.VideoPlaybackQualityGenerator = VideoPlaybackQualityGenerator;
exports.VideoPlaybackQualityPropertyKeys = [];
exports.VideoPlaybackQualityConstantKeys = [];
//# sourceMappingURL=VideoPlaybackQuality.js.map