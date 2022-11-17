"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentOrShadowRootConstantKeys = exports.DocumentOrShadowRootPropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentOrShadowRoot', exports.getState, exports.setState);
class DocumentOrShadowRoot {
    get activeElement() {
        throw new Error('DocumentOrShadowRoot.activeElement getter not implemented');
    }
    get fullscreenElement() {
        throw new Error('DocumentOrShadowRoot.fullscreenElement getter not implemented');
    }
    get pointerLockElement() {
        throw new Error('DocumentOrShadowRoot.pointerLockElement getter not implemented');
    }
    // methods
    caretPositionFromPoint(x, y) {
        throw new Error('DocumentOrShadowRoot.caretPositionFromPoint not implemented');
    }
    elementFromPoint(x, y) {
        throw new Error('DocumentOrShadowRoot.elementFromPoint not implemented');
    }
    getSelection() {
        throw new Error('DocumentOrShadowRoot.getSelection not implemented');
    }
}
exports.default = DocumentOrShadowRoot;
exports.DocumentOrShadowRootPropertyKeys = ['activeElement', 'fullscreenElement', 'pointerLockElement'];
exports.DocumentOrShadowRootConstantKeys = [];
//# sourceMappingURL=DocumentOrShadowRoot.js.map