"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const AbstractRange_1 = require("../../base/official-klasses/AbstractRange");
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const AbstractRangeBaseClass = AbstractRange_1.AbstractRangeGenerator();
class AbstractRange extends AbstractRangeBaseClass {
    get endContainer() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty(this, 'endContainer'), awaitedOptions);
    }
    get startContainer() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty(this, 'startContainer'), awaitedOptions);
    }
}
exports.default = AbstractRange;
//# sourceMappingURL=AbstractRange.js.map