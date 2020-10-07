"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Response_1 = require("../../base/official-klasses/Response");
const create_1 = require("../create");
const Body_1 = __importDefault(require("../official-mixins/Body"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const ResponseBaseClass = Response_1.ResponseGenerator(Body_1.default);
class Response extends ResponseBaseClass {
    constructor(_body, _init) {
        super(_body, _init);
    }
    // properties
    get headers() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHeaders(awaitedPath.addProperty('headers'), awaitedOptions);
    }
}
exports.default = Response;
//# sourceMappingURL=Response.js.map