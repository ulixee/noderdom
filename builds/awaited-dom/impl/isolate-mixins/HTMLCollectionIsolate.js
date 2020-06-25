"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLCollectionIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLCollectionIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLCollectionIsolate extends HTMLCollectionIsolate_1.default {
    namedItem(name) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
    }
}
exports.default = HTMLCollectionIsolate;
//# sourceMappingURL=HTMLCollectionIsolate.js.map