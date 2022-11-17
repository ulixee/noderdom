"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const CharacterData_1 = require("../../base/official-klasses/CharacterData");
const Node_1 = __importDefault(require("./Node"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const CharacterDataBaseClass = (0, CharacterData_1.CharacterDataGenerator)(Node_1.default, NonDocumentTypeChildNode_1.default);
class CharacterData extends CharacterDataBaseClass {
    constructor() {
        super();
    }
}
exports.default = CharacterData;
//# sourceMappingURL=CharacterData.js.map