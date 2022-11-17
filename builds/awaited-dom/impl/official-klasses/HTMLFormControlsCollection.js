"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLFormControlsCollection_1 = require("../../base/official-klasses/HTMLFormControlsCollection");
const HTMLCollectionBase_1 = __importDefault(require("./HTMLCollectionBase"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLFormControlsCollectionBaseClass = (0, HTMLFormControlsCollection_1.HTMLFormControlsCollectionGenerator)(HTMLCollectionBase_1.default);
class HTMLFormControlsCollection extends HTMLFormControlsCollectionBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLFormControlsCollection;
//# sourceMappingURL=HTMLFormControlsCollection.js.map