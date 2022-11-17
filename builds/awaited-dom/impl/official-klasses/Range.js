"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const Range_1 = require("../../base/official-klasses/Range");
const create_1 = require("../create");
const AbstractRange_1 = __importDefault(require("./AbstractRange"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const RangeBaseClass = (0, Range_1.RangeGenerator)(AbstractRange_1.default);
class Range extends RangeBaseClass {
    constructor() {
        super();
    }
    // properties
    get commonAncestorContainer() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'commonAncestorContainer'), awaitedOptions);
    }
    // methods
    cloneContents() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDocumentFragment)(awaitedPath.addMethod(this, 'cloneContents'), awaitedOptions);
    }
    cloneRange() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createRange)(awaitedPath.addMethod(this, 'cloneRange'), awaitedOptions);
    }
    createContextualFragment(fragment) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDocumentFragment)(awaitedPath.addMethod(this, 'createContextualFragment', fragment), awaitedOptions);
    }
    extractContents() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDocumentFragment)(awaitedPath.addMethod(this, 'extractContents'), awaitedOptions);
    }
    getBoundingClientRect() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMRect)(awaitedPath.addMethod(this, 'getBoundingClientRect'), awaitedOptions);
    }
    getClientRects() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMRectList)(awaitedPath.addMethod(this, 'getClientRects'), awaitedOptions);
    }
}
exports.default = Range;
//# sourceMappingURL=Range.js.map