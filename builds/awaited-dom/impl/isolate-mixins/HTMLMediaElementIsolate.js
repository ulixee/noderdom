"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLMediaElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLMediaElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLMediaElementIsolate extends HTMLMediaElementIsolate_1.default {
    get audioTracks() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createAudioTrackList)(awaitedPath.addProperty(this, 'audioTracks'), awaitedOptions);
    }
    get buffered() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createTimeRanges)(awaitedPath.addProperty(this, 'buffered'), awaitedOptions);
    }
    get controlsList() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMTokenList)(awaitedPath.addProperty(this, 'controlsList'), awaitedOptions);
    }
    get error() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createMediaError)(awaitedPath.addProperty(this, 'error'), awaitedOptions);
    }
    get mediaKeys() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createMediaKeys)(awaitedPath.addProperty(this, 'mediaKeys'), awaitedOptions);
    }
    get played() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createTimeRanges)(awaitedPath.addProperty(this, 'played'), awaitedOptions);
    }
    get seekable() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createTimeRanges)(awaitedPath.addProperty(this, 'seekable'), awaitedOptions);
    }
    get textTracks() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createTextTrackList)(awaitedPath.addProperty(this, 'textTracks'), awaitedOptions);
    }
    get videoTracks() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createVideoTrackList)(awaitedPath.addProperty(this, 'videoTracks'), awaitedOptions);
    }
}
exports.default = HTMLMediaElementIsolate;
//# sourceMappingURL=HTMLMediaElementIsolate.js.map