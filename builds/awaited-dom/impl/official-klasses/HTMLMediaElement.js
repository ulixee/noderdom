"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLMediaElement_1 = require("../../base/official-klasses/HTMLMediaElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLMediaElementBaseClass = (0, HTMLMediaElement_1.HTMLMediaElementGenerator)(HTMLElement_1.default);
class HTMLMediaElement extends HTMLMediaElementBaseClass {
    constructor() {
        super();
    }
    // properties
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
exports.default = HTMLMediaElement;
//# sourceMappingURL=HTMLMediaElement.js.map