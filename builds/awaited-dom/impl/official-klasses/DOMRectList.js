"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DOMRectList_1 = require("../../base/official-klasses/DOMRectList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const DOMRectListBaseClass = DOMRectList_1.DOMRectListGenerator();
class DOMRectList extends DOMRectListBaseClass {
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMRect(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
    }
}
exports.default = DOMRectList;
//# sourceMappingURL=DOMRectList.js.map