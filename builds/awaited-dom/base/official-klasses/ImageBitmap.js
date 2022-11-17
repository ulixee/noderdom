"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageBitmapConstantKeys = exports.ImageBitmapPropertyKeys = exports.ImageBitmapGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('ImageBitmap', exports.getState, exports.setState);
function ImageBitmapGenerator() {
    return class ImageBitmap {
        constructor() {
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
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.ImageBitmapPropertyKeys, exports.ImageBitmapConstantKeys);
        }
    };
}
exports.ImageBitmapGenerator = ImageBitmapGenerator;
exports.ImageBitmapPropertyKeys = ['height', 'width'];
exports.ImageBitmapConstantKeys = [];
//# sourceMappingURL=ImageBitmap.js.map