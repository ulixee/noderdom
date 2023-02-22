"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMediaElementConstantKeys = exports.HTMLMediaElementPropertyKeys = exports.HTMLMediaElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMediaElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLMediaElementGenerator(HTMLElement) {
    var _a;
    return _a = class HTMLMediaElement extends HTMLElement {
            constructor() {
                super();
                this.HAVE_CURRENT_DATA = 2;
                this.HAVE_ENOUGH_DATA = 4;
                this.HAVE_FUTURE_DATA = 3;
                this.HAVE_METADATA = 1;
                this.HAVE_NOTHING = 0;
                this.NETWORK_EMPTY = 0;
                this.NETWORK_IDLE = 1;
                this.NETWORK_LOADING = 2;
                this.NETWORK_NO_SOURCE = 3;
                (0, exports.setState)(this, {
                    createInstanceName: 'createHTMLMediaElement',
                });
            }
            // properties
            get audioTracks() {
                throw new Error('HTMLMediaElement.audioTracks getter not implemented');
            }
            get autoplay() {
                return exports.awaitedHandler.getProperty(this, 'autoplay', false);
            }
            get buffered() {
                throw new Error('HTMLMediaElement.buffered getter not implemented');
            }
            get controls() {
                return exports.awaitedHandler.getProperty(this, 'controls', false);
            }
            get controlsList() {
                throw new Error('HTMLMediaElement.controlsList getter not implemented');
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
                throw new Error('HTMLMediaElement.error getter not implemented');
            }
            get loop() {
                return exports.awaitedHandler.getProperty(this, 'loop', false);
            }
            get mediaKeys() {
                throw new Error('HTMLMediaElement.mediaKeys getter not implemented');
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
                throw new Error('HTMLMediaElement.played getter not implemented');
            }
            get preload() {
                return exports.awaitedHandler.getProperty(this, 'preload', false);
            }
            get readyState() {
                return exports.awaitedHandler.getProperty(this, 'readyState', false);
            }
            get seekable() {
                throw new Error('HTMLMediaElement.seekable getter not implemented');
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
                throw new Error('HTMLMediaElement.textTracks getter not implemented');
            }
            get videoTracks() {
                throw new Error('HTMLMediaElement.videoTracks getter not implemented');
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
            then(onfulfilled, onrejected) {
                return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.HTMLMediaElementPropertyKeys, exports.HTMLMediaElementConstantKeys);
            }
        },
        _a.HAVE_CURRENT_DATA = 2,
        _a.HAVE_ENOUGH_DATA = 4,
        _a.HAVE_FUTURE_DATA = 3,
        _a.HAVE_METADATA = 1,
        _a.HAVE_NOTHING = 0,
        _a.NETWORK_EMPTY = 0,
        _a.NETWORK_IDLE = 1,
        _a.NETWORK_LOADING = 2,
        _a.NETWORK_NO_SOURCE = 3,
        _a;
}
exports.HTMLMediaElementGenerator = HTMLMediaElementGenerator;
exports.HTMLMediaElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'audioTracks', 'autoplay', 'buffered', 'controls', 'controlsList', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'disableRemotePlayback', 'duration', 'ended', 'error', 'loop', 'mediaKeys', 'muted', 'networkState', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'sinkId', 'src', 'textTracks', 'videoTracks', 'volume'];
exports.HTMLMediaElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, 'HAVE_CURRENT_DATA', 'HAVE_ENOUGH_DATA', 'HAVE_FUTURE_DATA', 'HAVE_METADATA', 'HAVE_NOTHING', 'NETWORK_EMPTY', 'NETWORK_IDLE', 'NETWORK_LOADING', 'NETWORK_NO_SOURCE'];
//# sourceMappingURL=HTMLMediaElement.js.map