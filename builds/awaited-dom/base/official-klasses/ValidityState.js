"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidityStateConstantKeys = exports.ValidityStatePropertyKeys = exports.ValidityStateGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('ValidityState', exports.getState, exports.setState);
function ValidityStateGenerator() {
    return class ValidityState {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.ValidityStateConstantKeys, exports.ValidityStatePropertyKeys);
        }
    };
}
exports.ValidityStateGenerator = ValidityStateGenerator;
exports.ValidityStatePropertyKeys = [];
exports.ValidityStateConstantKeys = [];
//# sourceMappingURL=ValidityState.js.map