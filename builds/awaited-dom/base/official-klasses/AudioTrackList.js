"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioTrackListConstantKeys = exports.AudioTrackListPropertyKeys = exports.AudioTrackListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('AudioTrackList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function AudioTrackListGenerator() {
    return class AudioTrackList {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.AudioTrackListConstantKeys, exports.AudioTrackListPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createAudioTrackList',
                createIterableName: 'createAudioTrack',
            });
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        // methods
        getTrackById(id) {
            throw new Error('AudioTrackList.getTrackById not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
        }
    };
}
exports.AudioTrackListGenerator = AudioTrackListGenerator;
exports.AudioTrackListPropertyKeys = ['length'];
exports.AudioTrackListConstantKeys = [];
//# sourceMappingURL=AudioTrackList.js.map