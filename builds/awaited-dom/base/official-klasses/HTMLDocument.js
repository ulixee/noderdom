"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDocumentConstantKeys = exports.HTMLDocumentPropertyKeys = exports.HTMLDocumentGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Document_1 = require("./Document");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLDocument', exports.getState, exports.setState);
function HTMLDocumentGenerator(Document) {
    return class HTMLDocument extends Document {
        constructor() {
            super();
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLDocumentPropertyKeys, exports.HTMLDocumentConstantKeys);
        }
    };
}
exports.HTMLDocumentGenerator = HTMLDocumentGenerator;
exports.HTMLDocumentPropertyKeys = [...Document_1.DocumentPropertyKeys];
exports.HTMLDocumentConstantKeys = [...Document_1.DocumentConstantKeys];
//# sourceMappingURL=HTMLDocument.js.map