"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DocumentOrShadowRoot_1 = __importDefault(require("../../base/official-mixins/DocumentOrShadowRoot"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class DocumentOrShadowRoot extends DocumentOrShadowRoot_1.default {
    get activeElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'activeElement'), awaitedOptions);
    }
    get fullscreenElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'fullscreenElement'), awaitedOptions);
    }
    get pointerLockElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'pointerLockElement'), awaitedOptions);
    }
    // methods
    caretPositionFromPoint(x, y) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createCaretPosition)(awaitedPath.addMethod(this, 'caretPositionFromPoint', x, y), awaitedOptions);
    }
    elementFromPoint(x, y) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addMethod(this, 'elementFromPoint', x, y), awaitedOptions);
    }
    getSelection() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSelection)(awaitedPath.addMethod(this, 'getSelection'), awaitedOptions);
    }
}
exports.default = DocumentOrShadowRoot;
//# sourceMappingURL=DocumentOrShadowRoot.js.map