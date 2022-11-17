"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableRowElementIsolateConstantKeys = exports.HTMLTableRowElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableRowElementIsolate', exports.getState, exports.setState);
class HTMLTableRowElementIsolate {
    get align() {
        return exports.awaitedHandler.getProperty(this, 'align', false);
    }
    get bgColor() {
        return exports.awaitedHandler.getProperty(this, 'bgColor', false);
    }
    get cells() {
        throw new Error('HTMLTableRowElementIsolate.cells getter not implemented');
    }
    get ch() {
        return exports.awaitedHandler.getProperty(this, 'ch', false);
    }
    get chOff() {
        return exports.awaitedHandler.getProperty(this, 'chOff', false);
    }
    get rowIndex() {
        return exports.awaitedHandler.getProperty(this, 'rowIndex', false);
    }
    get sectionRowIndex() {
        return exports.awaitedHandler.getProperty(this, 'sectionRowIndex', false);
    }
    get vAlign() {
        return exports.awaitedHandler.getProperty(this, 'vAlign', false);
    }
    // methods
    deleteCell(index) {
        return exports.awaitedHandler.runMethod(this, 'deleteCell', [index]);
    }
    insertCell(index) {
        throw new Error('HTMLTableRowElementIsolate.insertCell not implemented');
    }
}
exports.default = HTMLTableRowElementIsolate;
exports.HTMLTableRowElementIsolatePropertyKeys = ['align', 'bgColor', 'cells', 'ch', 'chOff', 'rowIndex', 'sectionRowIndex', 'vAlign'];
exports.HTMLTableRowElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLTableRowElementIsolate.js.map