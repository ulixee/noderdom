"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlobConstantKeys = exports.BlobPropertyKeys = exports.BlobGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Blob', exports.getState, exports.setState);
function BlobGenerator() {
    return class Blob {
        constructor(_blobParts, _options) {
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
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.BlobPropertyKeys, exports.BlobConstantKeys);
        }
    };
}
exports.BlobGenerator = BlobGenerator;
exports.BlobPropertyKeys = ['size', 'type'];
exports.BlobConstantKeys = [];
//# sourceMappingURL=Blob.js.map