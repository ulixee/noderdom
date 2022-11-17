"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableSectionElementIsolateConstantKeys = exports.HTMLTableSectionElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableSectionElementIsolate', exports.getState, exports.setState);
class HTMLTableSectionElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
    get ch() {
        return exports.awaitedHandler.getProperty(this, 'ch', false);
    }
    get chOff() {
        return exports.awaitedHandler.getProperty(this, 'chOff', false);
    }
    get rows() {
        throw new Error('HTMLTableSectionElementIsolate.rows getter not implemented');
    }
    get vAlign() {
        return exports.awaitedHandler.getProperty(this, 'vAlign', false);
    }
}
exports.default = HTMLTableSectionElementIsolate;
exports.HTMLTableSectionElementIsolatePropertyKeys = ['align', 'ch', 'chOff', 'rows', 'vAlign'];
exports.HTMLTableSectionElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLTableSectionElementIsolate.js.map