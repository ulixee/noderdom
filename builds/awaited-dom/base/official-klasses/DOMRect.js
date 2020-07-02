"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMRect', exports.getState, exports.setState);
function DOMRectGenerator() {
    return class DOMRect {
        constructor(_x, _y, _width, _height) {
            initializeConstantsAndProperties_1.default(this, exports.DOMRectConstantKeys, exports.DOMRectPropertyKeys);
        }
        // properties
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        get x() {
            return exports.awaitedHandler.getProperty(this, 'x', false);
        }
        get y() {
            return exports.awaitedHandler.getProperty(this, 'y', false);
        }
    };
}
exports.DOMRectGenerator = DOMRectGenerator;
exports.DOMRectPropertyKeys = ['height', 'width', 'x', 'y'];
exports.DOMRectConstantKeys = [];
//# sourceMappingURL=DOMRect.js.map