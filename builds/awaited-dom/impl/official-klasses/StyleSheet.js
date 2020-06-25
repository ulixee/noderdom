"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const StyleSheet_1 = require("../../base/official-klasses/StyleSheet");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const StyleSheetBaseClass = StyleSheet_1.StyleSheetGenerator();
class StyleSheet extends StyleSheetBaseClass {
}
exports.default = StyleSheet;
//# sourceMappingURL=StyleSheet.js.map