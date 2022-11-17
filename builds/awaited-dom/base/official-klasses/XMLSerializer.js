"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLSerializerConstantKeys = exports.XMLSerializerPropertyKeys = exports.XMLSerializerGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('XMLSerializer', exports.getState, exports.setState);
function XMLSerializerGenerator() {
    return class XMLSerializer {
        constructor() {
        }
        // methods
        serializeToString(root) {
            return exports.awaitedHandler.runMethod(this, 'serializeToString', [root]);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.XMLSerializerPropertyKeys, exports.XMLSerializerConstantKeys);
        }
    };
}
exports.XMLSerializerGenerator = XMLSerializerGenerator;
exports.XMLSerializerPropertyKeys = [];
exports.XMLSerializerConstantKeys = [];
//# sourceMappingURL=XMLSerializer.js.map