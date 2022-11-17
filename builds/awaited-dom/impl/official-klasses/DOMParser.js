"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DOMParser_1 = require("../../base/official-klasses/DOMParser");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const DOMParserBaseClass = (0, DOMParser_1.DOMParserGenerator)();
class DOMParser extends DOMParserBaseClass {
    parseFromString(str, type) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperDocument)(awaitedPath.addMethod(this, 'parseFromString', str, type), awaitedOptions);
    }
}
exports.default = DOMParser;
//# sourceMappingURL=DOMParser.js.map