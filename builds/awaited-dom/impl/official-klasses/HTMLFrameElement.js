"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const HTMLFrameElement_1 = require("../../base/official-klasses/HTMLFrameElement");
const create_1 = require("../create");
const HTMLElement_1 = __importDefault(require("./HTMLElement"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const HTMLFrameElementBaseClass = HTMLFrameElement_1.HTMLFrameElementGenerator(HTMLElement_1.default);
class HTMLFrameElement extends HTMLFrameElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get contentDocument() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
    }
}
exports.default = HTMLFrameElement;
//# sourceMappingURL=HTMLFrameElement.js.map