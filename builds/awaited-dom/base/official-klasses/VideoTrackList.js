"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoTrackListConstantKeys = exports.VideoTrackListPropertyKeys = exports.VideoTrackListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('VideoTrackList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function VideoTrackListGenerator() {
    return class VideoTrackList {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.VideoTrackListConstantKeys, exports.VideoTrackListPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createVideoTrackList',
                createIterableName: 'createVideoTrack',
            });
        }
        // properties
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        get selectedIndex() {
            return exports.awaitedHandler.getProperty(this, 'selectedIndex', false);
        }
        // methods
        getTrackById(id) {
            throw new Error('VideoTrackList.getTrackById not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
        }
    };
}
exports.VideoTrackListGenerator = VideoTrackListGenerator;
exports.VideoTrackListPropertyKeys = ['length', 'selectedIndex'];
exports.VideoTrackListConstantKeys = [];
//# sourceMappingURL=VideoTrackList.js.map