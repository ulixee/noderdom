"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordProxy = exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperNode_1 = require("../../base/super-klasses/SuperNode");
const create_1 = require("../create");
const AttrIsolate_1 = __importDefault(require("../isolate-mixins/AttrIsolate"));
const CharacterDataIsolate_1 = __importDefault(require("../isolate-mixins/CharacterDataIsolate"));
const DocumentIsolate_1 = __importDefault(require("../isolate-mixins/DocumentIsolate"));
const DocumentTypeIsolate_1 = __importDefault(require("../isolate-mixins/DocumentTypeIsolate"));
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
const NonElementParentNode_1 = __importDefault(require("../official-mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
const TextIsolate_1 = __importDefault(require("../isolate-mixins/TextIsolate"));
const XPathEvaluatorBase_1 = __importDefault(require("../official-mixins/XPathEvaluatorBase"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
const SuperNodeBaseClass = SuperNode_1.SuperNodeGenerator(AttrIsolate_1.default, CharacterDataIsolate_1.default, DocumentIsolate_1.default, DocumentTypeIsolate_1.default, ElementIsolate_1.default, HTMLButtonElementIsolate_1.default, HTMLElementIsolate_1.default, HTMLFieldSetElementIsolate_1.default, HTMLFormElementIsolate_1.default, HTMLHeadElementIsolate_1.default, HTMLInputElementIsolate_1.default, HTMLLabelElementIsolate_1.default, HTMLOptGroupElementIsolate_1.default, HTMLOptionElementIsolate_1.default, HTMLOrSVGElement_1.default, HTMLSelectElementIsolate_1.default, HTMLTextAreaElementIsolate_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default, NonElementParentNode_1.default, ParentNode_1.default, TextIsolate_1.default, XPathEvaluatorBase_1.default);
class SuperNode extends SuperNodeBaseClass {
    constructor() {
        super();
    }
    // properties
    get childNodes() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNodeList(awaitedPath.addProperty('childNodes'), awaitedOptions);
    }
    get firstChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('firstChild'), awaitedOptions);
    }
    get lastChild() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('lastChild'), awaitedOptions);
    }
    get nextSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('nextSibling'), awaitedOptions);
    }
    get ownerDocument() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperDocument(awaitedPath.addProperty('ownerDocument'), awaitedOptions);
    }
    get parentElement() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperElement(awaitedPath.addProperty('parentElement'), awaitedOptions);
    }
    get parentNode() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('parentNode'), awaitedOptions);
    }
    get previousSibling() {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addProperty('previousSibling'), awaitedOptions);
    }
    // methods
    getRootNode(options) {
        const { awaitedPath, awaitedOptions } = exports.getState(this);
        return create_1.createSuperNode(awaitedPath.addMethod('getRootNode', options), awaitedOptions);
    }
}
exports.default = SuperNode;
//# sourceMappingURL=SuperNode.js.map