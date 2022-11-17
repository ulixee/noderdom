"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionConstantKeys = exports.SelectionPropertyKeys = exports.SelectionGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Selection', exports.getState, exports.setState);
function SelectionGenerator() {
    return class Selection {
        constructor() {
        }
        // properties
        get anchorNode() {
            throw new Error('Selection.anchorNode getter not implemented');
        }
        get anchorOffset() {
            return exports.awaitedHandler.getProperty(this, 'anchorOffset', false);
        }
        get focusNode() {
            throw new Error('Selection.focusNode getter not implemented');
        }
        get focusOffset() {
            return exports.awaitedHandler.getProperty(this, 'focusOffset', false);
        }
        get isCollapsed() {
            return exports.awaitedHandler.getProperty(this, 'isCollapsed', false);
        }
        get rangeCount() {
            return exports.awaitedHandler.getProperty(this, 'rangeCount', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        // methods
        addRange(range) {
            return exports.awaitedHandler.runMethod(this, 'addRange', [range]);
        }
        collapse(node, offset) {
            return exports.awaitedHandler.runMethod(this, 'collapse', [node, offset]);
        }
        collapseToEnd() {
            return exports.awaitedHandler.runMethod(this, 'collapseToEnd', []);
        }
        collapseToStart() {
            return exports.awaitedHandler.runMethod(this, 'collapseToStart', []);
        }
        containsNode(node, allowPartialContainment) {
            return exports.awaitedHandler.runMethod(this, 'containsNode', [node, allowPartialContainment]);
        }
        deleteFromDocument() {
            return exports.awaitedHandler.runMethod(this, 'deleteFromDocument', []);
        }
        empty() {
            return exports.awaitedHandler.runMethod(this, 'empty', []);
        }
        extend(node, offset) {
            return exports.awaitedHandler.runMethod(this, 'extend', [node, offset]);
        }
        getRangeAt(index) {
            throw new Error('Selection.getRangeAt not implemented');
        }
        modify(alter, direction, granularity) {
            return exports.awaitedHandler.runMethod(this, 'modify', [alter, direction, granularity]);
        }
        removeAllRanges() {
            return exports.awaitedHandler.runMethod(this, 'removeAllRanges', []);
        }
        removeRange(range) {
            return exports.awaitedHandler.runMethod(this, 'removeRange', [range]);
        }
        selectAllChildren(node) {
            return exports.awaitedHandler.runMethod(this, 'selectAllChildren', [node]);
        }
        setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) {
            return exports.awaitedHandler.runMethod(this, 'setBaseAndExtent', [anchorNode, anchorOffset, focusNode, focusOffset]);
        }
        setPosition(node, offset) {
            return exports.awaitedHandler.runMethod(this, 'setPosition', [node, offset]);
        }
        toString() {
            return exports.awaitedHandler.runMethod(this, 'toString', []);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.SelectionPropertyKeys, exports.SelectionConstantKeys);
        }
    };
}
exports.SelectionGenerator = SelectionGenerator;
exports.SelectionPropertyKeys = ['anchorNode', 'anchorOffset', 'focusNode', 'focusOffset', 'isCollapsed', 'rangeCount', 'type'];
exports.SelectionConstantKeys = [];
//# sourceMappingURL=Selection.js.map