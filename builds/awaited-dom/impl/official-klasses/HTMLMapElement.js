"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLMapElement_1 = require("../../base/official-klasses/HTMLMapElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLMapElementBaseClass = (0, HTMLMapElement_1.HTMLMapElementGenerator)(HTMLElement_1.default);
class HTMLMapElement extends HTMLMapElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get areas() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'areas'), awaitedOptions);
    }
}
exports.default = HTMLMapElement;
//# sourceMappingURL=HTMLMapElement.js.map