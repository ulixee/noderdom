"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeConstantKeys = exports.RangePropertyKeys = exports.RangeGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AbstractRange_1 = require("./AbstractRange");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Range', exports.getState, exports.setState);
function RangeGenerator(AbstractRange) {
    var _a;
    return _a = class Range extends AbstractRange {
            constructor() {
                super();
                this.END_TO_END = 2;
                this.END_TO_START = 3;
                this.START_TO_END = 1;
                this.START_TO_START = 0;
            }
            // properties
            get commonAncestorContainer() {
                throw new Error('Range.commonAncestorContainer getter not implemented');
            }
            // methods
            cloneContents() {
                throw new Error('Range.cloneContents not implemented');
            }
            cloneRange() {
                throw new Error('Range.cloneRange not implemented');
            }
            collapse(toStart) {
                return exports.awaitedHandler.runMethod(this, 'collapse', [toStart]);
            }
            compareBoundaryPoints(how, sourceRange) {
                return exports.awaitedHandler.runMethod(this, 'compareBoundaryPoints', [how, sourceRange]);
            }
            comparePoint(node, offset) {
                return exports.awaitedHandler.runMethod(this, 'comparePoint', [node, offset]);
            }
            createContextualFragment(fragment) {
                throw new Error('Range.createContextualFragment not implemented');
            }
            deleteContents() {
                return exports.awaitedHandler.runMethod(this, 'deleteContents', []);
            }
            detach() {
                return exports.awaitedHandler.runMethod(this, 'detach', []);
            }
            extractContents() {
                throw new Error('Range.extractContents not implemented');
            }
            getBoundingClientRect() {
                throw new Error('Range.getBoundingClientRect not implemented');
            }
            getClientRects() {
                throw new Error('Range.getClientRects not implemented');
            }
            insertNode(node) {
                return exports.awaitedHandler.runMethod(this, 'insertNode', [node]);
            }
            intersectsNode(node) {
                return exports.awaitedHandler.runMethod(this, 'intersectsNode', [node]);
            }
            isPointInRange(node, offset) {
                return exports.awaitedHandler.runMethod(this, 'isPointInRange', [node, offset]);
            }
            selectNode(node) {
                return exports.awaitedHandler.runMethod(this, 'selectNode', [node]);
            }
            selectNodeContents(node) {
                return exports.awaitedHandler.runMethod(this, 'selectNodeContents', [node]);
            }
            setEnd(node, offset) {
                return exports.awaitedHandler.runMethod(this, 'setEnd', [node, offset]);
            }
            setEndAfter(node) {
                return exports.awaitedHandler.runMethod(this, 'setEndAfter', [node]);
            }
            setEndBefore(node) {
                return exports.awaitedHandler.runMethod(this, 'setEndBefore', [node]);
            }
            setStart(node, offset) {
                return exports.awaitedHandler.runMethod(this, 'setStart', [node, offset]);
            }
            setStartAfter(node) {
                return exports.awaitedHandler.runMethod(this, 'setStartAfter', [node]);
            }
            setStartBefore(node) {
                return exports.awaitedHandler.runMethod(this, 'setStartBefore', [node]);
            }
            surroundContents(newParent) {
                return exports.awaitedHandler.runMethod(this, 'surroundContents', [newParent]);
            }
            toString() {
                return exports.awaitedHandler.runMethod(this, 'toString', []);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.RangePropertyKeys, exports.RangeConstantKeys);
            }
        },
        _a.END_TO_END = 2,
        _a.END_TO_START = 3,
        _a.START_TO_END = 1,
        _a.START_TO_START = 0,
        _a;
}
exports.RangeGenerator = RangeGenerator;
exports.RangePropertyKeys = [...AbstractRange_1.AbstractRangePropertyKeys, 'commonAncestorContainer'];
exports.RangeConstantKeys = [...AbstractRange_1.AbstractRangeConstantKeys, 'END_TO_END', 'END_TO_START', 'START_TO_END', 'START_TO_START'];
//# sourceMappingURL=Range.js.map