"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextTrackCueListConstantKeys = exports.TextTrackCueListPropertyKeys = exports.TextTrackCueListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('TextTrackCueList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function TextTrackCueListGenerator() {
    return class TextTrackCueList {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.TextTrackCueListConstantKeys, exports.TextTrackCueListPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createTextTrackCueList',
                createIterableName: 'createTextTrackCue',
            });
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        getCueById(id) {
            throw new Error('TextTrackCueList.getCueById not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
        }
    };
}
exports.TextTrackCueListGenerator = TextTrackCueListGenerator;
exports.TextTrackCueListPropertyKeys = ['length'];
exports.TextTrackCueListConstantKeys = [];
//# sourceMappingURL=TextTrackCueList.js.map