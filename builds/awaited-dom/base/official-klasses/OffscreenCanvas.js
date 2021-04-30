"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffscreenCanvasConstantKeys = exports.OffscreenCanvasPropertyKeys = exports.OffscreenCanvasGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('OffscreenCanvas', exports.getState, exports.setState);
function OffscreenCanvasGenerator() {
    return class OffscreenCanvas {
        constructor(_width, _height) {
            initializeConstantsAndProperties_1.default(this, exports.OffscreenCanvasConstantKeys, exports.OffscreenCanvasPropertyKeys);
        }
        // properties
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        // methods
        convertToBlob(options) {
            return exports.awaitedHandler.runMethod(this, 'convertToBlob', [options]);
        }
        transferToImageBitmap() {
            throw new Error('OffscreenCanvas.transferToImageBitmap not implemented');
        }
    };
}
exports.OffscreenCanvasGenerator = OffscreenCanvasGenerator;
exports.OffscreenCanvasPropertyKeys = ['height', 'width'];
exports.OffscreenCanvasConstantKeys = [];
//# sourceMappingURL=OffscreenCanvas.js.map