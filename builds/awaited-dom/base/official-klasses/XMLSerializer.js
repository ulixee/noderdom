"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLSerializerConstantKeys = exports.XMLSerializerPropertyKeys = exports.XMLSerializerGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('XMLSerializer', exports.getState, exports.setState);
function XMLSerializerGenerator() {
    return class XMLSerializer {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.XMLSerializerConstantKeys, exports.XMLSerializerPropertyKeys);
        }
        // methods
        serializeToString(root) {
            return exports.awaitedHandler.runMethod(this, 'serializeToString', [root]);
        }
    };
}
exports.XMLSerializerGenerator = XMLSerializerGenerator;
exports.XMLSerializerPropertyKeys = [];
exports.XMLSerializerConstantKeys = [];
//# sourceMappingURL=XMLSerializer.js.map