"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const AudioTrackList_1 = require("../../base/official-klasses/AudioTrackList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const AudioTrackListBaseClass = AudioTrackList_1.AudioTrackListGenerator();
class AudioTrackList extends AudioTrackListBaseClass {
    getTrackById(id) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createAudioTrack(awaitedPath.addMethod(this, 'getTrackById', id), awaitedOptions);
    }
}
exports.default = AudioTrackList;
//# sourceMappingURL=AudioTrackList.js.map