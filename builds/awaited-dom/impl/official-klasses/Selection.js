"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Selection_1 = require("../../base/official-klasses/Selection");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const SelectionBaseClass = Selection_1.SelectionGenerator();
class Selection extends SelectionBaseClass {
    get anchorNode() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty(this, 'anchorNode'), awaitedOptions);
    }
    get focusNode() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty(this, 'focusNode'), awaitedOptions);
    }
    // methods
    getRangeAt(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createRange(awaitedPath.addMethod(this, 'getRangeAt', index), awaitedOptions);
    }
}
exports.default = Selection;
//# sourceMappingURL=Selection.js.map