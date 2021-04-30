"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLVideoElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLVideoElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
class HTMLVideoElementIsolate extends HTMLVideoElementIsolate_1.default {
    getVideoPlaybackQuality() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createVideoPlaybackQuality(awaitedPath.addMethod(this, 'getVideoPlaybackQuality'), awaitedOptions);
    }
}
exports.default = HTMLVideoElementIsolate;
//# sourceMappingURL=HTMLVideoElementIsolate.js.map