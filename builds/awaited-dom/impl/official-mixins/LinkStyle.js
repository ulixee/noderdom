"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const LinkStyle_1 = __importDefault(require("../../base/official-mixins/LinkStyle"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class LinkStyle extends LinkStyle_1.default {
    get sheet() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperStyleSheet(awaitedPath.addProperty(this, 'sheet'), awaitedOptions);
    }
}
exports.default = LinkStyle;
//# sourceMappingURL=LinkStyle.js.map