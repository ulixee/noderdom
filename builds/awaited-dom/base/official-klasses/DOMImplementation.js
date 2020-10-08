"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMImplementation', exports.getState, exports.setState);
function DOMImplementationGenerator() {
    return class DOMImplementation {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.DOMImplementationConstantKeys, exports.DOMImplementationPropertyKeys);
        }
        // methods
        hasFeature() {
            return exports.awaitedHandler.runMethod(this, 'hasFeature', []);
        }
    };
}
exports.DOMImplementationGenerator = DOMImplementationGenerator;
exports.DOMImplementationPropertyKeys = [];
exports.DOMImplementationConstantKeys = [];
//# sourceMappingURL=DOMImplementation.js.map