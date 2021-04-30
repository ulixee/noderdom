"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTrackCueConstantKeys = exports.TextTrackCuePropertyKeys = exports.TextTrackCueGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('TextTrackCue', exports.getState, exports.setState);
function TextTrackCueGenerator() {
    return class TextTrackCue {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.TextTrackCueConstantKeys, exports.TextTrackCuePropertyKeys);
        }
        // properties
        get endTime() {
            return exports.awaitedHandler.getProperty(this, 'endTime', false);
        }
        get id() {
            return exports.awaitedHandler.getProperty(this, 'id', false);
        }
        get pauseOnExit() {
            return exports.awaitedHandler.getProperty(this, 'pauseOnExit', false);
        }
        get startTime() {
            return exports.awaitedHandler.getProperty(this, 'startTime', false);
        }
        get track() {
            throw new Error('TextTrackCue.track getter not implemented');
        }
    };
}
exports.TextTrackCueGenerator = TextTrackCueGenerator;
exports.TextTrackCuePropertyKeys = ['endTime', 'id', 'pauseOnExit', 'startTime', 'track'];
exports.TextTrackCueConstantKeys = [];
//# sourceMappingURL=TextTrackCue.js.map