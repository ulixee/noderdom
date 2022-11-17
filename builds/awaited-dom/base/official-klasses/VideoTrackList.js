"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoTrackListConstantKeys = exports.VideoTrackListPropertyKeys = exports.VideoTrackListGenerator = exports.awaitedIterator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('VideoTrackList', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function VideoTrackListGenerator() {
    return class VideoTrackList {
        constructor() {
            (0, exports.setState)(this, {
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
            return exports.awaitedIterator.iterateNodePointers(this);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.VideoTrackListPropertyKeys, exports.VideoTrackListConstantKeys);
        }
    };
}
exports.VideoTrackListGenerator = VideoTrackListGenerator;
exports.VideoTrackListPropertyKeys = ['length', 'selectedIndex'];
exports.VideoTrackListConstantKeys = [];
//# sourceMappingURL=VideoTrackList.js.map