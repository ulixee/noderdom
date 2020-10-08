"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const CharacterData_1 = require("./CharacterData");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('Text', exports.getState, exports.setState);
function TextGenerator(CharacterData) {
    return class Text extends CharacterData {
        constructor(_data) {
            super(_data);
            initializeConstantsAndProperties_1.default(this, exports.TextConstantKeys, exports.TextPropertyKeys);
        }
        // properties
        get wholeText() {
            return exports.awaitedHandler.getProperty(this, 'wholeText', false);
        }
        // methods
        splitText(offset) {
            return exports.awaitedHandler.runMethod(this, 'splitText', [offset]);
        }
    };
}
exports.TextGenerator = TextGenerator;
exports.TextPropertyKeys = [...CharacterData_1.CharacterDataPropertyKeys, 'wholeText'];
exports.TextConstantKeys = [...CharacterData_1.CharacterDataConstantKeys];
//# sourceMappingURL=Text.js.map