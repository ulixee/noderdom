"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBitmapConstantKeys = exports.ImageBitmapPropertyKeys = exports.ImageBitmapGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('ImageBitmap', exports.getState, exports.setState);
function ImageBitmapGenerator() {
    return class ImageBitmap {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.ImageBitmapConstantKeys, exports.ImageBitmapPropertyKeys);
        }
        // properties
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        // methods
        close() {
            return exports.awaitedHandler.runMethod(this, 'close', []);
        }
    };
}
exports.ImageBitmapGenerator = ImageBitmapGenerator;
exports.ImageBitmapPropertyKeys = ['height', 'width'];
exports.ImageBitmapConstantKeys = [];
//# sourceMappingURL=ImageBitmap.js.map