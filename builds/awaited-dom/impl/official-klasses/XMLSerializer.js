"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const XMLSerializer_1 = require("../../base/official-klasses/XMLSerializer");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const XMLSerializerBaseClass = (0, XMLSerializer_1.XMLSerializerGenerator)();
class XMLSerializer extends XMLSerializerBaseClass {
}
exports.default = XMLSerializer;
//# sourceMappingURL=XMLSerializer.js.map