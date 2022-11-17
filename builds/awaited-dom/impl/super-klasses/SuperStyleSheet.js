"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperStyleSheet_1 = require("../../base/super-klasses/SuperStyleSheet");
const CSSStyleSheetIsolate_1 = __importDefault(require("../isolate-mixins/CSSStyleSheetIsolate"));
const StyleSheetIsolate_1 = __importDefault(require("../isolate-mixins/StyleSheetIsolate"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperStyleSheetBaseClass = (0, SuperStyleSheet_1.SuperStyleSheetGenerator)(CSSStyleSheetIsolate_1.default, StyleSheetIsolate_1.default);
class SuperStyleSheet extends SuperStyleSheetBaseClass {
    constructor() {
        super();
    }
}
exports.default = SuperStyleSheet;
//# sourceMappingURL=SuperStyleSheet.js.map