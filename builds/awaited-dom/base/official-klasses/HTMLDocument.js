"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDocumentConstantKeys = exports.HTMLDocumentPropertyKeys = exports.HTMLDocumentGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Document_1 = require("./Document");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDocument', exports.getState, exports.setState);
function HTMLDocumentGenerator(Document) {
    return class HTMLDocument extends Document {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLDocumentConstantKeys, exports.HTMLDocumentPropertyKeys);
        }
    };
}
exports.HTMLDocumentGenerator = HTMLDocumentGenerator;
exports.HTMLDocumentPropertyKeys = [...Document_1.DocumentPropertyKeys];
exports.HTMLDocumentConstantKeys = [...Document_1.DocumentConstantKeys];
//# sourceMappingURL=HTMLDocument.js.map