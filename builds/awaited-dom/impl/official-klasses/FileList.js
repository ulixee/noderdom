"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const FileList_1 = require("../../base/official-klasses/FileList");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const FileListBaseClass = (0, FileList_1.FileListGenerator)();
class FileList extends FileListBaseClass {
    item(index) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createFile)(awaitedPath.addMethod(this, 'item', index), awaitedOptions);
    }
}
exports.default = FileList;
//# sourceMappingURL=FileList.js.map