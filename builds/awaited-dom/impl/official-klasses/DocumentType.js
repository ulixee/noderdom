"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DocumentType_1 = require("../../base/official-klasses/DocumentType");
const Node_1 = __importDefault(require("./Node"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const DocumentTypeBaseClass = (0, DocumentType_1.DocumentTypeGenerator)(Node_1.default);
class DocumentType extends DocumentTypeBaseClass {
    constructor() {
        super();
    }
}
exports.default = DocumentType;
//# sourceMappingURL=DocumentType.js.map