"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const RadioNodeList_1 = require("../../base/official-klasses/RadioNodeList");
const NodeList_1 = __importDefault(require("./NodeList"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const RadioNodeListBaseClass = RadioNodeList_1.RadioNodeListGenerator(NodeList_1.default);
class RadioNodeList extends RadioNodeListBaseClass {
    constructor() {
        super();
    }
}
exports.default = RadioNodeList;
//# sourceMappingURL=RadioNodeList.js.map