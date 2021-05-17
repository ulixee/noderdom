"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const MediaStream_1 = require("../../base/official-klasses/MediaStream");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const MediaStreamBaseClass = MediaStream_1.MediaStreamGenerator();
class MediaStream extends MediaStreamBaseClass {
    clone() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createMediaStream(awaitedPath.addMethod(this, 'clone'), awaitedOptions);
    }
}
exports.default = MediaStream;
//# sourceMappingURL=MediaStream.js.map