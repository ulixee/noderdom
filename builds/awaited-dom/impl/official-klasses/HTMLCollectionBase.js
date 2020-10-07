"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCollectionBase_1 = require("../../base/official-klasses/HTMLCollectionBase");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLCollectionBaseBaseClass = HTMLCollectionBase_1.HTMLCollectionBaseGenerator();
class HTMLCollectionBase extends HTMLCollectionBaseBaseClass {
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('item', index), awaitedOptions);
    }
}
exports.default = HTMLCollectionBase;
//# sourceMappingURL=HTMLCollectionBase.js.map