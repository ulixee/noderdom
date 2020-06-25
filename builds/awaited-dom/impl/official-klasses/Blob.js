"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Blob_1 = require("../../base/official-klasses/Blob");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const BlobBaseClass = Blob_1.BlobGenerator();
class Blob extends BlobBaseClass {
}
exports.default = Blob;
//# sourceMappingURL=Blob.js.map