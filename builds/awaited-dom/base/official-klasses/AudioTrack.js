"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioTrackConstantKeys = exports.AudioTrackPropertyKeys = exports.AudioTrackGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('AudioTrack', exports.getState, exports.setState);
function AudioTrackGenerator() {
    return class AudioTrack {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.AudioTrackConstantKeys, exports.AudioTrackPropertyKeys);
        }
        // properties
        get enabled() {
            return exports.awaitedHandler.getProperty(this, 'enabled', false);
        }
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
    };
}
exports.AudioTrackGenerator = AudioTrackGenerator;
exports.AudioTrackPropertyKeys = ['enabled', 'id', 'kind', 'label', 'language'];
exports.AudioTrackConstantKeys = [];
//# sourceMappingURL=AudioTrack.js.map