"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMediaElementIsolateConstantKeys = exports.HTMLMediaElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMediaElementIsolate', exports.getState, exports.setState);
class HTMLMediaElementIsolate {
    constructor() {
        this.HAVE_CURRENT_DATA = 2;
        this.HAVE_ENOUGH_DATA = 4;
        this.HAVE_FUTURE_DATA = 3;
        this.HAVE_METADATA = 1;
        this.HAVE_NOTHING = 0;
        this.NETWORK_EMPTY = 0;
        this.NETWORK_IDLE = 1;
        this.NETWORK_LOADING = 2;
        this.NETWORK_NO_SOURCE = 3;
    }
    // properties
    get audioTracks() {
        throw new Error('HTMLMediaElementIsolate.audioTracks getter not implemented');
    }
    get autoplay() {
        return exports.awaitedHandler.getProperty(this, 'autoplay', false);
    }
    get buffered() {
        throw new Error('HTMLMediaElementIsolate.buffered getter not implemented');
    }
    get controls() {
        return exports.awaitedHandler.getProperty(this, 'controls', false);
    }
    get controlsList() {
        throw new Error('HTMLMediaElementIsolate.controlsList getter not implemented');
    }
    get crossOrigin() {
        return exports.awaitedHandler.getProperty(this, 'crossOrigin', true);
    }
    get currentSrc() {
        return exports.awaitedHandler.getProperty(this, 'currentSrc', false);
    }
    get currentTime() {
        return exports.awaitedHandler.getProperty(this, 'currentTime', false);
    }
    get defaultMuted() {
        return exports.awaitedHandler.getProperty(this, 'defaultMuted', false);
    }
    get defaultPlaybackRate() {
        return exports.awaitedHandler.getProperty(this, 'defaultPlaybackRate', false);
    }
    get disableRemotePlayback() {
        return exports.awaitedHandler.getProperty(this, 'disableRemotePlayback', false);
    }
    get duration() {
        return exports.awaitedHandler.getProperty(this, 'duration', false);
    }
    get ended() {
        return exports.awaitedHandler.getProperty(this, 'ended', false);
    }
    get error() {
        throw new Error('HTMLMediaElementIsolate.error getter not implemented');
    }
    get loop() {
        return exports.awaitedHandler.getProperty(this, 'loop', false);
    }
    get mediaKeys() {
        throw new Error('HTMLMediaElementIsolate.mediaKeys getter not implemented');
    }
    get muted() {
        return exports.awaitedHandler.getProperty(this, 'muted', false);
    }
    get networkState() {
        return exports.awaitedHandler.getProperty(this, 'networkState', false);
    }
    get playbackRate() {
        return exports.awaitedHandler.getProperty(this, 'playbackRate', false);
    }
    get played() {
        throw new Error('HTMLMediaElementIsolate.played getter not implemented');
    }
    get preload() {
        return exports.awaitedHandler.getProperty(this, 'preload', false);
    }
    get readyState() {
        return exports.awaitedHandler.getProperty(this, 'readyState', false);
    }
    get seekable() {
        throw new Error('HTMLMediaElementIsolate.seekable getter not implemented');
    }
    get seeking() {
        return exports.awaitedHandler.getProperty(this, 'seeking', false);
    }
    get sinkId() {
        return exports.awaitedHandler.getProperty(this, 'sinkId', false);
    }
    get src() {
        return exports.awaitedHandler.getProperty(this, 'src', false);
    }
    get textTracks() {
        throw new Error('HTMLMediaElementIsolate.textTracks getter not implemented');
    }
    get videoTracks() {
        throw new Error('HTMLMediaElementIsolate.videoTracks getter not implemented');
    }
    get volume() {
        return exports.awaitedHandler.getProperty(this, 'volume', false);
    }
    // methods
    canPlayType(type) {
        return exports.awaitedHandler.runMethod(this, 'canPlayType', [type]);
    }
    load() {
        return exports.awaitedHandler.runMethod(this, 'load', []);
    }
    pause() {
        return exports.awaitedHandler.runMethod(this, 'pause', []);
    }
    play() {
        return exports.awaitedHandler.runMethod(this, 'play', []);
    }
    setSinkId(sinkId) {
        return exports.awaitedHandler.runMethod(this, 'setSinkId', [sinkId]);
    }
}
exports.default = HTMLMediaElementIsolate;
HTMLMediaElementIsolate.HAVE_CURRENT_DATA = 2;
HTMLMediaElementIsolate.HAVE_ENOUGH_DATA = 4;
HTMLMediaElementIsolate.HAVE_FUTURE_DATA = 3;
HTMLMediaElementIsolate.HAVE_METADATA = 1;
HTMLMediaElementIsolate.HAVE_NOTHING = 0;
HTMLMediaElementIsolate.NETWORK_EMPTY = 0;
HTMLMediaElementIsolate.NETWORK_IDLE = 1;
HTMLMediaElementIsolate.NETWORK_LOADING = 2;
HTMLMediaElementIsolate.NETWORK_NO_SOURCE = 3;
exports.HTMLMediaElementIsolatePropertyKeys = ['audioTracks', 'autoplay', 'buffered', 'controls', 'controlsList', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'duration', 'ended', 'error', 'loop', 'mediaKeys', 'muted', 'networkState', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'sinkId', 'src', 'textTracks', 'videoTracks', 'volume'];
exports.HTMLMediaElementIsolateConstantKeys = ['HAVE_CURRENT_DATA', 'HAVE_ENOUGH_DATA', 'HAVE_FUTURE_DATA', 'HAVE_METADATA', 'HAVE_NOTHING', 'NETWORK_EMPTY', 'NETWORK_IDLE', 'NETWORK_LOADING', 'NETWORK_NO_SOURCE'];
//# sourceMappingURL=HTMLMediaElementIsolate.js.map