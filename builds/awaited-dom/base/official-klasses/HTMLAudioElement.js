"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLAudioElementConstantKeys = exports.HTMLAudioElementPropertyKeys = exports.HTMLAudioElementGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLMediaElement_1 = require("./HTMLMediaElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLAudioElement', exports.getState, exports.setState);
function HTMLAudioElementGenerator(HTMLMediaElement) {
    return class HTMLAudioElement extends HTMLMediaElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLAudioElementConstantKeys, exports.HTMLAudioElementPropertyKeys);
        }
    };
}
exports.HTMLAudioElementGenerator = HTMLAudioElementGenerator;
exports.HTMLAudioElementPropertyKeys = [...HTMLMediaElement_1.HTMLMediaElementPropertyKeys];
exports.HTMLAudioElementConstantKeys = [...HTMLMediaElement_1.HTMLMediaElementConstantKeys];
//# sourceMappingURL=HTMLAudioElement.js.map