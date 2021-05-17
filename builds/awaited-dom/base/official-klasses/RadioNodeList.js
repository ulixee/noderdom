"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioNodeListConstantKeys = exports.RadioNodeListPropertyKeys = exports.RadioNodeListGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeList_1 = require("./NodeList");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('RadioNodeList', exports.getState, exports.setState);
function RadioNodeListGenerator(NodeList) {
    return class RadioNodeList extends NodeList {
        constructor() {
            super();
        }
        // properties
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.RadioNodeListPropertyKeys, exports.RadioNodeListConstantKeys);
        }
    };
}
exports.RadioNodeListGenerator = RadioNodeListGenerator;
exports.RadioNodeListPropertyKeys = [...NodeList_1.NodeListPropertyKeys, 'value'];
exports.RadioNodeListConstantKeys = [...NodeList_1.NodeListConstantKeys];
//# sourceMappingURL=RadioNodeList.js.map