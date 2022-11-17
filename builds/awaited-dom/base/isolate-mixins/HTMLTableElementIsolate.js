"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableElementIsolateConstantKeys = exports.HTMLTableElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableElementIsolate', exports.getState, exports.setState);
class HTMLTableElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
    get bgColor() {
        return exports.awaitedHandler.getProperty(this, 'bgColor', false);
    }
    get border() {
        return exports.awaitedHandler.getProperty(this, 'border', false);
    }
    get caption() {
        throw new Error('HTMLTableElementIsolate.caption getter not implemented');
    }
    get cellPadding() {
        return exports.awaitedHandler.getProperty(this, 'cellPadding', false);
    }
    get cellSpacing() {
        return exports.awaitedHandler.getProperty(this, 'cellSpacing', false);
    }
    get frame() {
        return exports.awaitedHandler.getProperty(this, 'frame', false);
    }
    get rows() {
        throw new Error('HTMLTableElementIsolate.rows getter not implemented');
    }
    get rules() {
        return exports.awaitedHandler.getProperty(this, 'rules', false);
    }
    get summary() {
        return exports.awaitedHandler.getProperty(this, 'summary', false);
    }
    get tBodies() {
        throw new Error('HTMLTableElementIsolate.tBodies getter not implemented');
    }
    get tFoot() {
        throw new Error('HTMLTableElementIsolate.tFoot getter not implemented');
    }
    get tHead() {
        throw new Error('HTMLTableElementIsolate.tHead getter not implemented');
    }
    get width() {
        return exports.awaitedHandler.getProperty(this, 'width', false);
    }
}
exports.default = HTMLTableElementIsolate;
exports.HTMLTableElementIsolatePropertyKeys = ['align', 'bgColor', 'border', 'caption', 'cellPadding', 'cellSpacing', 'frame', 'rows', 'rules', 'summary', 'tBodies', 'tFoot', 'tHead', 'width'];
exports.HTMLTableElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLTableElementIsolate.js.map