"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperNodeConstantKeys = exports.SuperNodePropertyKeys = exports.SuperNodeGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const AttrIsolate_1 = require("../isolate-mixins/AttrIsolate");
const CharacterDataIsolate_1 = require("../isolate-mixins/CharacterDataIsolate");
const DocumentFragmentIsolate_1 = require("../isolate-mixins/DocumentFragmentIsolate");
const DocumentIsolate_1 = require("../isolate-mixins/DocumentIsolate");
const DocumentOrShadowRoot_1 = require("../official-mixins/DocumentOrShadowRoot");
const DocumentTypeIsolate_1 = require("../isolate-mixins/DocumentTypeIsolate");
const ElementCSSInlineStyle_1 = require("../official-mixins/ElementCSSInlineStyle");
const ElementContentEditable_1 = require("../official-mixins/ElementContentEditable");
const ElementIsolate_1 = require("../isolate-mixins/ElementIsolate");
const HTMLAnchorElementIsolate_1 = require("../isolate-mixins/HTMLAnchorElementIsolate");
const HTMLAreaElementIsolate_1 = require("../isolate-mixins/HTMLAreaElementIsolate");
const HTMLAudioElementIsolate_1 = require("../isolate-mixins/HTMLAudioElementIsolate");
const HTMLBRElementIsolate_1 = require("../isolate-mixins/HTMLBRElementIsolate");
const HTMLBaseElementIsolate_1 = require("../isolate-mixins/HTMLBaseElementIsolate");
const HTMLBodyElementIsolate_1 = require("../isolate-mixins/HTMLBodyElementIsolate");
const HTMLButtonElementIsolate_1 = require("../isolate-mixins/HTMLButtonElementIsolate");
const HTMLCanvasElementIsolate_1 = require("../isolate-mixins/HTMLCanvasElementIsolate");
const HTMLDListElementIsolate_1 = require("../isolate-mixins/HTMLDListElementIsolate");
const HTMLDataElementIsolate_1 = require("../isolate-mixins/HTMLDataElementIsolate");
const HTMLDataListElementIsolate_1 = require("../isolate-mixins/HTMLDataListElementIsolate");
const HTMLDetailsElementIsolate_1 = require("../isolate-mixins/HTMLDetailsElementIsolate");
const HTMLDialogElementIsolate_1 = require("../isolate-mixins/HTMLDialogElementIsolate");
const HTMLDirectoryElementIsolate_1 = require("../isolate-mixins/HTMLDirectoryElementIsolate");
const HTMLDivElementIsolate_1 = require("../isolate-mixins/HTMLDivElementIsolate");
const HTMLDocumentIsolate_1 = require("../isolate-mixins/HTMLDocumentIsolate");
const HTMLElementIsolate_1 = require("../isolate-mixins/HTMLElementIsolate");
const HTMLEmbedElementIsolate_1 = require("../isolate-mixins/HTMLEmbedElementIsolate");
const HTMLFieldSetElementIsolate_1 = require("../isolate-mixins/HTMLFieldSetElementIsolate");
const HTMLFontElementIsolate_1 = require("../isolate-mixins/HTMLFontElementIsolate");
const HTMLFormElementIsolate_1 = require("../isolate-mixins/HTMLFormElementIsolate");
const HTMLFrameElementIsolate_1 = require("../isolate-mixins/HTMLFrameElementIsolate");
const HTMLFrameSetElementIsolate_1 = require("../isolate-mixins/HTMLFrameSetElementIsolate");
const HTMLHRElementIsolate_1 = require("../isolate-mixins/HTMLHRElementIsolate");
const HTMLHeadElementIsolate_1 = require("../isolate-mixins/HTMLHeadElementIsolate");
const HTMLHeadingElementIsolate_1 = require("../isolate-mixins/HTMLHeadingElementIsolate");
const HTMLHtmlElementIsolate_1 = require("../isolate-mixins/HTMLHtmlElementIsolate");
const HTMLHyperlinkElementUtils_1 = require("../official-mixins/HTMLHyperlinkElementUtils");
const HTMLIFrameElementIsolate_1 = require("../isolate-mixins/HTMLIFrameElementIsolate");
const HTMLImageElementIsolate_1 = require("../isolate-mixins/HTMLImageElementIsolate");
const HTMLInputElementIsolate_1 = require("../isolate-mixins/HTMLInputElementIsolate");
const HTMLLIElementIsolate_1 = require("../isolate-mixins/HTMLLIElementIsolate");
const HTMLLabelElementIsolate_1 = require("../isolate-mixins/HTMLLabelElementIsolate");
const HTMLLegendElementIsolate_1 = require("../isolate-mixins/HTMLLegendElementIsolate");
const HTMLLinkElementIsolate_1 = require("../isolate-mixins/HTMLLinkElementIsolate");
const HTMLMapElementIsolate_1 = require("../isolate-mixins/HTMLMapElementIsolate");
const HTMLMediaElementIsolate_1 = require("../isolate-mixins/HTMLMediaElementIsolate");
const HTMLMetaElementIsolate_1 = require("../isolate-mixins/HTMLMetaElementIsolate");
const HTMLMeterElementIsolate_1 = require("../isolate-mixins/HTMLMeterElementIsolate");
const HTMLModElementIsolate_1 = require("../isolate-mixins/HTMLModElementIsolate");
const HTMLOListElementIsolate_1 = require("../isolate-mixins/HTMLOListElementIsolate");
const HTMLObjectElementIsolate_1 = require("../isolate-mixins/HTMLObjectElementIsolate");
const HTMLOptGroupElementIsolate_1 = require("../isolate-mixins/HTMLOptGroupElementIsolate");
const HTMLOptionElementIsolate_1 = require("../isolate-mixins/HTMLOptionElementIsolate");
const HTMLOrSVGElement_1 = require("../official-mixins/HTMLOrSVGElement");
const HTMLParagraphElementIsolate_1 = require("../isolate-mixins/HTMLParagraphElementIsolate");
const HTMLParamElementIsolate_1 = require("../isolate-mixins/HTMLParamElementIsolate");
const HTMLPreElementIsolate_1 = require("../isolate-mixins/HTMLPreElementIsolate");
const HTMLProgressElementIsolate_1 = require("../isolate-mixins/HTMLProgressElementIsolate");
const HTMLQuoteElementIsolate_1 = require("../isolate-mixins/HTMLQuoteElementIsolate");
const HTMLScriptElementIsolate_1 = require("../isolate-mixins/HTMLScriptElementIsolate");
const HTMLSelectElementIsolate_1 = require("../isolate-mixins/HTMLSelectElementIsolate");
const HTMLSlotElementIsolate_1 = require("../isolate-mixins/HTMLSlotElementIsolate");
const HTMLSourceElementIsolate_1 = require("../isolate-mixins/HTMLSourceElementIsolate");
const HTMLSpanElementIsolate_1 = require("../isolate-mixins/HTMLSpanElementIsolate");
const HTMLStyleElementIsolate_1 = require("../isolate-mixins/HTMLStyleElementIsolate");
const HTMLTableCaptionElementIsolate_1 = require("../isolate-mixins/HTMLTableCaptionElementIsolate");
const HTMLTableCellElementIsolate_1 = require("../isolate-mixins/HTMLTableCellElementIsolate");
const HTMLTableColElementIsolate_1 = require("../isolate-mixins/HTMLTableColElementIsolate");
const HTMLTableElementIsolate_1 = require("../isolate-mixins/HTMLTableElementIsolate");
const HTMLTableRowElementIsolate_1 = require("../isolate-mixins/HTMLTableRowElementIsolate");
const HTMLTableSectionElementIsolate_1 = require("../isolate-mixins/HTMLTableSectionElementIsolate");
const HTMLTemplateElementIsolate_1 = require("../isolate-mixins/HTMLTemplateElementIsolate");
const HTMLTextAreaElementIsolate_1 = require("../isolate-mixins/HTMLTextAreaElementIsolate");
const HTMLTimeElementIsolate_1 = require("../isolate-mixins/HTMLTimeElementIsolate");
const HTMLTitleElementIsolate_1 = require("../isolate-mixins/HTMLTitleElementIsolate");
const HTMLTrackElementIsolate_1 = require("../isolate-mixins/HTMLTrackElementIsolate");
const HTMLUListElementIsolate_1 = require("../isolate-mixins/HTMLUListElementIsolate");
const HTMLVideoElementIsolate_1 = require("../isolate-mixins/HTMLVideoElementIsolate");
const LinkStyle_1 = require("../official-mixins/LinkStyle");
const NodeIsolate_1 = require("../isolate-mixins/NodeIsolate");
const NonDocumentTypeChildNode_1 = require("../official-mixins/NonDocumentTypeChildNode");
const NonElementParentNode_1 = require("../official-mixins/NonElementParentNode");
const ParentNode_1 = require("../official-mixins/ParentNode");
const ShadowRootIsolate_1 = require("../isolate-mixins/ShadowRootIsolate");
const Slotable_1 = require("../official-mixins/Slotable");
const TextIsolate_1 = require("../isolate-mixins/TextIsolate");
const XPathEvaluatorBase_1 = require("../official-mixins/XPathEvaluatorBase");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperNode', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperNodeGenerator(AttrIsolate, CharacterDataIsolate, DocumentFragmentIsolate, DocumentIsolate, DocumentOrShadowRoot, DocumentTypeIsolate, ElementCSSInlineStyle, ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLDocumentIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLHyperlinkElementUtils, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, NonElementParentNode, ParentNode, ShadowRootIsolate, Slotable, TextIsolate, XPathEvaluatorBase) {
    var _a;
    const Parent = (0, ClassMixer_1.default)(AttrIsolate, [CharacterDataIsolate, DocumentFragmentIsolate, DocumentIsolate, DocumentOrShadowRoot, DocumentTypeIsolate, ElementCSSInlineStyle, ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLDocumentIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLHyperlinkElementUtils, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, NonElementParentNode, ParentNode, ShadowRootIsolate, Slotable, TextIsolate, XPathEvaluatorBase]);
    return _a = class SuperNode extends Parent {
            constructor() {
                super();
                this.ATTRIBUTE_NODE = 2;
                this.CDATA_SECTION_NODE = 4;
                this.COMMENT_NODE = 8;
                this.DOCUMENT_FRAGMENT_NODE = 11;
                this.DOCUMENT_NODE = 9;
                this.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
                this.DOCUMENT_POSITION_CONTAINS = 0x08;
                this.DOCUMENT_POSITION_DISCONNECTED = 0x01;
                this.DOCUMENT_POSITION_FOLLOWING = 0x04;
                this.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
                this.DOCUMENT_POSITION_PRECEDING = 0x02;
                this.DOCUMENT_TYPE_NODE = 10;
                this.ELEMENT_NODE = 1;
                this.ENTITY_NODE = 6;
                this.ENTITY_REFERENCE_NODE = 5;
                this.NOTATION_NODE = 12;
                this.PROCESSING_INSTRUCTION_NODE = 7;
                this.TEXT_NODE = 3;
                (0, exports.setState)(this, {
                    createInstanceName: 'createSuperNode',
                });
                // proxy supports indexed property access
                const proxy = new Proxy(this, {
                    get(target, prop) {
                        if (prop in target) {
                            // @ts-ignore
                            const value = target[prop];
                            if (typeof value === 'function')
                                return value.bind(target);
                            return value;
                        }
                        // delegate to indexer property
                        if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop)) {
                            const param = parseInt(prop, 10);
                            return target.item(param);
                        }
                    },
                });
                return proxy;
            }
            // properties
            get baseURI() {
                return exports.awaitedHandler.getProperty(this, 'baseURI', false);
            }
            get childNodes() {
                throw new Error('SuperNode.childNodes getter not implemented');
            }
            get firstChild() {
                throw new Error('SuperNode.firstChild getter not implemented');
            }
            get isConnected() {
                return exports.awaitedHandler.getProperty(this, 'isConnected', false);
            }
            get lastChild() {
                throw new Error('SuperNode.lastChild getter not implemented');
            }
            get nextSibling() {
                throw new Error('SuperNode.nextSibling getter not implemented');
            }
            get nodeName() {
                return exports.awaitedHandler.getProperty(this, 'nodeName', false);
            }
            get nodeType() {
                return exports.awaitedHandler.getProperty(this, 'nodeType', false);
            }
            get nodeValue() {
                return exports.awaitedHandler.getProperty(this, 'nodeValue', true);
            }
            get ownerDocument() {
                throw new Error('SuperNode.ownerDocument getter not implemented');
            }
            get parentElement() {
                throw new Error('SuperNode.parentElement getter not implemented');
            }
            get parentNode() {
                throw new Error('SuperNode.parentNode getter not implemented');
            }
            get previousSibling() {
                throw new Error('SuperNode.previousSibling getter not implemented');
            }
            get textContent() {
                return exports.awaitedHandler.getProperty(this, 'textContent', true);
            }
            // methods
            compareDocumentPosition(other) {
                return exports.awaitedHandler.runMethod(this, 'compareDocumentPosition', [other]);
            }
            contains(other) {
                return exports.awaitedHandler.runMethod(this, 'contains', [other]);
            }
            getRootNode(options) {
                throw new Error('SuperNode.getRootNode not implemented');
            }
            hasChildNodes() {
                return exports.awaitedHandler.runMethod(this, 'hasChildNodes', []);
            }
            isDefaultNamespace(namespace) {
                return exports.awaitedHandler.runMethod(this, 'isDefaultNamespace', [namespace]);
            }
            isEqualNode(otherNode) {
                return exports.awaitedHandler.runMethod(this, 'isEqualNode', [otherNode]);
            }
            isSameNode(otherNode) {
                return exports.awaitedHandler.runMethod(this, 'isSameNode', [otherNode]);
            }
            lookupNamespaceURI(prefix) {
                return exports.awaitedHandler.runMethod(this, 'lookupNamespaceURI', [prefix]);
            }
            lookupPrefix(namespace) {
                return exports.awaitedHandler.runMethod(this, 'lookupPrefix', [namespace]);
            }
            normalize() {
                return exports.awaitedHandler.runMethod(this, 'normalize', []);
            }
            then(onfulfilled, onrejected) {
                return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.SuperNodePropertyKeys, exports.SuperNodeConstantKeys);
            }
        },
        _a.ATTRIBUTE_NODE = 2,
        _a.CDATA_SECTION_NODE = 4,
        _a.COMMENT_NODE = 8,
        _a.DOCUMENT_FRAGMENT_NODE = 11,
        _a.DOCUMENT_NODE = 9,
        _a.DOCUMENT_POSITION_CONTAINED_BY = 0x10,
        _a.DOCUMENT_POSITION_CONTAINS = 0x08,
        _a.DOCUMENT_POSITION_DISCONNECTED = 0x01,
        _a.DOCUMENT_POSITION_FOLLOWING = 0x04,
        _a.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20,
        _a.DOCUMENT_POSITION_PRECEDING = 0x02,
        _a.DOCUMENT_TYPE_NODE = 10,
        _a.ELEMENT_NODE = 1,
        _a.ENTITY_NODE = 6,
        _a.ENTITY_REFERENCE_NODE = 5,
        _a.NOTATION_NODE = 12,
        _a.PROCESSING_INSTRUCTION_NODE = 7,
        _a.TEXT_NODE = 3,
        _a;
}
exports.SuperNodeGenerator = SuperNodeGenerator;
exports.SuperNodePropertyKeys = [...AttrIsolate_1.AttrIsolatePropertyKeys, ...CharacterDataIsolate_1.CharacterDataIsolatePropertyKeys, ...DocumentFragmentIsolate_1.DocumentFragmentIsolatePropertyKeys, ...DocumentIsolate_1.DocumentIsolatePropertyKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootPropertyKeys, ...DocumentTypeIsolate_1.DocumentTypeIsolatePropertyKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStylePropertyKeys, ...ElementContentEditable_1.ElementContentEditablePropertyKeys, ...ElementIsolate_1.ElementIsolatePropertyKeys, ...HTMLAnchorElementIsolate_1.HTMLAnchorElementIsolatePropertyKeys, ...HTMLAreaElementIsolate_1.HTMLAreaElementIsolatePropertyKeys, ...HTMLAudioElementIsolate_1.HTMLAudioElementIsolatePropertyKeys, ...HTMLBRElementIsolate_1.HTMLBRElementIsolatePropertyKeys, ...HTMLBaseElementIsolate_1.HTMLBaseElementIsolatePropertyKeys, ...HTMLBodyElementIsolate_1.HTMLBodyElementIsolatePropertyKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolatePropertyKeys, ...HTMLCanvasElementIsolate_1.HTMLCanvasElementIsolatePropertyKeys, ...HTMLDListElementIsolate_1.HTMLDListElementIsolatePropertyKeys, ...HTMLDataElementIsolate_1.HTMLDataElementIsolatePropertyKeys, ...HTMLDataListElementIsolate_1.HTMLDataListElementIsolatePropertyKeys, ...HTMLDetailsElementIsolate_1.HTMLDetailsElementIsolatePropertyKeys, ...HTMLDialogElementIsolate_1.HTMLDialogElementIsolatePropertyKeys, ...HTMLDirectoryElementIsolate_1.HTMLDirectoryElementIsolatePropertyKeys, ...HTMLDivElementIsolate_1.HTMLDivElementIsolatePropertyKeys, ...HTMLDocumentIsolate_1.HTMLDocumentIsolatePropertyKeys, ...HTMLElementIsolate_1.HTMLElementIsolatePropertyKeys, ...HTMLEmbedElementIsolate_1.HTMLEmbedElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFontElementIsolate_1.HTMLFontElementIsolatePropertyKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolatePropertyKeys, ...HTMLFrameElementIsolate_1.HTMLFrameElementIsolatePropertyKeys, ...HTMLFrameSetElementIsolate_1.HTMLFrameSetElementIsolatePropertyKeys, ...HTMLHRElementIsolate_1.HTMLHRElementIsolatePropertyKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolatePropertyKeys, ...HTMLHeadingElementIsolate_1.HTMLHeadingElementIsolatePropertyKeys, ...HTMLHtmlElementIsolate_1.HTMLHtmlElementIsolatePropertyKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsPropertyKeys, ...HTMLIFrameElementIsolate_1.HTMLIFrameElementIsolatePropertyKeys, ...HTMLImageElementIsolate_1.HTMLImageElementIsolatePropertyKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolatePropertyKeys, ...HTMLLIElementIsolate_1.HTMLLIElementIsolatePropertyKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolatePropertyKeys, ...HTMLLegendElementIsolate_1.HTMLLegendElementIsolatePropertyKeys, ...HTMLLinkElementIsolate_1.HTMLLinkElementIsolatePropertyKeys, ...HTMLMapElementIsolate_1.HTMLMapElementIsolatePropertyKeys, ...HTMLMediaElementIsolate_1.HTMLMediaElementIsolatePropertyKeys, ...HTMLMetaElementIsolate_1.HTMLMetaElementIsolatePropertyKeys, ...HTMLMeterElementIsolate_1.HTMLMeterElementIsolatePropertyKeys, ...HTMLModElementIsolate_1.HTMLModElementIsolatePropertyKeys, ...HTMLOListElementIsolate_1.HTMLOListElementIsolatePropertyKeys, ...HTMLObjectElementIsolate_1.HTMLObjectElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, ...HTMLParagraphElementIsolate_1.HTMLParagraphElementIsolatePropertyKeys, ...HTMLParamElementIsolate_1.HTMLParamElementIsolatePropertyKeys, ...HTMLPreElementIsolate_1.HTMLPreElementIsolatePropertyKeys, ...HTMLProgressElementIsolate_1.HTMLProgressElementIsolatePropertyKeys, ...HTMLQuoteElementIsolate_1.HTMLQuoteElementIsolatePropertyKeys, ...HTMLScriptElementIsolate_1.HTMLScriptElementIsolatePropertyKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolatePropertyKeys, ...HTMLSlotElementIsolate_1.HTMLSlotElementIsolatePropertyKeys, ...HTMLSourceElementIsolate_1.HTMLSourceElementIsolatePropertyKeys, ...HTMLSpanElementIsolate_1.HTMLSpanElementIsolatePropertyKeys, ...HTMLStyleElementIsolate_1.HTMLStyleElementIsolatePropertyKeys, ...HTMLTableCaptionElementIsolate_1.HTMLTableCaptionElementIsolatePropertyKeys, ...HTMLTableCellElementIsolate_1.HTMLTableCellElementIsolatePropertyKeys, ...HTMLTableColElementIsolate_1.HTMLTableColElementIsolatePropertyKeys, ...HTMLTableElementIsolate_1.HTMLTableElementIsolatePropertyKeys, ...HTMLTableRowElementIsolate_1.HTMLTableRowElementIsolatePropertyKeys, ...HTMLTableSectionElementIsolate_1.HTMLTableSectionElementIsolatePropertyKeys, ...HTMLTemplateElementIsolate_1.HTMLTemplateElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolatePropertyKeys, ...HTMLTimeElementIsolate_1.HTMLTimeElementIsolatePropertyKeys, ...HTMLTitleElementIsolate_1.HTMLTitleElementIsolatePropertyKeys, ...HTMLTrackElementIsolate_1.HTMLTrackElementIsolatePropertyKeys, ...HTMLUListElementIsolate_1.HTMLUListElementIsolatePropertyKeys, ...HTMLVideoElementIsolate_1.HTMLVideoElementIsolatePropertyKeys, ...LinkStyle_1.LinkStylePropertyKeys, ...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodePropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, ...ShadowRootIsolate_1.ShadowRootIsolatePropertyKeys, ...Slotable_1.SlotablePropertyKeys, ...TextIsolate_1.TextIsolatePropertyKeys, ...XPathEvaluatorBase_1.XPathEvaluatorBasePropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];
exports.SuperNodeConstantKeys = [...AttrIsolate_1.AttrIsolateConstantKeys, ...CharacterDataIsolate_1.CharacterDataIsolateConstantKeys, ...DocumentFragmentIsolate_1.DocumentFragmentIsolateConstantKeys, ...DocumentIsolate_1.DocumentIsolateConstantKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootConstantKeys, ...DocumentTypeIsolate_1.DocumentTypeIsolateConstantKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStyleConstantKeys, ...ElementContentEditable_1.ElementContentEditableConstantKeys, ...ElementIsolate_1.ElementIsolateConstantKeys, ...HTMLAnchorElementIsolate_1.HTMLAnchorElementIsolateConstantKeys, ...HTMLAreaElementIsolate_1.HTMLAreaElementIsolateConstantKeys, ...HTMLAudioElementIsolate_1.HTMLAudioElementIsolateConstantKeys, ...HTMLBRElementIsolate_1.HTMLBRElementIsolateConstantKeys, ...HTMLBaseElementIsolate_1.HTMLBaseElementIsolateConstantKeys, ...HTMLBodyElementIsolate_1.HTMLBodyElementIsolateConstantKeys, ...HTMLButtonElementIsolate_1.HTMLButtonElementIsolateConstantKeys, ...HTMLCanvasElementIsolate_1.HTMLCanvasElementIsolateConstantKeys, ...HTMLDListElementIsolate_1.HTMLDListElementIsolateConstantKeys, ...HTMLDataElementIsolate_1.HTMLDataElementIsolateConstantKeys, ...HTMLDataListElementIsolate_1.HTMLDataListElementIsolateConstantKeys, ...HTMLDetailsElementIsolate_1.HTMLDetailsElementIsolateConstantKeys, ...HTMLDialogElementIsolate_1.HTMLDialogElementIsolateConstantKeys, ...HTMLDirectoryElementIsolate_1.HTMLDirectoryElementIsolateConstantKeys, ...HTMLDivElementIsolate_1.HTMLDivElementIsolateConstantKeys, ...HTMLDocumentIsolate_1.HTMLDocumentIsolateConstantKeys, ...HTMLElementIsolate_1.HTMLElementIsolateConstantKeys, ...HTMLEmbedElementIsolate_1.HTMLEmbedElementIsolateConstantKeys, ...HTMLFieldSetElementIsolate_1.HTMLFieldSetElementIsolateConstantKeys, ...HTMLFontElementIsolate_1.HTMLFontElementIsolateConstantKeys, ...HTMLFormElementIsolate_1.HTMLFormElementIsolateConstantKeys, ...HTMLFrameElementIsolate_1.HTMLFrameElementIsolateConstantKeys, ...HTMLFrameSetElementIsolate_1.HTMLFrameSetElementIsolateConstantKeys, ...HTMLHRElementIsolate_1.HTMLHRElementIsolateConstantKeys, ...HTMLHeadElementIsolate_1.HTMLHeadElementIsolateConstantKeys, ...HTMLHeadingElementIsolate_1.HTMLHeadingElementIsolateConstantKeys, ...HTMLHtmlElementIsolate_1.HTMLHtmlElementIsolateConstantKeys, ...HTMLHyperlinkElementUtils_1.HTMLHyperlinkElementUtilsConstantKeys, ...HTMLIFrameElementIsolate_1.HTMLIFrameElementIsolateConstantKeys, ...HTMLImageElementIsolate_1.HTMLImageElementIsolateConstantKeys, ...HTMLInputElementIsolate_1.HTMLInputElementIsolateConstantKeys, ...HTMLLIElementIsolate_1.HTMLLIElementIsolateConstantKeys, ...HTMLLabelElementIsolate_1.HTMLLabelElementIsolateConstantKeys, ...HTMLLegendElementIsolate_1.HTMLLegendElementIsolateConstantKeys, ...HTMLLinkElementIsolate_1.HTMLLinkElementIsolateConstantKeys, ...HTMLMapElementIsolate_1.HTMLMapElementIsolateConstantKeys, ...HTMLMediaElementIsolate_1.HTMLMediaElementIsolateConstantKeys, ...HTMLMetaElementIsolate_1.HTMLMetaElementIsolateConstantKeys, ...HTMLMeterElementIsolate_1.HTMLMeterElementIsolateConstantKeys, ...HTMLModElementIsolate_1.HTMLModElementIsolateConstantKeys, ...HTMLOListElementIsolate_1.HTMLOListElementIsolateConstantKeys, ...HTMLObjectElementIsolate_1.HTMLObjectElementIsolateConstantKeys, ...HTMLOptGroupElementIsolate_1.HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolate_1.HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys, ...HTMLParagraphElementIsolate_1.HTMLParagraphElementIsolateConstantKeys, ...HTMLParamElementIsolate_1.HTMLParamElementIsolateConstantKeys, ...HTMLPreElementIsolate_1.HTMLPreElementIsolateConstantKeys, ...HTMLProgressElementIsolate_1.HTMLProgressElementIsolateConstantKeys, ...HTMLQuoteElementIsolate_1.HTMLQuoteElementIsolateConstantKeys, ...HTMLScriptElementIsolate_1.HTMLScriptElementIsolateConstantKeys, ...HTMLSelectElementIsolate_1.HTMLSelectElementIsolateConstantKeys, ...HTMLSlotElementIsolate_1.HTMLSlotElementIsolateConstantKeys, ...HTMLSourceElementIsolate_1.HTMLSourceElementIsolateConstantKeys, ...HTMLSpanElementIsolate_1.HTMLSpanElementIsolateConstantKeys, ...HTMLStyleElementIsolate_1.HTMLStyleElementIsolateConstantKeys, ...HTMLTableCaptionElementIsolate_1.HTMLTableCaptionElementIsolateConstantKeys, ...HTMLTableCellElementIsolate_1.HTMLTableCellElementIsolateConstantKeys, ...HTMLTableColElementIsolate_1.HTMLTableColElementIsolateConstantKeys, ...HTMLTableElementIsolate_1.HTMLTableElementIsolateConstantKeys, ...HTMLTableRowElementIsolate_1.HTMLTableRowElementIsolateConstantKeys, ...HTMLTableSectionElementIsolate_1.HTMLTableSectionElementIsolateConstantKeys, ...HTMLTemplateElementIsolate_1.HTMLTemplateElementIsolateConstantKeys, ...HTMLTextAreaElementIsolate_1.HTMLTextAreaElementIsolateConstantKeys, ...HTMLTimeElementIsolate_1.HTMLTimeElementIsolateConstantKeys, ...HTMLTitleElementIsolate_1.HTMLTitleElementIsolateConstantKeys, ...HTMLTrackElementIsolate_1.HTMLTrackElementIsolateConstantKeys, ...HTMLUListElementIsolate_1.HTMLUListElementIsolateConstantKeys, ...HTMLVideoElementIsolate_1.HTMLVideoElementIsolateConstantKeys, ...LinkStyle_1.LinkStyleConstantKeys, ...NodeIsolate_1.NodeIsolateConstantKeys, ...NonDocumentTypeChildNode_1.NonDocumentTypeChildNodeConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys, ...ShadowRootIsolate_1.ShadowRootIsolateConstantKeys, ...Slotable_1.SlotableConstantKeys, ...TextIsolate_1.TextIsolateConstantKeys, ...XPathEvaluatorBase_1.XPathEvaluatorBaseConstantKeys, 'ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
//# sourceMappingURL=SuperNode.js.map