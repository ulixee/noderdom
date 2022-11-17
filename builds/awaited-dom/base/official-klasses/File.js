"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileConstantKeys = exports.FilePropertyKeys = exports.FileGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Blob_1 = require("./Blob");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('File', exports.getState, exports.setState);
function FileGenerator(Blob) {
    return class File extends Blob {
        constructor(_fileBits, _fileName, _options) {
            super(_fileBits, _fileName, _options);
        }
        // properties
        get lastModified() {
            return exports.awaitedHandler.getProperty(this, 'lastModified', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.FilePropertyKeys, exports.FileConstantKeys);
        }
    };
}
exports.FileGenerator = FileGenerator;
exports.FilePropertyKeys = [...Blob_1.BlobPropertyKeys, 'lastModified', 'name'];
exports.FileConstantKeys = [...Blob_1.BlobConstantKeys];
//# sourceMappingURL=File.js.map