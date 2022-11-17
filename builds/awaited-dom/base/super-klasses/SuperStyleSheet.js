"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperStyleSheetConstantKeys = exports.SuperStyleSheetPropertyKeys = exports.SuperStyleSheetGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const CSSStyleSheetIsolate_1 = require("../isolate-mixins/CSSStyleSheetIsolate");
const StyleSheetIsolate_1 = require("../isolate-mixins/StyleSheetIsolate");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperStyleSheet', exports.getState, exports.setState);
function SuperStyleSheetGenerator(CSSStyleSheetIsolate, StyleSheetIsolate) {
    const Parent = (0, ClassMixer_1.default)(CSSStyleSheetIsolate, [StyleSheetIsolate]);
    return class SuperStyleSheet extends Parent {
        constructor() {
            super();
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.SuperStyleSheetPropertyKeys, exports.SuperStyleSheetConstantKeys);
        }
    };
}
exports.SuperStyleSheetGenerator = SuperStyleSheetGenerator;
exports.SuperStyleSheetPropertyKeys = [...CSSStyleSheetIsolate_1.CSSStyleSheetIsolatePropertyKeys, ...StyleSheetIsolate_1.StyleSheetIsolatePropertyKeys];
exports.SuperStyleSheetConstantKeys = [...CSSStyleSheetIsolate_1.CSSStyleSheetIsolateConstantKeys, ...StyleSheetIsolate_1.StyleSheetIsolateConstantKeys];
//# sourceMappingURL=SuperStyleSheet.js.map