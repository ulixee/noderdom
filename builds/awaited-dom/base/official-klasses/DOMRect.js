"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMRectConstantKeys = exports.DOMRectPropertyKeys = exports.DOMRectGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const DOMRectReadOnly_1 = require("./DOMRectReadOnly");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DOMRect', exports.getState, exports.setState);
function DOMRectGenerator(DOMRectReadOnly) {
    return class DOMRect extends DOMRectReadOnly {
        constructor(_x, _y, _width, _height) {
            super(_x, _y, _width, _height);
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
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.DOMRectPropertyKeys, exports.DOMRectConstantKeys);
        }
    };
}
exports.DOMRectGenerator = DOMRectGenerator;
exports.DOMRectPropertyKeys = [...DOMRectReadOnly_1.DOMRectReadOnlyPropertyKeys, 'height', 'width', 'x', 'y'];
exports.DOMRectConstantKeys = [...DOMRectReadOnly_1.DOMRectReadOnlyConstantKeys];
//# sourceMappingURL=DOMRect.js.map