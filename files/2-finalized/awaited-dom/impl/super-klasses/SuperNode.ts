import StateMachine from '../../base/StateMachine';
import { ISuperNode, ISuperElement, ISuperNodeList, ISuperDocument } from '../../base/interfaces/super';
import { IGetRootNodeOptions } from '../../base/interfaces/official';
import { SuperNodeGenerator, ISuperNodeProperties } from '../../base/super-klasses/SuperNode';
import { createSuperNodeList, createSuperNode, createSuperDocument, createSuperElement } from '../create';
import AttrIsolate from '../isolate-mixins/AttrIsolate';
import CharacterDataIsolate from '../isolate-mixins/CharacterDataIsolate';
import DocumentFragmentIsolate from '../isolate-mixins/DocumentFragmentIsolate';
import DocumentIsolate from '../isolate-mixins/DocumentIsolate';
import DocumentOrShadowRoot from '../official-mixins/DocumentOrShadowRoot';
import DocumentTypeIsolate from '../isolate-mixins/DocumentTypeIsolate';
import ElementCSSInlineStyle from '../official-mixins/ElementCSSInlineStyle';
import ElementContentEditable from '../official-mixins/ElementContentEditable';
import ElementIsolate from '../isolate-mixins/ElementIsolate';
import HTMLAnchorElementIsolate from '../isolate-mixins/HTMLAnchorElementIsolate';
import HTMLAreaElementIsolate from '../isolate-mixins/HTMLAreaElementIsolate';
import HTMLAudioElementIsolate from '../isolate-mixins/HTMLAudioElementIsolate';
import HTMLBRElementIsolate from '../isolate-mixins/HTMLBRElementIsolate';
import HTMLBaseElementIsolate from '../isolate-mixins/HTMLBaseElementIsolate';
import HTMLBodyElementIsolate from '../isolate-mixins/HTMLBodyElementIsolate';
import HTMLButtonElementIsolate from '../isolate-mixins/HTMLButtonElementIsolate';
import HTMLCanvasElementIsolate from '../isolate-mixins/HTMLCanvasElementIsolate';
import HTMLDListElementIsolate from '../isolate-mixins/HTMLDListElementIsolate';
import HTMLDataElementIsolate from '../isolate-mixins/HTMLDataElementIsolate';
import HTMLDataListElementIsolate from '../isolate-mixins/HTMLDataListElementIsolate';
import HTMLDetailsElementIsolate from '../isolate-mixins/HTMLDetailsElementIsolate';
import HTMLDialogElementIsolate from '../isolate-mixins/HTMLDialogElementIsolate';
import HTMLDirectoryElementIsolate from '../isolate-mixins/HTMLDirectoryElementIsolate';
import HTMLDivElementIsolate from '../isolate-mixins/HTMLDivElementIsolate';
import HTMLDocumentIsolate from '../isolate-mixins/HTMLDocumentIsolate';
import HTMLElementIsolate from '../isolate-mixins/HTMLElementIsolate';
import HTMLEmbedElementIsolate from '../isolate-mixins/HTMLEmbedElementIsolate';
import HTMLFieldSetElementIsolate from '../isolate-mixins/HTMLFieldSetElementIsolate';
import HTMLFontElementIsolate from '../isolate-mixins/HTMLFontElementIsolate';
import HTMLFormElementIsolate from '../isolate-mixins/HTMLFormElementIsolate';
import HTMLFrameElementIsolate from '../isolate-mixins/HTMLFrameElementIsolate';
import HTMLFrameSetElementIsolate from '../isolate-mixins/HTMLFrameSetElementIsolate';
import HTMLHRElementIsolate from '../isolate-mixins/HTMLHRElementIsolate';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import HTMLHeadingElementIsolate from '../isolate-mixins/HTMLHeadingElementIsolate';
import HTMLHtmlElementIsolate from '../isolate-mixins/HTMLHtmlElementIsolate';
import HTMLHyperlinkElementUtils from '../official-mixins/HTMLHyperlinkElementUtils';
import HTMLIFrameElementIsolate from '../isolate-mixins/HTMLIFrameElementIsolate';
import HTMLImageElementIsolate from '../isolate-mixins/HTMLImageElementIsolate';
import HTMLInputElementIsolate from '../isolate-mixins/HTMLInputElementIsolate';
import HTMLLIElementIsolate from '../isolate-mixins/HTMLLIElementIsolate';
import HTMLLabelElementIsolate from '../isolate-mixins/HTMLLabelElementIsolate';
import HTMLLegendElementIsolate from '../isolate-mixins/HTMLLegendElementIsolate';
import HTMLLinkElementIsolate from '../isolate-mixins/HTMLLinkElementIsolate';
import HTMLMapElementIsolate from '../isolate-mixins/HTMLMapElementIsolate';
import HTMLMediaElementIsolate from '../isolate-mixins/HTMLMediaElementIsolate';
import HTMLMetaElementIsolate from '../isolate-mixins/HTMLMetaElementIsolate';
import HTMLMeterElementIsolate from '../isolate-mixins/HTMLMeterElementIsolate';
import HTMLModElementIsolate from '../isolate-mixins/HTMLModElementIsolate';
import HTMLOListElementIsolate from '../isolate-mixins/HTMLOListElementIsolate';
import HTMLObjectElementIsolate from '../isolate-mixins/HTMLObjectElementIsolate';
import HTMLOptGroupElementIsolate from '../isolate-mixins/HTMLOptGroupElementIsolate';
import HTMLOptionElementIsolate from '../isolate-mixins/HTMLOptionElementIsolate';
import HTMLOrSVGElement from '../official-mixins/HTMLOrSVGElement';
import HTMLParagraphElementIsolate from '../isolate-mixins/HTMLParagraphElementIsolate';
import HTMLParamElementIsolate from '../isolate-mixins/HTMLParamElementIsolate';
import HTMLPreElementIsolate from '../isolate-mixins/HTMLPreElementIsolate';
import HTMLProgressElementIsolate from '../isolate-mixins/HTMLProgressElementIsolate';
import HTMLQuoteElementIsolate from '../isolate-mixins/HTMLQuoteElementIsolate';
import HTMLScriptElementIsolate from '../isolate-mixins/HTMLScriptElementIsolate';
import HTMLSelectElementIsolate from '../isolate-mixins/HTMLSelectElementIsolate';
import HTMLSlotElementIsolate from '../isolate-mixins/HTMLSlotElementIsolate';
import HTMLSourceElementIsolate from '../isolate-mixins/HTMLSourceElementIsolate';
import HTMLSpanElementIsolate from '../isolate-mixins/HTMLSpanElementIsolate';
import HTMLStyleElementIsolate from '../isolate-mixins/HTMLStyleElementIsolate';
import HTMLTableCaptionElementIsolate from '../isolate-mixins/HTMLTableCaptionElementIsolate';
import HTMLTableCellElementIsolate from '../isolate-mixins/HTMLTableCellElementIsolate';
import HTMLTableColElementIsolate from '../isolate-mixins/HTMLTableColElementIsolate';
import HTMLTableElementIsolate from '../isolate-mixins/HTMLTableElementIsolate';
import HTMLTableRowElementIsolate from '../isolate-mixins/HTMLTableRowElementIsolate';
import HTMLTableSectionElementIsolate from '../isolate-mixins/HTMLTableSectionElementIsolate';
import HTMLTemplateElementIsolate from '../isolate-mixins/HTMLTemplateElementIsolate';
import HTMLTextAreaElementIsolate from '../isolate-mixins/HTMLTextAreaElementIsolate';
import HTMLTimeElementIsolate from '../isolate-mixins/HTMLTimeElementIsolate';
import HTMLTitleElementIsolate from '../isolate-mixins/HTMLTitleElementIsolate';
import HTMLTrackElementIsolate from '../isolate-mixins/HTMLTrackElementIsolate';
import HTMLUListElementIsolate from '../isolate-mixins/HTMLUListElementIsolate';
import HTMLVideoElementIsolate from '../isolate-mixins/HTMLVideoElementIsolate';
import LinkStyle from '../official-mixins/LinkStyle';
import NodeIsolate from '../isolate-mixins/NodeIsolate';
import NonDocumentTypeChildNode from '../official-mixins/NonDocumentTypeChildNode';
import NonElementParentNode from '../official-mixins/NonElementParentNode';
import ParentNode from '../official-mixins/ParentNode';
import ShadowRootIsolate from '../isolate-mixins/ShadowRootIsolate';
import Slotable from '../official-mixins/Slotable';
import TextIsolate from '../isolate-mixins/TextIsolate';
import XPathEvaluatorBase from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperNode, ISuperNodeProperties>();
const SuperNodeBaseClass = SuperNodeGenerator(AttrIsolate, CharacterDataIsolate, DocumentFragmentIsolate, DocumentIsolate, DocumentOrShadowRoot, DocumentTypeIsolate, ElementCSSInlineStyle, ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLDocumentIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLHyperlinkElementUtils, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, NonElementParentNode, ParentNode, ShadowRootIsolate, Slotable, TextIsolate, XPathEvaluatorBase);

export default class SuperNode extends SuperNodeBaseClass implements ISuperNode {
  constructor() {
    super();
  }

  // properties

  public get childNodes(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'childNodes'), awaitedOptions);
  }

  public get firstChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'firstChild'), awaitedOptions);
  }

  public get lastChild(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'lastChild'), awaitedOptions);
  }

  public get nextSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'nextSibling'), awaitedOptions);
  }

  public get ownerDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'ownerDocument'), awaitedOptions);
  }

  public get parentElement(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'parentElement'), awaitedOptions);
  }

  public get parentNode(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'parentNode'), awaitedOptions);
  }

  public get previousSibling(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'previousSibling'), awaitedOptions);
  }

  // methods

  public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addMethod(this, 'getRootNode', options), awaitedOptions);
  }
}
