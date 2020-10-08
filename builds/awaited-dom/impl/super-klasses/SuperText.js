"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperText_1 = require("../../base/super-klasses/SuperText");
const CharacterDataIsolate_1 = __importDefault(require("../isolate-mixins/CharacterDataIsolate"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const SuperTextBaseClass = SuperText_1.SuperTextGenerator(CharacterDataIsolate_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default);
class SuperText extends SuperTextBaseClass {
    constructor(_data) {
        super(_data);
    }
}
exports.default = SuperText;
//# sourceMappingURL=SuperText.js.map