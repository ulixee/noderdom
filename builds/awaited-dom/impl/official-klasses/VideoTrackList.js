"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const VideoTrackList_1 = require("../../base/official-klasses/VideoTrackList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const VideoTrackListBaseClass = (0, VideoTrackList_1.VideoTrackListGenerator)();
class VideoTrackList extends VideoTrackListBaseClass {
    getTrackById(id) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createVideoTrack)(awaitedPath.addMethod(this, 'getTrackById', id), awaitedOptions);
    }
}
exports.default = VideoTrackList;
//# sourceMappingURL=VideoTrackList.js.map