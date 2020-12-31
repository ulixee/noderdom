import StateMachine from '../../base/StateMachine';
import { ISuperElement, ISuperHTMLCollection } from '../../base/interfaces/super';
import { INamedNodeMap, IDOMTokenList, IShadowRoot } from '../../base/interfaces/official';
import { SuperElementGenerator, ISuperElementProperties } from '../../base/super-klasses/SuperElement';
import { createNamedNodeMap, createDOMTokenList, createShadowRoot, createSuperElement, createSuperHTMLCollection } from '../create';
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
import ParentNode from '../official-mixins/ParentNode';
import Slotable from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperElement, ISuperElementProperties>();
const SuperElementBaseClass = SuperElementGenerator(ElementCSSInlineStyle, ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, ParentNode, Slotable);

export default class SuperElement extends SuperElementBaseClass implements ISuperElement {
  constructor() {
    super();
  }

  // properties

  public get attributes(): INamedNodeMap {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createNamedNodeMap(awaitedPath.addProperty('attributes'), awaitedOptions);
  }

  public get classList(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('classList'), awaitedOptions);
  }

  public get part(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty('part'), awaitedOptions);
  }

  public get shadowRoot(): IShadowRoot {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createShadowRoot(awaitedPath.addProperty('shadowRoot'), awaitedOptions);
  }

  // methods

  public closest(selectors: string): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addMethod('closest', selectors), awaitedOptions);
  }

  public getElementsByClassName(classNames: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByClassName', classNames), awaitedOptions);
  }

  public getElementsByTagName(qualifiedName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagName', qualifiedName), awaitedOptions);
  }

  public getElementsByTagNameNS(namespace: string | null, localName: string): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addMethod('getElementsByTagNameNS', namespace, localName), awaitedOptions);
  }
}
