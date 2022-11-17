"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Text_1 = require("../../base/official-klasses/Text");
const CharacterData_1 = __importDefault(require("./CharacterData"));
const Slotable_1 = __importDefault(require("../official-mixins/Slotable"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const TextBaseClass = (0, Text_1.TextGenerator)(CharacterData_1.default, Slotable_1.default);
class Text extends TextBaseClass {
    constructor(_data) {
        super(_data);
    }
}
exports.default = Text;
//# sourceMappingURL=Text.js.map