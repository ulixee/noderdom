"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMRectReadOnlyConstantKeys = exports.DOMRectReadOnlyPropertyKeys = exports.DOMRectReadOnlyGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMRectReadOnly', exports.getState, exports.setState);
function DOMRectReadOnlyGenerator() {
    return class DOMRectReadOnly {
        constructor(_x, _y, _width, _height) {
            initializeConstantsAndProperties_1.default(this, exports.DOMRectReadOnlyConstantKeys, exports.DOMRectReadOnlyPropertyKeys);
        }
        // properties
        get bottom() {
            return exports.awaitedHandler.getProperty(this, 'bottom', false);
        }
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get left() {
            return exports.awaitedHandler.getProperty(this, 'left', false);
        }
        get right() {
            return exports.awaitedHandler.getProperty(this, 'right', false);
        }
        get top() {
            return exports.awaitedHandler.getProperty(this, 'top', false);
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
        // methods
        toJSON() {
            return exports.awaitedHandler.runMethod(this, 'toJSON', []);
        }
    };
}
exports.DOMRectReadOnlyGenerator = DOMRectReadOnlyGenerator;
exports.DOMRectReadOnlyPropertyKeys = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];
exports.DOMRectReadOnlyConstantKeys = [];
//# sourceMappingURL=DOMRectReadOnly.js.map