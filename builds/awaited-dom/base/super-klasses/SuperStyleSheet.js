"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperStyleSheetConstantKeys = exports.SuperStyleSheetPropertyKeys = exports.SuperStyleSheetGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const CSSStyleSheetIsolate_1 = require("../isolate-mixins/CSSStyleSheetIsolate");
const StyleSheetIsolate_1 = require("../isolate-mixins/StyleSheetIsolate");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperStyleSheet', exports.getState, exports.setState);
function SuperStyleSheetGenerator(CSSStyleSheetIsolate, StyleSheetIsolate) {
    const Parent = ClassMixer_1.default(CSSStyleSheetIsolate, [StyleSheetIsolate]);
    return class SuperStyleSheet extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperStyleSheetConstantKeys, exports.SuperStyleSheetPropertyKeys);
        }
    };
}
exports.SuperStyleSheetGenerator = SuperStyleSheetGenerator;
exports.SuperStyleSheetPropertyKeys = [...CSSStyleSheetIsolate_1.CSSStyleSheetIsolatePropertyKeys, ...StyleSheetIsolate_1.StyleSheetIsolatePropertyKeys];
exports.SuperStyleSheetConstantKeys = [...CSSStyleSheetIsolate_1.CSSStyleSheetIsolateConstantKeys, ...StyleSheetIsolate_1.StyleSheetIsolateConstantKeys];
//# sourceMappingURL=SuperStyleSheet.js.map