"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobConstantKeys = exports.BlobPropertyKeys = exports.BlobGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('Blob', exports.getState, exports.setState);
function BlobGenerator() {
    return class Blob {
        constructor(_blobParts, _options) {
            initializeConstantsAndProperties_1.default(this, exports.BlobConstantKeys, exports.BlobPropertyKeys);
        }
        // properties
        get size() {
            return exports.awaitedHandler.getProperty(this, 'size', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        // methods
        arrayBuffer() {
            return exports.awaitedHandler.runMethod(this, 'arrayBuffer', []);
        }
        slice(start, end, contentType) {
            return exports.awaitedHandler.runMethod(this, 'slice', [start, end, contentType]);
        }
        text() {
            return exports.awaitedHandler.runMethod(this, 'text', []);
        }
    };
}
exports.BlobGenerator = BlobGenerator;
exports.BlobPropertyKeys = ['size', 'type'];
exports.BlobConstantKeys = [];
//# sourceMappingURL=Blob.js.map