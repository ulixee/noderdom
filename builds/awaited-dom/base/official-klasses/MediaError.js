"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaErrorConstantKeys = exports.MediaErrorPropertyKeys = exports.MediaErrorGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('MediaError', exports.getState, exports.setState);
function MediaErrorGenerator() {
    var _a;
    return _a = class MediaError {
            constructor() {
                this.MEDIA_ERR_ABORTED = 1;
                this.MEDIA_ERR_DECODE = 3;
                this.MEDIA_ERR_NETWORK = 2;
                this.MEDIA_ERR_SRC_NOT_SUPPORTED = 4;
                initializeConstantsAndProperties_1.default(this, exports.MediaErrorConstantKeys, exports.MediaErrorPropertyKeys);
            }
        },
        _a.MEDIA_ERR_ABORTED = 1,
        _a.MEDIA_ERR_DECODE = 3,
        _a.MEDIA_ERR_NETWORK = 2,
        _a.MEDIA_ERR_SRC_NOT_SUPPORTED = 4,
        _a;
}
exports.MediaErrorGenerator = MediaErrorGenerator;
exports.MediaErrorPropertyKeys = [];
exports.MediaErrorConstantKeys = ['MEDIA_ERR_ABORTED', 'MEDIA_ERR_DECODE', 'MEDIA_ERR_NETWORK', 'MEDIA_ERR_SRC_NOT_SUPPORTED'];
//# sourceMappingURL=MediaError.js.map