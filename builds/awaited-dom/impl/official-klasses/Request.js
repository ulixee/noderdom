"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Request_1 = require("../../base/official-klasses/Request");
const create_1 = require("../create");
const Body_1 = __importDefault(require("../official-mixins/Body"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const RequestBaseClass = Request_1.RequestGenerator(Body_1.default);
class Request extends RequestBaseClass {
    constructor(_input, _init) {
        super(_input, _init);
    }
    // properties
    get headers() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHeaders(awaitedPath.addProperty('headers'), awaitedOptions);
    }
}
exports.default = Request;
//# sourceMappingURL=Request.js.map