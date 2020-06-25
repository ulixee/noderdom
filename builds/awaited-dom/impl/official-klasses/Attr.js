"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Attr_1 = require("../../base/official-klasses/Attr");
const create_1 = require("../create");
const Node_1 = __importDefault(require("./Node"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const AttrBaseClass = Attr_1.AttrGenerator(Node_1.default);
class Attr extends AttrBaseClass {
    constructor() {
        super();
    }
    // properties
    get ownerElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('ownerElement'), awaitedOptions);
    }
}
exports.default = Attr;
//# sourceMappingURL=Attr.js.map