"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.XPathResultConstantKeys = exports.XPathResultPropertyKeys = exports.XPathResultGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('XPathResult', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function XPathResultGenerator() {
    var _a;
    return _a = class XPathResult {
            constructor() {
                this.ANY_TYPE = 0;
                this.ANY_UNORDERED_NODE_TYPE = 8;
                this.BOOLEAN_TYPE = 3;
                this.FIRST_ORDERED_NODE_TYPE = 9;
                this.NUMBER_TYPE = 1;
                this.ORDERED_NODE_ITERATOR_TYPE = 5;
                this.ORDERED_NODE_SNAPSHOT_TYPE = 7;
                this.STRING_TYPE = 2;
                this.UNORDERED_NODE_ITERATOR_TYPE = 4;
                this.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
                (0, exports.setState)(this, {
                    createInstanceName: 'createXPathResult',
                });
            }
            // properties
            get booleanValue() {
                return exports.awaitedHandler.getProperty(this, 'booleanValue', false);
            }
            get invalidIteratorState() {
                return exports.awaitedHandler.getProperty(this, 'invalidIteratorState', false);
            }
            get numberValue() {
                return exports.awaitedHandler.getProperty(this, 'numberValue', false);
            }
            get resultType() {
                return exports.awaitedHandler.getProperty(this, 'resultType', false);
            }
            get singleNodeValue() {
                throw new Error('XPathResult.singleNodeValue getter not implemented');
            }
            get snapshotLength() {
                return exports.awaitedHandler.getProperty(this, 'snapshotLength', false);
            }
            get stringValue() {
                return exports.awaitedHandler.getProperty(this, 'stringValue', false);
            }
            // methods
            iterateNext() {
                throw new Error('XPathResult.iterateNext not implemented');
            }
            snapshotItem(index) {
                throw new Error('XPathResult.snapshotItem not implemented');
            }
            then(onfulfilled, onrejected) {
                return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.XPathResultPropertyKeys, exports.XPathResultConstantKeys);
            }
        },
        _a.ANY_TYPE = 0,
        _a.ANY_UNORDERED_NODE_TYPE = 8,
        _a.BOOLEAN_TYPE = 3,
        _a.FIRST_ORDERED_NODE_TYPE = 9,
        _a.NUMBER_TYPE = 1,
        _a.ORDERED_NODE_ITERATOR_TYPE = 5,
        _a.ORDERED_NODE_SNAPSHOT_TYPE = 7,
        _a.STRING_TYPE = 2,
        _a.UNORDERED_NODE_ITERATOR_TYPE = 4,
        _a.UNORDERED_NODE_SNAPSHOT_TYPE = 6,
        _a;
}
exports.XPathResultGenerator = XPathResultGenerator;
exports.XPathResultPropertyKeys = ['booleanValue', 'invalidIteratorState', 'numberValue', 'resultType', 'singleNodeValue', 'snapshotLength', 'stringValue'];
exports.XPathResultConstantKeys = ['ANY_TYPE', 'ANY_UNORDERED_NODE_TYPE', 'BOOLEAN_TYPE', 'FIRST_ORDERED_NODE_TYPE', 'NUMBER_TYPE', 'ORDERED_NODE_ITERATOR_TYPE', 'ORDERED_NODE_SNAPSHOT_TYPE', 'STRING_TYPE', 'UNORDERED_NODE_ITERATOR_TYPE', 'UNORDERED_NODE_SNAPSHOT_TYPE'];
//# sourceMappingURL=XPathResult.js.map