"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeList_1 = require("./NodeList");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('RadioNodeList', exports.getState, exports.setState);
function RadioNodeListGenerator(NodeList) {
    return class RadioNodeList extends NodeList {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.RadioNodeListConstantKeys, exports.RadioNodeListPropertyKeys);
        }
        // properties
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
    };
}
exports.RadioNodeListGenerator = RadioNodeListGenerator;
exports.RadioNodeListPropertyKeys = [...NodeList_1.NodeListPropertyKeys, 'value'];
exports.RadioNodeListConstantKeys = [...NodeList_1.NodeListConstantKeys];
//# sourceMappingURL=RadioNodeList.js.map