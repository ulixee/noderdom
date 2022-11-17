"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCollection_1 = require("../../base/official-klasses/HTMLCollection");
const create_1 = require("../create");
const HTMLCollectionBase_1 = __importDefault(require("./HTMLCollectionBase"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLCollectionBaseClass = (0, HTMLCollection_1.HTMLCollectionGenerator)(HTMLCollectionBase_1.default);
class HTMLCollection extends HTMLCollectionBaseClass {
    constructor() {
        super();
    }
    // methods
    namedItem(name) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addMethod(this, 'namedItem', name), awaitedOptions);
    }
}
exports.default = HTMLCollection;
//# sourceMappingURL=HTMLCollection.js.map