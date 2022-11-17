"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLDocument_1 = require("../../base/official-klasses/HTMLDocument");
const Document_1 = __importDefault(require("./Document"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLDocumentBaseClass = (0, HTMLDocument_1.HTMLDocumentGenerator)(Document_1.default);
class HTMLDocument extends HTMLDocumentBaseClass {
    constructor() {
        super();
    }
}
exports.default = HTMLDocument;
//# sourceMappingURL=HTMLDocument.js.map