"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperNode_1 = require("../../base/super-klasses/SuperNode");
const create_1 = require("../create");
const AttrIsolate_1 = __importDefault(require("../isolate-mixins/AttrIsolate"));
const CharacterDataIsolate_1 = __importDefault(require("../isolate-mixins/CharacterDataIsolate"));
const DocumentFragmentIsolate_1 = __importDefault(require("../isolate-mixins/DocumentFragmentIsolate"));
const DocumentIsolate_1 = __importDefault(require("../isolate-mixins/DocumentIsolate"));
const DocumentOrShadowRoot_1 = __importDefault(require("../official-mixins/DocumentOrShadowRoot"));
const DocumentTypeIsolate_1 = __importDefault(require("../isolate-mixins/DocumentTypeIsolate"));
const ElementCSSInlineStyle_1 = __importDefault(require("../official-mixins/ElementCSSInlineStyle"));
const ElementContentEditable_1 = __importDefault(require("../official-mixins/ElementContentEditable"));
const ElementIsolate_1 = __importDefault(require("../isolate-mixins/ElementIsolate"));
const HTMLAnchorElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLAnchorElementIsolate"));
const HTMLAreaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLAreaElementIsolate"));
const HTMLAudioElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLAudioElementIsolate"));
const HTMLBRElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLBRElementIsolate"));
const HTMLBaseElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLBaseElementIsolate"));
const HTMLBodyElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLBodyElementIsolate"));
const HTMLButtonElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLButtonElementIsolate"));
const HTMLCanvasElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLCanvasElementIsolate"));
const HTMLDListElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDListElementIsolate"));
const HTMLDataElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDataElementIsolate"));
const HTMLDataListElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDataListElementIsolate"));
const HTMLDetailsElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDetailsElementIsolate"));
const HTMLDialogElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDialogElementIsolate"));
const HTMLDirectoryElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDirectoryElementIsolate"));
const HTMLDivElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDivElementIsolate"));
const HTMLDocumentIsolate_1 = __importDefault(require("../isolate-mixins/HTMLDocumentIsolate"));
const HTMLElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLElementIsolate"));
const HTMLEmbedElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLEmbedElementIsolate"));
const HTMLFieldSetElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFieldSetElementIsolate"));
const HTMLFontElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFontElementIsolate"));
const HTMLFormElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFormElementIsolate"));
const HTMLFrameElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFrameElementIsolate"));
const HTMLFrameSetElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLFrameSetElementIsolate"));
const HTMLHRElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHRElementIsolate"));
const HTMLHeadElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHeadElementIsolate"));
const HTMLHeadingElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHeadingElementIsolate"));
const HTMLHtmlElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLHtmlElementIsolate"));
const HTMLHyperlinkElementUtils_1 = __importDefault(require("../official-mixins/HTMLHyperlinkElementUtils"));
const HTMLIFrameElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLIFrameElementIsolate"));
const HTMLImageElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLImageElementIsolate"));
const HTMLInputElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLInputElementIsolate"));
const HTMLLIElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLIElementIsolate"));
const HTMLLabelElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLabelElementIsolate"));
const HTMLLegendElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLegendElementIsolate"));
const HTMLLinkElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLLinkElementIsolate"));
const HTMLMapElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLMapElementIsolate"));
const HTMLMediaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLMediaElementIsolate"));
const HTMLMetaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLMetaElementIsolate"));
const HTMLMeterElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLMeterElementIsolate"));
const HTMLModElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLModElementIsolate"));
const HTMLOListElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOListElementIsolate"));
const HTMLObjectElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLObjectElementIsolate"));
const HTMLOptGroupElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptGroupElementIsolate"));
const HTMLOptionElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptionElementIsolate"));
const HTMLOrSVGElement_1 = __importDefault(require("../official-mixins/HTMLOrSVGElement"));
const HTMLParagraphElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLParagraphElementIsolate"));
const HTMLParamElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLParamElementIsolate"));
const HTMLPreElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLPreElementIsolate"));
const HTMLProgressElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLProgressElementIsolate"));
const HTMLQuoteElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLQuoteElementIsolate"));
const HTMLScriptElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLScriptElementIsolate"));
const HTMLSelectElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSelectElementIsolate"));
const HTMLSlotElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSlotElementIsolate"));
const HTMLSourceElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSourceElementIsolate"));
const HTMLSpanElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLSpanElementIsolate"));
const HTMLStyleElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLStyleElementIsolate"));
const HTMLTableCaptionElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableCaptionElementIsolate"));
const HTMLTableCellElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableCellElementIsolate"));
const HTMLTableColElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableColElementIsolate"));
const HTMLTableElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableElementIsolate"));
const HTMLTableRowElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableRowElementIsolate"));
const HTMLTableSectionElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTableSectionElementIsolate"));
const HTMLTemplateElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTemplateElementIsolate"));
const HTMLTextAreaElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTextAreaElementIsolate"));
const HTMLTimeElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTimeElementIsolate"));
const HTMLTitleElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTitleElementIsolate"));
const HTMLTrackElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLTrackElementIsolate"));
const HTMLUListElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLUListElementIsolate"));
const HTMLVideoElementIsolate_1 = __importDefault(require("../isolate-mixins/HTMLVideoElementIsolate"));
const LinkStyle_1 = __importDefault(require("../official-mixins/LinkStyle"));
const NodeIsolate_1 = __importDefault(require("../isolate-mixins/NodeIsolate"));
const NonDocumentTypeChildNode_1 = __importDefault(require("../official-mixins/NonDocumentTypeChildNode"));
const NonElementParentNode_1 = __importDefault(require("../official-mixins/NonElementParentNode"));
const ParentNode_1 = __importDefault(require("../official-mixins/ParentNode"));
const ShadowRootIsolate_1 = __importDefault(require("../isolate-mixins/ShadowRootIsolate"));
const Slotable_1 = __importDefault(require("../official-mixins/Slotable"));
const TextIsolate_1 = __importDefault(require("../isolate-mixins/TextIsolate"));
const XPathEvaluatorBase_1 = __importDefault(require("../official-mixins/XPathEvaluatorBase"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperNodeBaseClass = (0, SuperNode_1.SuperNodeGenerator)(AttrIsolate_1.default, CharacterDataIsolate_1.default, DocumentFragmentIsolate_1.default, DocumentIsolate_1.default, DocumentOrShadowRoot_1.default, DocumentTypeIsolate_1.default, ElementCSSInlineStyle_1.default, ElementContentEditable_1.default, ElementIsolate_1.default, HTMLAnchorElementIsolate_1.default, HTMLAreaElementIsolate_1.default, HTMLAudioElementIsolate_1.default, HTMLBRElementIsolate_1.default, HTMLBaseElementIsolate_1.default, HTMLBodyElementIsolate_1.default, HTMLButtonElementIsolate_1.default, HTMLCanvasElementIsolate_1.default, HTMLDListElementIsolate_1.default, HTMLDataElementIsolate_1.default, HTMLDataListElementIsolate_1.default, HTMLDetailsElementIsolate_1.default, HTMLDialogElementIsolate_1.default, HTMLDirectoryElementIsolate_1.default, HTMLDivElementIsolate_1.default, HTMLDocumentIsolate_1.default, HTMLElementIsolate_1.default, HTMLEmbedElementIsolate_1.default, HTMLFieldSetElementIsolate_1.default, HTMLFontElementIsolate_1.default, HTMLFormElementIsolate_1.default, HTMLFrameElementIsolate_1.default, HTMLFrameSetElementIsolate_1.default, HTMLHRElementIsolate_1.default, HTMLHeadElementIsolate_1.default, HTMLHeadingElementIsolate_1.default, HTMLHtmlElementIsolate_1.default, HTMLHyperlinkElementUtils_1.default, HTMLIFrameElementIsolate_1.default, HTMLImageElementIsolate_1.default, HTMLInputElementIsolate_1.default, HTMLLIElementIsolate_1.default, HTMLLabelElementIsolate_1.default, HTMLLegendElementIsolate_1.default, HTMLLinkElementIsolate_1.default, HTMLMapElementIsolate_1.default, HTMLMediaElementIsolate_1.default, HTMLMetaElementIsolate_1.default, HTMLMeterElementIsolate_1.default, HTMLModElementIsolate_1.default, HTMLOListElementIsolate_1.default, HTMLObjectElementIsolate_1.default, HTMLOptGroupElementIsolate_1.default, HTMLOptionElementIsolate_1.default, HTMLOrSVGElement_1.default, HTMLParagraphElementIsolate_1.default, HTMLParamElementIsolate_1.default, HTMLPreElementIsolate_1.default, HTMLProgressElementIsolate_1.default, HTMLQuoteElementIsolate_1.default, HTMLScriptElementIsolate_1.default, HTMLSelectElementIsolate_1.default, HTMLSlotElementIsolate_1.default, HTMLSourceElementIsolate_1.default, HTMLSpanElementIsolate_1.default, HTMLStyleElementIsolate_1.default, HTMLTableCaptionElementIsolate_1.default, HTMLTableCellElementIsolate_1.default, HTMLTableColElementIsolate_1.default, HTMLTableElementIsolate_1.default, HTMLTableRowElementIsolate_1.default, HTMLTableSectionElementIsolate_1.default, HTMLTemplateElementIsolate_1.default, HTMLTextAreaElementIsolate_1.default, HTMLTimeElementIsolate_1.default, HTMLTitleElementIsolate_1.default, HTMLTrackElementIsolate_1.default, HTMLUListElementIsolate_1.default, HTMLVideoElementIsolate_1.default, LinkStyle_1.default, NodeIsolate_1.default, NonDocumentTypeChildNode_1.default, NonElementParentNode_1.default, ParentNode_1.default, ShadowRootIsolate_1.default, Slotable_1.default, TextIsolate_1.default, XPathEvaluatorBase_1.default);
class SuperNode extends SuperNodeBaseClass {
    constructor() {
        super();
    }
    // properties
    get childNodes() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addProperty(this, 'childNodes'), awaitedOptions);
    }
    get firstChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'firstChild'), awaitedOptions);
    }
    get lastChild() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'lastChild'), awaitedOptions);
    }
    get nextSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'nextSibling'), awaitedOptions);
    }
    get ownerDocument() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperDocument)(awaitedPath.addProperty(this, 'ownerDocument'), awaitedOptions);
    }
    get parentElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'parentElement'), awaitedOptions);
    }
    get parentNode() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'parentNode'), awaitedOptions);
    }
    get previousSibling() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addProperty(this, 'previousSibling'), awaitedOptions);
    }
    // methods
    getRootNode(options) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNode)(awaitedPath.addMethod(this, 'getRootNode', options), awaitedOptions);
    }
}
exports.default = SuperNode;
//# sourceMappingURL=SuperNode.js.map