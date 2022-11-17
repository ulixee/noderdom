"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const File_1 = require("../../base/official-klasses/File");
const Blob_1 = __importDefault(require("./Blob"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const FileBaseClass = (0, File_1.FileGenerator)(Blob_1.default);
class File extends FileBaseClass {
    constructor(_fileBits, _fileName, _options) {
        super(_fileBits, _fileName, _options);
    }
}
exports.default = File;
//# sourceMappingURL=File.js.map