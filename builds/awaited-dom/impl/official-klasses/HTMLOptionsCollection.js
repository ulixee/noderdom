"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLOptionsCollection_1 = require("../../base/official-klasses/HTMLOptionsCollection");
const HTMLCollection_1 = __importDefault(require("./HTMLCollection"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLOptionsCollectionBaseClass = HTMLOptionsCollection_1.HTMLOptionsCollectionGenerator(HTMLCollection_1.default);
class HTMLOptionsCollection extends HTMLOptionsCollectionBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLOptionsCollection;
//# sourceMappingURL=HTMLOptionsCollection.js.map