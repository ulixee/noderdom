"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileConstantKeys = exports.FilePropertyKeys = exports.FileGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Blob_1 = require("./Blob");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('File', exports.getState, exports.setState);
function FileGenerator(Blob) {
    return class File extends Blob {
        constructor(_fileBits, _fileName, _options) {
            super(_fileBits, _fileName, _options);
            initializeConstantsAndProperties_1.default(this, exports.FileConstantKeys, exports.FilePropertyKeys);
        }
        // properties
        get lastModified() {
            return exports.awaitedHandler.getProperty(this, 'lastModified', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
    };
}
exports.FileGenerator = FileGenerator;
exports.FilePropertyKeys = [...Blob_1.BlobPropertyKeys, 'lastModified', 'name'];
exports.FileConstantKeys = [...Blob_1.BlobConstantKeys];
//# sourceMappingURL=File.js.map