"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffscreenCanvasConstantKeys = exports.OffscreenCanvasPropertyKeys = exports.OffscreenCanvasGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('OffscreenCanvas', exports.getState, exports.setState);
function OffscreenCanvasGenerator() {
    return class OffscreenCanvas {
        constructor(_width, _height) {
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
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.OffscreenCanvasPropertyKeys, exports.OffscreenCanvasConstantKeys);
        }
    };
}
exports.OffscreenCanvasGenerator = OffscreenCanvasGenerator;
exports.OffscreenCanvasPropertyKeys = ['height', 'width'];
exports.OffscreenCanvasConstantKeys = [];
//# sourceMappingURL=OffscreenCanvas.js.map