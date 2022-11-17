"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLVideoElementConstantKeys = exports.HTMLVideoElementPropertyKeys = exports.HTMLVideoElementGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLMediaElement_1 = require("./HTMLMediaElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLVideoElement', exports.getState, exports.setState);
function HTMLVideoElementGenerator(HTMLMediaElement) {
    return class HTMLVideoElement extends HTMLMediaElement {
        constructor() {
            super();
        }
        // properties
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get poster() {
            return exports.awaitedHandler.getProperty(this, 'poster', false);
        }
        get videoHeight() {
            return exports.awaitedHandler.getProperty(this, 'videoHeight', false);
        }
        get videoWidth() {
            return exports.awaitedHandler.getProperty(this, 'videoWidth', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        // methods
        getVideoPlaybackQuality() {
            throw new Error('HTMLVideoElement.getVideoPlaybackQuality not implemented');
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLVideoElementPropertyKeys, exports.HTMLVideoElementConstantKeys);
        }
    };
}
exports.HTMLVideoElementGenerator = HTMLVideoElementGenerator;
exports.HTMLVideoElementPropertyKeys = [...HTMLMediaElement_1.HTMLMediaElementPropertyKeys, 'height', 'poster', 'videoHeight', 'videoWidth', 'width'];
exports.HTMLVideoElementConstantKeys = [...HTMLMediaElement_1.HTMLMediaElementConstantKeys];
//# sourceMappingURL=HTMLVideoElement.js.map