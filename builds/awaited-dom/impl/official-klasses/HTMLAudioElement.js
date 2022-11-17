"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLAudioElement_1 = require("../../base/official-klasses/HTMLAudioElement");
const HTMLMediaElement_1 = __importDefault(require("./HTMLMediaElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLAudioElementBaseClass = (0, HTMLAudioElement_1.HTMLAudioElementGenerator)(HTMLMediaElement_1.default);
class HTMLAudioElement extends HTMLAudioElementBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLAudioElement;
//# sourceMappingURL=HTMLAudioElement.js.map