"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextConstantKeys = exports.TextPropertyKeys = exports.TextGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const CharacterData_1 = require("./CharacterData");
const Slotable_1 = require("../official-mixins/Slotable");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Text', exports.getState, exports.setState);
function TextGenerator(CharacterData, Slotable) {
    const Parent = (0, ClassMixer_1.default)(CharacterData, [Slotable]);
    return class Text extends Parent {
        constructor(_data) {
            super(_data);
        }
        // properties
        get wholeText() {
            return exports.awaitedHandler.getProperty(this, 'wholeText', false);
        }
        // methods
        splitText(offset) {
            return exports.awaitedHandler.runMethod(this, 'splitText', [offset]);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.TextPropertyKeys, exports.TextConstantKeys);
        }
    };
}
exports.TextGenerator = TextGenerator;
exports.TextPropertyKeys = [...CharacterData_1.CharacterDataPropertyKeys, ...Slotable_1.SlotablePropertyKeys, 'wholeText'];
exports.TextConstantKeys = [...CharacterData_1.CharacterDataConstantKeys, ...Slotable_1.SlotableConstantKeys];
//# sourceMappingURL=Text.js.map