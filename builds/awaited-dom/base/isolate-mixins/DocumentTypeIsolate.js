"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentTypeIsolateConstantKeys = exports.DocumentTypeIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentTypeIsolate', exports.getState, exports.setState);
class DocumentTypeIsolate {
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get publicId() {
        return exports.awaitedHandler.getProperty(this, 'publicId', false);
    }
    get systemId() {
        return exports.awaitedHandler.getProperty(this, 'systemId', false);
    }
}
exports.default = DocumentTypeIsolate;
exports.DocumentTypeIsolatePropertyKeys = ['name', 'publicId', 'systemId'];
exports.DocumentTypeIsolateConstantKeys = [];
//# sourceMappingURL=DocumentTypeIsolate.js.map