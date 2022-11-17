"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLObjectElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLObjectElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLObjectElementIsolate extends HTMLObjectElementIsolate_1.default {
    get contentDocument() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperDocument)(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
    }
    get form() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLFormElement)(awaitedPath.addProperty(this, 'form'), awaitedOptions);
    }
}
exports.default = HTMLObjectElementIsolate;
//# sourceMappingURL=HTMLObjectElementIsolate.js.map