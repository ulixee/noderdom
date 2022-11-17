"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const TextTrackCue_1 = require("../../base/official-klasses/TextTrackCue");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const TextTrackCueBaseClass = (0, TextTrackCue_1.TextTrackCueGenerator)();
class TextTrackCue extends TextTrackCueBaseClass {
    get track() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createTextTrack)(awaitedPath.addProperty(this, 'track'), awaitedOptions);
    }
}
exports.default = TextTrackCue;
//# sourceMappingURL=TextTrackCue.js.map