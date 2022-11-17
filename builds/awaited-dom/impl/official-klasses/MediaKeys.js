"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const MediaKeys_1 = require("../../base/official-klasses/MediaKeys");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const MediaKeysBaseClass = (0, MediaKeys_1.MediaKeysGenerator)();
class MediaKeys extends MediaKeysBaseClass {
}
exports.default = MediaKeys;
//# sourceMappingURL=MediaKeys.js.map