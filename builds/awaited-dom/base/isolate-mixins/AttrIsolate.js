"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttrIsolateConstantKeys = exports.AttrIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('AttrIsolate', exports.getState, exports.setState);
class AttrIsolate {
    get localName() {
        return exports.awaitedHandler.getProperty(this, 'localName', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get namespaceURI() {
        return exports.awaitedHandler.getProperty(this, 'namespaceURI', true);
    }
    get ownerElement() {
        throw new Error('AttrIsolate.ownerElement getter not implemented');
    }
    get prefix() {
        return exports.awaitedHandler.getProperty(this, 'prefix', true);
    }
    get specified() {
        return exports.awaitedHandler.getProperty(this, 'specified', false);
    }
    get value() {
        return exports.awaitedHandler.getProperty(this, 'value', false);
    }
}
exports.default = AttrIsolate;
exports.AttrIsolatePropertyKeys = ['localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];
exports.AttrIsolateConstantKeys = [];
//# sourceMappingURL=AttrIsolate.js.map