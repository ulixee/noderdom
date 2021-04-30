"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCanvasElement_1 = require("../../base/official-klasses/HTMLCanvasElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLCanvasElementBaseClass = HTMLCanvasElement_1.HTMLCanvasElementGenerator(HTMLElement_1.default);
class HTMLCanvasElement extends HTMLCanvasElementBaseClass {
    constructor() {
        super();
    }
    // methods
    captureStream(frameRequestRate) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createMediaStream(awaitedPath.addMethod(this, 'captureStream', frameRequestRate), awaitedOptions);
    }
    transferControlToOffscreen() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createOffscreenCanvas(awaitedPath.addMethod(this, 'transferControlToOffscreen'), awaitedOptions);
    }
}
exports.default = HTMLCanvasElement;
//# sourceMappingURL=HTMLCanvasElement.js.map