"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperCharacterData_1 = require("../../base/super-klasses/SuperCharacterData");
const CharacterDataIsolate_1 = __importDefault(require("../isolate-mixins/CharacterDataIsolate"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const TextIsolate_1 = __importDefault(require("../isolate-mixins/TextIsolate"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperCharacterDataBaseClass = SuperCharacterData_1.SuperCharacterDataGenerator(CharacterDataIsolate_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default, TextIsolate_1.default);
class SuperCharacterData extends SuperCharacterDataBaseClass {
    constructor() {
        super();
    }
}
exports.default = SuperCharacterData;
//# sourceMappingURL=SuperCharacterData.js.map