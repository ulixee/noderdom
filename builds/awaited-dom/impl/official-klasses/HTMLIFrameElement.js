"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLIFrameElement_1 = require("../../base/official-klasses/HTMLIFrameElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const HTMLIFrameElementBaseClass = HTMLIFrameElement_1.HTMLIFrameElementGenerator(HTMLElement_1.default);
class HTMLIFrameElement extends HTMLIFrameElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get contentDocument() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
    }
    get featurePolicy() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createFeaturePolicy(awaitedPath.addProperty(this, 'featurePolicy'), awaitedOptions);
    }
    get sandbox() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createDOMTokenList(awaitedPath.addProperty(this, 'sandbox'), awaitedOptions);
    }
}
exports.default = HTMLIFrameElement;
//# sourceMappingURL=HTMLIFrameElement.js.map