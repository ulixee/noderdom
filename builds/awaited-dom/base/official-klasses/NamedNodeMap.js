"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('NamedNodeMap', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function NamedNodeMapGenerator() {
    return class NamedNodeMap {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.NamedNodeMapConstantKeys, exports.NamedNodeMapPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createNamedNodeMap',
                createIterableName: 'createAttr',
            });
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        getNamedItem(qualifiedName) {
            return exports.awaitedHandler.runMethod(this, 'getNamedItem', [qualifiedName]);
        }
        getNamedItemNS(namespace, localName) {
            return exports.awaitedHandler.runMethod(this, 'getNamedItemNS', [namespace, localName]);
        }
        item(index) {
            return exports.awaitedHandler.runMethod(this, 'item', [index]);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.NamedNodeMapGenerator = NamedNodeMapGenerator;
exports.NamedNodeMapPropertyKeys = ['length'];
exports.NamedNodeMapConstantKeys = [];
//# sourceMappingURL=NamedNodeMap.js.map