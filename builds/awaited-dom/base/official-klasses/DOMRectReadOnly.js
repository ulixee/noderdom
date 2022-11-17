"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMRectReadOnlyConstantKeys = exports.DOMRectReadOnlyPropertyKeys = exports.DOMRectReadOnlyGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMRectReadOnly', exports.getState, exports.setState);
function DOMRectReadOnlyGenerator() {
    return class DOMRectReadOnly {
        constructor(_x, _y, _width, _height) {
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
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.DOMRectReadOnlyPropertyKeys, exports.DOMRectReadOnlyConstantKeys);
        }
    };
}
exports.DOMRectReadOnlyGenerator = DOMRectReadOnlyGenerator;
exports.DOMRectReadOnlyPropertyKeys = ['bottom', 'height', 'left', 'right', 'top', 'width', 'x', 'y'];
exports.DOMRectReadOnlyConstantKeys = [];
//# sourceMappingURL=DOMRectReadOnly.js.map