"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLSelectElementIsolate_1 = __importDefault(require("../../base/isolate-mixins/HTMLSelectElementIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
class HTMLSelectElementIsolate extends HTMLSelectElementIsolate_1.default {
    get form() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLFormElement(awaitedPath.addProperty('form'), awaitedOptions);
    }
    get labels() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addProperty('labels'), awaitedOptions);
    }
    get options() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLOptionsCollection(awaitedPath.addProperty('options'), awaitedOptions);
    }
    get selectedOptions() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperHTMLCollection(awaitedPath.addProperty('selectedOptions'), awaitedOptions);
    }
    // methods
    item(index) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addMethod('item', index), awaitedOptions);
    }
    namedItem(name) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createHTMLOptionElement(awaitedPath.addMethod('namedItem', name), awaitedOptions);
    }
}
exports.default = HTMLSelectElementIsolate;
//# sourceMappingURL=HTMLSelectElementIsolate.js.map