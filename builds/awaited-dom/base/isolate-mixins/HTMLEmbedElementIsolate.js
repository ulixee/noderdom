"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLEmbedElementIsolateConstantKeys = exports.HTMLEmbedElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLEmbedElementIsolate', exports.getState, exports.setState);
class HTMLEmbedElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
    get height() {
        return exports.awaitedHandler.getProperty(this, 'height', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get src() {
        return exports.awaitedHandler.getProperty(this, 'src', false);
    }
    get type() {
        return exports.awaitedHandler.getProperty(this, 'type', false);
    }
    get width() {
        return exports.awaitedHandler.getProperty(this, 'width', false);
    }
}
exports.default = HTMLEmbedElementIsolate;
exports.HTMLEmbedElementIsolatePropertyKeys = ['align', 'height', 'name', 'src', 'type', 'width'];
exports.HTMLEmbedElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLEmbedElementIsolate.js.map