"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperHTMLElement_1 = require("../../base/super-klasses/SuperHTMLElement");
const create_1 = require("../create");
const ElementIsolate_1 = __importDefault(require("../isolate-mixins/ElementIsolate"));
const HTMLButtonElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLButtonElementIsolate"));
const HTMLElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLElementIsolate"));
const HTMLFieldSetElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFieldSetElementIsolate"));
const HTMLFormElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFormElementIsolate"));
const HTMLHeadElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHeadElementIsolate"));
const HTMLInputElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLInputElementIsolate"));
const HTMLLabelElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLabelElementIsolate"));
const HTMLOptGroupElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptGroupElementIsolate"));
const HTMLOptionElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptionElementIsolate"));
const HTMLOrSVGElement_1 = __importDefault(require("../official-mixins/HTMLOrSVGElement"));
const HTMLSelectElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSelectElementIsolate"));
const HTMLTextAreaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTextAreaElementIsolate"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperHTMLElementBaseClass = SuperHTMLElement_1.SuperHTMLElementGenerator(ElementIsolate_1.default, HTMLButtonElementIsolate_1.default, HTMLElementIsolate_1.default, HTMLFieldSetElementIsolate_1.default, HTMLFormElementIsolate_1.default, HTMLHeadElementIsolate_1.default, HTMLInputElementIsolate_1.default, HTMLLabelElementIsolate_1.default, HTMLOptGroupElementIsolate_1.default, HTMLOptionElementIsolate_1.default, HTMLOrSVGElement_1.default, HTMLSelectElementIsolate_1.default, HTMLTextAreaElementIsolate_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default, ParentNode_1.default);
class SuperHTMLElement extends SuperHTMLElementBaseClass {
    constructor() {
        super();
    }
    // properties
    get offsetParent() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
    }
}
exports.default = SuperHTMLElement;
//# sourceMappingURL=SuperHTMLElement.js.map