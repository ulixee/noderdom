import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ISuperHTMLElement, ISuperElement } from '../interfaces/super';
import { IElementCSSInlineStyle, IElementContentEditable, IHTMLHyperlinkElementUtils, IHTMLOrSVGElement, ILinkStyle, INonDocumentTypeChildNode, IParentNode, ISlotable } from '../interfaces/official';
import { IElementIsolate, IHTMLAnchorElementIsolate, IHTMLAreaElementIsolate, IHTMLAudioElementIsolate, IHTMLBRElementIsolate, IHTMLBaseElementIsolate, IHTMLBodyElementIsolate, IHTMLButtonElementIsolate, IHTMLCanvasElementIsolate, IHTMLDListElementIsolate, IHTMLDataElementIsolate, IHTMLDataListElementIsolate, IHTMLDetailsElementIsolate, IHTMLDialogElementIsolate, IHTMLDirectoryElementIsolate, IHTMLDivElementIsolate, IHTMLElementIsolate, IHTMLEmbedElementIsolate, IHTMLFieldSetElementIsolate, IHTMLFontElementIsolate, IHTMLFormElementIsolate, IHTMLFrameElementIsolate, IHTMLFrameSetElementIsolate, IHTMLHRElementIsolate, IHTMLHeadElementIsolate, IHTMLHeadingElementIsolate, IHTMLHtmlElementIsolate, IHTMLIFrameElementIsolate, IHTMLImageElementIsolate, IHTMLInputElementIsolate, IHTMLLIElementIsolate, IHTMLLabelElementIsolate, IHTMLLegendElementIsolate, IHTMLLinkElementIsolate, IHTMLMapElementIsolate, IHTMLMediaElementIsolate, IHTMLMetaElementIsolate, IHTMLMeterElementIsolate, IHTMLModElementIsolate, IHTMLOListElementIsolate, IHTMLObjectElementIsolate, IHTMLOptGroupElementIsolate, IHTMLOptionElementIsolate, IHTMLParagraphElementIsolate, IHTMLParamElementIsolate, IHTMLPreElementIsolate, IHTMLProgressElementIsolate, IHTMLQuoteElementIsolate, IHTMLScriptElementIsolate, IHTMLSelectElementIsolate, IHTMLSlotElementIsolate, IHTMLSourceElementIsolate, IHTMLSpanElementIsolate, IHTMLStyleElementIsolate, IHTMLTableCaptionElementIsolate, IHTMLTableCellElementIsolate, IHTMLTableColElementIsolate, IHTMLTableElementIsolate, IHTMLTableRowElementIsolate, IHTMLTableSectionElementIsolate, IHTMLTemplateElementIsolate, IHTMLTextAreaElementIsolate, IHTMLTimeElementIsolate, IHTMLTitleElementIsolate, IHTMLTrackElementIsolate, IHTMLUListElementIsolate, IHTMLVideoElementIsolate, INodeIsolate } from '../interfaces/isolate';
import { IElementCSSInlineStyleProperties, ElementCSSInlineStylePropertyKeys, ElementCSSInlineStyleConstantKeys } from '../official-mixins/ElementCSSInlineStyle';
import { IElementContentEditableProperties, ElementContentEditablePropertyKeys, ElementContentEditableConstantKeys } from '../official-mixins/ElementContentEditable';
import { IElementIsolateProperties, ElementIsolatePropertyKeys, ElementIsolateConstantKeys } from '../isolate-mixins/ElementIsolate';
import { IHTMLAnchorElementIsolateProperties, HTMLAnchorElementIsolatePropertyKeys, HTMLAnchorElementIsolateConstantKeys } from '../isolate-mixins/HTMLAnchorElementIsolate';
import { IHTMLAreaElementIsolateProperties, HTMLAreaElementIsolatePropertyKeys, HTMLAreaElementIsolateConstantKeys } from '../isolate-mixins/HTMLAreaElementIsolate';
import { IHTMLAudioElementIsolateProperties, HTMLAudioElementIsolatePropertyKeys, HTMLAudioElementIsolateConstantKeys } from '../isolate-mixins/HTMLAudioElementIsolate';
import { IHTMLBRElementIsolateProperties, HTMLBRElementIsolatePropertyKeys, HTMLBRElementIsolateConstantKeys } from '../isolate-mixins/HTMLBRElementIsolate';
import { IHTMLBaseElementIsolateProperties, HTMLBaseElementIsolatePropertyKeys, HTMLBaseElementIsolateConstantKeys } from '../isolate-mixins/HTMLBaseElementIsolate';
import { IHTMLBodyElementIsolateProperties, HTMLBodyElementIsolatePropertyKeys, HTMLBodyElementIsolateConstantKeys } from '../isolate-mixins/HTMLBodyElementIsolate';
import { IHTMLButtonElementIsolateProperties, HTMLButtonElementIsolatePropertyKeys, HTMLButtonElementIsolateConstantKeys } from '../isolate-mixins/HTMLButtonElementIsolate';
import { IHTMLCanvasElementIsolateProperties, HTMLCanvasElementIsolatePropertyKeys, HTMLCanvasElementIsolateConstantKeys } from '../isolate-mixins/HTMLCanvasElementIsolate';
import { IHTMLDListElementIsolateProperties, HTMLDListElementIsolatePropertyKeys, HTMLDListElementIsolateConstantKeys } from '../isolate-mixins/HTMLDListElementIsolate';
import { IHTMLDataElementIsolateProperties, HTMLDataElementIsolatePropertyKeys, HTMLDataElementIsolateConstantKeys } from '../isolate-mixins/HTMLDataElementIsolate';
import { IHTMLDataListElementIsolateProperties, HTMLDataListElementIsolatePropertyKeys, HTMLDataListElementIsolateConstantKeys } from '../isolate-mixins/HTMLDataListElementIsolate';
import { IHTMLDetailsElementIsolateProperties, HTMLDetailsElementIsolatePropertyKeys, HTMLDetailsElementIsolateConstantKeys } from '../isolate-mixins/HTMLDetailsElementIsolate';
import { IHTMLDialogElementIsolateProperties, HTMLDialogElementIsolatePropertyKeys, HTMLDialogElementIsolateConstantKeys } from '../isolate-mixins/HTMLDialogElementIsolate';
import { IHTMLDirectoryElementIsolateProperties, HTMLDirectoryElementIsolatePropertyKeys, HTMLDirectoryElementIsolateConstantKeys } from '../isolate-mixins/HTMLDirectoryElementIsolate';
import { IHTMLDivElementIsolateProperties, HTMLDivElementIsolatePropertyKeys, HTMLDivElementIsolateConstantKeys } from '../isolate-mixins/HTMLDivElementIsolate';
import { IHTMLElementIsolateProperties, HTMLElementIsolatePropertyKeys, HTMLElementIsolateConstantKeys } from '../isolate-mixins/HTMLElementIsolate';
import { IHTMLEmbedElementIsolateProperties, HTMLEmbedElementIsolatePropertyKeys, HTMLEmbedElementIsolateConstantKeys } from '../isolate-mixins/HTMLEmbedElementIsolate';
import { IHTMLFieldSetElementIsolateProperties, HTMLFieldSetElementIsolatePropertyKeys, HTMLFieldSetElementIsolateConstantKeys } from '../isolate-mixins/HTMLFieldSetElementIsolate';
import { IHTMLFontElementIsolateProperties, HTMLFontElementIsolatePropertyKeys, HTMLFontElementIsolateConstantKeys } from '../isolate-mixins/HTMLFontElementIsolate';
import { IHTMLFormElementIsolateProperties, HTMLFormElementIsolatePropertyKeys, HTMLFormElementIsolateConstantKeys } from '../isolate-mixins/HTMLFormElementIsolate';
import { IHTMLFrameElementIsolateProperties, HTMLFrameElementIsolatePropertyKeys, HTMLFrameElementIsolateConstantKeys } from '../isolate-mixins/HTMLFrameElementIsolate';
import { IHTMLFrameSetElementIsolateProperties, HTMLFrameSetElementIsolatePropertyKeys, HTMLFrameSetElementIsolateConstantKeys } from '../isolate-mixins/HTMLFrameSetElementIsolate';
import { IHTMLHRElementIsolateProperties, HTMLHRElementIsolatePropertyKeys, HTMLHRElementIsolateConstantKeys } from '../isolate-mixins/HTMLHRElementIsolate';
import { IHTMLHeadElementIsolateProperties, HTMLHeadElementIsolatePropertyKeys, HTMLHeadElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadElementIsolate';
import { IHTMLHeadingElementIsolateProperties, HTMLHeadingElementIsolatePropertyKeys, HTMLHeadingElementIsolateConstantKeys } from '../isolate-mixins/HTMLHeadingElementIsolate';
import { IHTMLHtmlElementIsolateProperties, HTMLHtmlElementIsolatePropertyKeys, HTMLHtmlElementIsolateConstantKeys } from '../isolate-mixins/HTMLHtmlElementIsolate';
import { IHTMLHyperlinkElementUtilsProperties, HTMLHyperlinkElementUtilsPropertyKeys, HTMLHyperlinkElementUtilsConstantKeys } from '../official-mixins/HTMLHyperlinkElementUtils';
import { IHTMLIFrameElementIsolateProperties, HTMLIFrameElementIsolatePropertyKeys, HTMLIFrameElementIsolateConstantKeys } from '../isolate-mixins/HTMLIFrameElementIsolate';
import { IHTMLImageElementIsolateProperties, HTMLImageElementIsolatePropertyKeys, HTMLImageElementIsolateConstantKeys } from '../isolate-mixins/HTMLImageElementIsolate';
import { IHTMLInputElementIsolateProperties, HTMLInputElementIsolatePropertyKeys, HTMLInputElementIsolateConstantKeys } from '../isolate-mixins/HTMLInputElementIsolate';
import { IHTMLLIElementIsolateProperties, HTMLLIElementIsolatePropertyKeys, HTMLLIElementIsolateConstantKeys } from '../isolate-mixins/HTMLLIElementIsolate';
import { IHTMLLabelElementIsolateProperties, HTMLLabelElementIsolatePropertyKeys, HTMLLabelElementIsolateConstantKeys } from '../isolate-mixins/HTMLLabelElementIsolate';
import { IHTMLLegendElementIsolateProperties, HTMLLegendElementIsolatePropertyKeys, HTMLLegendElementIsolateConstantKeys } from '../isolate-mixins/HTMLLegendElementIsolate';
import { IHTMLLinkElementIsolateProperties, HTMLLinkElementIsolatePropertyKeys, HTMLLinkElementIsolateConstantKeys } from '../isolate-mixins/HTMLLinkElementIsolate';
import { IHTMLMapElementIsolateProperties, HTMLMapElementIsolatePropertyKeys, HTMLMapElementIsolateConstantKeys } from '../isolate-mixins/HTMLMapElementIsolate';
import { IHTMLMediaElementIsolateProperties, HTMLMediaElementIsolatePropertyKeys, HTMLMediaElementIsolateConstantKeys } from '../isolate-mixins/HTMLMediaElementIsolate';
import { IHTMLMetaElementIsolateProperties, HTMLMetaElementIsolatePropertyKeys, HTMLMetaElementIsolateConstantKeys } from '../isolate-mixins/HTMLMetaElementIsolate';
import { IHTMLMeterElementIsolateProperties, HTMLMeterElementIsolatePropertyKeys, HTMLMeterElementIsolateConstantKeys } from '../isolate-mixins/HTMLMeterElementIsolate';
import { IHTMLModElementIsolateProperties, HTMLModElementIsolatePropertyKeys, HTMLModElementIsolateConstantKeys } from '../isolate-mixins/HTMLModElementIsolate';
import { IHTMLOListElementIsolateProperties, HTMLOListElementIsolatePropertyKeys, HTMLOListElementIsolateConstantKeys } from '../isolate-mixins/HTMLOListElementIsolate';
import { IHTMLObjectElementIsolateProperties, HTMLObjectElementIsolatePropertyKeys, HTMLObjectElementIsolateConstantKeys } from '../isolate-mixins/HTMLObjectElementIsolate';
import { IHTMLOptGroupElementIsolateProperties, HTMLOptGroupElementIsolatePropertyKeys, HTMLOptGroupElementIsolateConstantKeys } from '../isolate-mixins/HTMLOptGroupElementIsolate';
import { IHTMLOptionElementIsolateProperties, HTMLOptionElementIsolatePropertyKeys, HTMLOptionElementIsolateConstantKeys } from '../isolate-mixins/HTMLOptionElementIsolate';
import { IHTMLOrSVGElementProperties, HTMLOrSVGElementPropertyKeys, HTMLOrSVGElementConstantKeys } from '../official-mixins/HTMLOrSVGElement';
import { IHTMLParagraphElementIsolateProperties, HTMLParagraphElementIsolatePropertyKeys, HTMLParagraphElementIsolateConstantKeys } from '../isolate-mixins/HTMLParagraphElementIsolate';
import { IHTMLParamElementIsolateProperties, HTMLParamElementIsolatePropertyKeys, HTMLParamElementIsolateConstantKeys } from '../isolate-mixins/HTMLParamElementIsolate';
import { IHTMLPreElementIsolateProperties, HTMLPreElementIsolatePropertyKeys, HTMLPreElementIsolateConstantKeys } from '../isolate-mixins/HTMLPreElementIsolate';
import { IHTMLProgressElementIsolateProperties, HTMLProgressElementIsolatePropertyKeys, HTMLProgressElementIsolateConstantKeys } from '../isolate-mixins/HTMLProgressElementIsolate';
import { IHTMLQuoteElementIsolateProperties, HTMLQuoteElementIsolatePropertyKeys, HTMLQuoteElementIsolateConstantKeys } from '../isolate-mixins/HTMLQuoteElementIsolate';
import { IHTMLScriptElementIsolateProperties, HTMLScriptElementIsolatePropertyKeys, HTMLScriptElementIsolateConstantKeys } from '../isolate-mixins/HTMLScriptElementIsolate';
import { IHTMLSelectElementIsolateProperties, HTMLSelectElementIsolatePropertyKeys, HTMLSelectElementIsolateConstantKeys } from '../isolate-mixins/HTMLSelectElementIsolate';
import { IHTMLSlotElementIsolateProperties, HTMLSlotElementIsolatePropertyKeys, HTMLSlotElementIsolateConstantKeys } from '../isolate-mixins/HTMLSlotElementIsolate';
import { IHTMLSourceElementIsolateProperties, HTMLSourceElementIsolatePropertyKeys, HTMLSourceElementIsolateConstantKeys } from '../isolate-mixins/HTMLSourceElementIsolate';
import { IHTMLSpanElementIsolateProperties, HTMLSpanElementIsolatePropertyKeys, HTMLSpanElementIsolateConstantKeys } from '../isolate-mixins/HTMLSpanElementIsolate';
import { IHTMLStyleElementIsolateProperties, HTMLStyleElementIsolatePropertyKeys, HTMLStyleElementIsolateConstantKeys } from '../isolate-mixins/HTMLStyleElementIsolate';
import { IHTMLTableCaptionElementIsolateProperties, HTMLTableCaptionElementIsolatePropertyKeys, HTMLTableCaptionElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableCaptionElementIsolate';
import { IHTMLTableCellElementIsolateProperties, HTMLTableCellElementIsolatePropertyKeys, HTMLTableCellElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableCellElementIsolate';
import { IHTMLTableColElementIsolateProperties, HTMLTableColElementIsolatePropertyKeys, HTMLTableColElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableColElementIsolate';
import { IHTMLTableElementIsolateProperties, HTMLTableElementIsolatePropertyKeys, HTMLTableElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableElementIsolate';
import { IHTMLTableRowElementIsolateProperties, HTMLTableRowElementIsolatePropertyKeys, HTMLTableRowElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableRowElementIsolate';
import { IHTMLTableSectionElementIsolateProperties, HTMLTableSectionElementIsolatePropertyKeys, HTMLTableSectionElementIsolateConstantKeys } from '../isolate-mixins/HTMLTableSectionElementIsolate';
import { IHTMLTemplateElementIsolateProperties, HTMLTemplateElementIsolatePropertyKeys, HTMLTemplateElementIsolateConstantKeys } from '../isolate-mixins/HTMLTemplateElementIsolate';
import { IHTMLTextAreaElementIsolateProperties, HTMLTextAreaElementIsolatePropertyKeys, HTMLTextAreaElementIsolateConstantKeys } from '../isolate-mixins/HTMLTextAreaElementIsolate';
import { IHTMLTimeElementIsolateProperties, HTMLTimeElementIsolatePropertyKeys, HTMLTimeElementIsolateConstantKeys } from '../isolate-mixins/HTMLTimeElementIsolate';
import { IHTMLTitleElementIsolateProperties, HTMLTitleElementIsolatePropertyKeys, HTMLTitleElementIsolateConstantKeys } from '../isolate-mixins/HTMLTitleElementIsolate';
import { IHTMLTrackElementIsolateProperties, HTMLTrackElementIsolatePropertyKeys, HTMLTrackElementIsolateConstantKeys } from '../isolate-mixins/HTMLTrackElementIsolate';
import { IHTMLUListElementIsolateProperties, HTMLUListElementIsolatePropertyKeys, HTMLUListElementIsolateConstantKeys } from '../isolate-mixins/HTMLUListElementIsolate';
import { IHTMLVideoElementIsolateProperties, HTMLVideoElementIsolatePropertyKeys, HTMLVideoElementIsolateConstantKeys } from '../isolate-mixins/HTMLVideoElementIsolate';
import { ILinkStyleProperties, LinkStylePropertyKeys, LinkStyleConstantKeys } from '../official-mixins/LinkStyle';
import { INodeIsolateProperties, NodeIsolatePropertyKeys, NodeIsolateConstantKeys } from '../isolate-mixins/NodeIsolate';
import { INonDocumentTypeChildNodeProperties, NonDocumentTypeChildNodePropertyKeys, NonDocumentTypeChildNodeConstantKeys } from '../official-mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';
import { ISlotableProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../official-mixins/Slotable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLElement>('SuperHTMLElement', getState, setState);
export const nodeFactory = new NodeFactory<ISuperHTMLElement>(getState, setState, awaitedHandler);

export function SuperHTMLElementGenerator(ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, ElementIsolate: Constructable<IElementIsolate>, HTMLAnchorElementIsolate: Constructable<IHTMLAnchorElementIsolate>, HTMLAreaElementIsolate: Constructable<IHTMLAreaElementIsolate>, HTMLAudioElementIsolate: Constructable<IHTMLAudioElementIsolate>, HTMLBRElementIsolate: Constructable<IHTMLBRElementIsolate>, HTMLBaseElementIsolate: Constructable<IHTMLBaseElementIsolate>, HTMLBodyElementIsolate: Constructable<IHTMLBodyElementIsolate>, HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>, HTMLCanvasElementIsolate: Constructable<IHTMLCanvasElementIsolate>, HTMLDListElementIsolate: Constructable<IHTMLDListElementIsolate>, HTMLDataElementIsolate: Constructable<IHTMLDataElementIsolate>, HTMLDataListElementIsolate: Constructable<IHTMLDataListElementIsolate>, HTMLDetailsElementIsolate: Constructable<IHTMLDetailsElementIsolate>, HTMLDialogElementIsolate: Constructable<IHTMLDialogElementIsolate>, HTMLDirectoryElementIsolate: Constructable<IHTMLDirectoryElementIsolate>, HTMLDivElementIsolate: Constructable<IHTMLDivElementIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLEmbedElementIsolate: Constructable<IHTMLEmbedElementIsolate>, HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>, HTMLFontElementIsolate: Constructable<IHTMLFontElementIsolate>, HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>, HTMLFrameElementIsolate: Constructable<IHTMLFrameElementIsolate>, HTMLFrameSetElementIsolate: Constructable<IHTMLFrameSetElementIsolate>, HTMLHRElementIsolate: Constructable<IHTMLHRElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLHeadingElementIsolate: Constructable<IHTMLHeadingElementIsolate>, HTMLHtmlElementIsolate: Constructable<IHTMLHtmlElementIsolate>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>, HTMLIFrameElementIsolate: Constructable<IHTMLIFrameElementIsolate>, HTMLImageElementIsolate: Constructable<IHTMLImageElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLLIElementIsolate: Constructable<IHTMLLIElementIsolate>, HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>, HTMLLegendElementIsolate: Constructable<IHTMLLegendElementIsolate>, HTMLLinkElementIsolate: Constructable<IHTMLLinkElementIsolate>, HTMLMapElementIsolate: Constructable<IHTMLMapElementIsolate>, HTMLMediaElementIsolate: Constructable<IHTMLMediaElementIsolate>, HTMLMetaElementIsolate: Constructable<IHTMLMetaElementIsolate>, HTMLMeterElementIsolate: Constructable<IHTMLMeterElementIsolate>, HTMLModElementIsolate: Constructable<IHTMLModElementIsolate>, HTMLOListElementIsolate: Constructable<IHTMLOListElementIsolate>, HTMLObjectElementIsolate: Constructable<IHTMLObjectElementIsolate>, HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>, HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, HTMLParagraphElementIsolate: Constructable<IHTMLParagraphElementIsolate>, HTMLParamElementIsolate: Constructable<IHTMLParamElementIsolate>, HTMLPreElementIsolate: Constructable<IHTMLPreElementIsolate>, HTMLProgressElementIsolate: Constructable<IHTMLProgressElementIsolate>, HTMLQuoteElementIsolate: Constructable<IHTMLQuoteElementIsolate>, HTMLScriptElementIsolate: Constructable<IHTMLScriptElementIsolate>, HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>, HTMLSlotElementIsolate: Constructable<IHTMLSlotElementIsolate>, HTMLSourceElementIsolate: Constructable<IHTMLSourceElementIsolate>, HTMLSpanElementIsolate: Constructable<IHTMLSpanElementIsolate>, HTMLStyleElementIsolate: Constructable<IHTMLStyleElementIsolate>, HTMLTableCaptionElementIsolate: Constructable<IHTMLTableCaptionElementIsolate>, HTMLTableCellElementIsolate: Constructable<IHTMLTableCellElementIsolate>, HTMLTableColElementIsolate: Constructable<IHTMLTableColElementIsolate>, HTMLTableElementIsolate: Constructable<IHTMLTableElementIsolate>, HTMLTableRowElementIsolate: Constructable<IHTMLTableRowElementIsolate>, HTMLTableSectionElementIsolate: Constructable<IHTMLTableSectionElementIsolate>, HTMLTemplateElementIsolate: Constructable<IHTMLTemplateElementIsolate>, HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>, HTMLTimeElementIsolate: Constructable<IHTMLTimeElementIsolate>, HTMLTitleElementIsolate: Constructable<IHTMLTitleElementIsolate>, HTMLTrackElementIsolate: Constructable<IHTMLTrackElementIsolate>, HTMLUListElementIsolate: Constructable<IHTMLUListElementIsolate>, HTMLVideoElementIsolate: Constructable<IHTMLVideoElementIsolate>, LinkStyle: Constructable<ILinkStyle>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, Slotable: Constructable<ISlotable>) {
  const Parent = (ClassMixer(ElementCSSInlineStyle, [ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLHyperlinkElementUtils, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, ParentNode, Slotable]) as unknown) as Constructable<IElementCSSInlineStyle & IElementContentEditable & IElementIsolate & IHTMLAnchorElementIsolate & IHTMLAreaElementIsolate & IHTMLAudioElementIsolate & IHTMLBRElementIsolate & IHTMLBaseElementIsolate & IHTMLBodyElementIsolate & IHTMLButtonElementIsolate & IHTMLCanvasElementIsolate & IHTMLDListElementIsolate & IHTMLDataElementIsolate & IHTMLDataListElementIsolate & IHTMLDetailsElementIsolate & IHTMLDialogElementIsolate & IHTMLDirectoryElementIsolate & IHTMLDivElementIsolate & IHTMLElementIsolate & IHTMLEmbedElementIsolate & IHTMLFieldSetElementIsolate & IHTMLFontElementIsolate & IHTMLFormElementIsolate & IHTMLFrameElementIsolate & IHTMLFrameSetElementIsolate & IHTMLHRElementIsolate & IHTMLHeadElementIsolate & IHTMLHeadingElementIsolate & IHTMLHtmlElementIsolate & IHTMLHyperlinkElementUtils & IHTMLIFrameElementIsolate & IHTMLImageElementIsolate & IHTMLInputElementIsolate & IHTMLLIElementIsolate & IHTMLLabelElementIsolate & IHTMLLegendElementIsolate & IHTMLLinkElementIsolate & IHTMLMapElementIsolate & IHTMLMediaElementIsolate & IHTMLMetaElementIsolate & IHTMLMeterElementIsolate & IHTMLModElementIsolate & IHTMLOListElementIsolate & IHTMLObjectElementIsolate & IHTMLOptGroupElementIsolate & IHTMLOptionElementIsolate & IHTMLOrSVGElement & IHTMLParagraphElementIsolate & IHTMLParamElementIsolate & IHTMLPreElementIsolate & IHTMLProgressElementIsolate & IHTMLQuoteElementIsolate & IHTMLScriptElementIsolate & IHTMLSelectElementIsolate & IHTMLSlotElementIsolate & IHTMLSourceElementIsolate & IHTMLSpanElementIsolate & IHTMLStyleElementIsolate & IHTMLTableCaptionElementIsolate & IHTMLTableCellElementIsolate & IHTMLTableColElementIsolate & IHTMLTableElementIsolate & IHTMLTableRowElementIsolate & IHTMLTableSectionElementIsolate & IHTMLTemplateElementIsolate & IHTMLTextAreaElementIsolate & IHTMLTimeElementIsolate & IHTMLTitleElementIsolate & IHTMLTrackElementIsolate & IHTMLUListElementIsolate & IHTMLVideoElementIsolate & ILinkStyle & INodeIsolate & INonDocumentTypeChildNode & IParentNode & ISlotable>;

  return class SuperHTMLElement extends Parent implements ISuperHTMLElement, PromiseLike<ISuperHTMLElement> {
    constructor() {
      super();
      initializeConstantsAndProperties<SuperHTMLElement>(this, SuperHTMLElementConstantKeys, SuperHTMLElementPropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperHTMLElement',
      });
    }

    // properties

    public get accessKey(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'accessKey', false);
    }

    public get autoCapitalize(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'autoCapitalize', false);
    }

    public get dir(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'dir', false);
    }

    public get draggable(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'draggable', false);
    }

    public get hidden(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'hidden', false);
    }

    public get inert(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'inert', false);
    }

    public get innerText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'innerText', false);
    }

    public get lang(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'lang', false);
    }

    public get offsetHeight(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetHeight', false);
    }

    public get offsetLeft(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetLeft', false);
    }

    public get offsetParent(): ISuperElement {
      throw new Error('SuperHTMLElement.offsetParent getter not implemented');
    }

    public get offsetTop(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetTop', false);
    }

    public get offsetWidth(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'offsetWidth', false);
    }

    public get spellcheck(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'spellcheck', false);
    }

    public get title(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'title', false);
    }

    public get translate(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'translate', false);
    }

    // methods

    public click(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'click', []);
    }

    public then<TResult1 = ISuperHTMLElement, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLElement) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLElementProperties extends IElementCSSInlineStyleProperties, IElementContentEditableProperties, IElementIsolateProperties, IHTMLAnchorElementIsolateProperties, IHTMLAreaElementIsolateProperties, IHTMLAudioElementIsolateProperties, IHTMLBRElementIsolateProperties, IHTMLBaseElementIsolateProperties, IHTMLBodyElementIsolateProperties, IHTMLButtonElementIsolateProperties, IHTMLCanvasElementIsolateProperties, IHTMLDListElementIsolateProperties, IHTMLDataElementIsolateProperties, IHTMLDataListElementIsolateProperties, IHTMLDetailsElementIsolateProperties, IHTMLDialogElementIsolateProperties, IHTMLDirectoryElementIsolateProperties, IHTMLDivElementIsolateProperties, IHTMLElementIsolateProperties, IHTMLEmbedElementIsolateProperties, IHTMLFieldSetElementIsolateProperties, IHTMLFontElementIsolateProperties, IHTMLFormElementIsolateProperties, IHTMLFrameElementIsolateProperties, IHTMLFrameSetElementIsolateProperties, IHTMLHRElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLHeadingElementIsolateProperties, IHTMLHtmlElementIsolateProperties, IHTMLHyperlinkElementUtilsProperties, IHTMLIFrameElementIsolateProperties, IHTMLImageElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLLIElementIsolateProperties, IHTMLLabelElementIsolateProperties, IHTMLLegendElementIsolateProperties, IHTMLLinkElementIsolateProperties, IHTMLMapElementIsolateProperties, IHTMLMediaElementIsolateProperties, IHTMLMetaElementIsolateProperties, IHTMLMeterElementIsolateProperties, IHTMLModElementIsolateProperties, IHTMLOListElementIsolateProperties, IHTMLObjectElementIsolateProperties, IHTMLOptGroupElementIsolateProperties, IHTMLOptionElementIsolateProperties, IHTMLOrSVGElementProperties, IHTMLParagraphElementIsolateProperties, IHTMLParamElementIsolateProperties, IHTMLPreElementIsolateProperties, IHTMLProgressElementIsolateProperties, IHTMLQuoteElementIsolateProperties, IHTMLScriptElementIsolateProperties, IHTMLSelectElementIsolateProperties, IHTMLSlotElementIsolateProperties, IHTMLSourceElementIsolateProperties, IHTMLSpanElementIsolateProperties, IHTMLStyleElementIsolateProperties, IHTMLTableCaptionElementIsolateProperties, IHTMLTableCellElementIsolateProperties, IHTMLTableColElementIsolateProperties, IHTMLTableElementIsolateProperties, IHTMLTableRowElementIsolateProperties, IHTMLTableSectionElementIsolateProperties, IHTMLTemplateElementIsolateProperties, IHTMLTextAreaElementIsolateProperties, IHTMLTimeElementIsolateProperties, IHTMLTitleElementIsolateProperties, IHTMLTrackElementIsolateProperties, IHTMLUListElementIsolateProperties, IHTMLVideoElementIsolateProperties, ILinkStyleProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ISlotableProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly accessKey?: Promise<string>;
  readonly autoCapitalize?: Promise<string>;
  readonly dir?: Promise<string>;
  readonly draggable?: Promise<boolean>;
  readonly hidden?: Promise<boolean>;
  readonly inert?: Promise<boolean>;
  readonly innerText?: Promise<string>;
  readonly lang?: Promise<string>;
  readonly offsetHeight?: Promise<number>;
  readonly offsetLeft?: Promise<number>;
  readonly offsetParent?: ISuperElement;
  readonly offsetTop?: Promise<number>;
  readonly offsetWidth?: Promise<number>;
  readonly spellcheck?: Promise<boolean>;
  readonly title?: Promise<string>;
  readonly translate?: Promise<boolean>;
}

export const SuperHTMLElementPropertyKeys = [...ElementCSSInlineStylePropertyKeys, ...ElementContentEditablePropertyKeys, ...ElementIsolatePropertyKeys, ...HTMLAnchorElementIsolatePropertyKeys, ...HTMLAreaElementIsolatePropertyKeys, ...HTMLAudioElementIsolatePropertyKeys, ...HTMLBRElementIsolatePropertyKeys, ...HTMLBaseElementIsolatePropertyKeys, ...HTMLBodyElementIsolatePropertyKeys, ...HTMLButtonElementIsolatePropertyKeys, ...HTMLCanvasElementIsolatePropertyKeys, ...HTMLDListElementIsolatePropertyKeys, ...HTMLDataElementIsolatePropertyKeys, ...HTMLDataListElementIsolatePropertyKeys, ...HTMLDetailsElementIsolatePropertyKeys, ...HTMLDialogElementIsolatePropertyKeys, ...HTMLDirectoryElementIsolatePropertyKeys, ...HTMLDivElementIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLEmbedElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFontElementIsolatePropertyKeys, ...HTMLFormElementIsolatePropertyKeys, ...HTMLFrameElementIsolatePropertyKeys, ...HTMLFrameSetElementIsolatePropertyKeys, ...HTMLHRElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLHeadingElementIsolatePropertyKeys, ...HTMLHtmlElementIsolatePropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, ...HTMLIFrameElementIsolatePropertyKeys, ...HTMLImageElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLLIElementIsolatePropertyKeys, ...HTMLLabelElementIsolatePropertyKeys, ...HTMLLegendElementIsolatePropertyKeys, ...HTMLLinkElementIsolatePropertyKeys, ...HTMLMapElementIsolatePropertyKeys, ...HTMLMediaElementIsolatePropertyKeys, ...HTMLMetaElementIsolatePropertyKeys, ...HTMLMeterElementIsolatePropertyKeys, ...HTMLModElementIsolatePropertyKeys, ...HTMLOListElementIsolatePropertyKeys, ...HTMLObjectElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...HTMLParagraphElementIsolatePropertyKeys, ...HTMLParamElementIsolatePropertyKeys, ...HTMLPreElementIsolatePropertyKeys, ...HTMLProgressElementIsolatePropertyKeys, ...HTMLQuoteElementIsolatePropertyKeys, ...HTMLScriptElementIsolatePropertyKeys, ...HTMLSelectElementIsolatePropertyKeys, ...HTMLSlotElementIsolatePropertyKeys, ...HTMLSourceElementIsolatePropertyKeys, ...HTMLSpanElementIsolatePropertyKeys, ...HTMLStyleElementIsolatePropertyKeys, ...HTMLTableCaptionElementIsolatePropertyKeys, ...HTMLTableCellElementIsolatePropertyKeys, ...HTMLTableColElementIsolatePropertyKeys, ...HTMLTableElementIsolatePropertyKeys, ...HTMLTableRowElementIsolatePropertyKeys, ...HTMLTableSectionElementIsolatePropertyKeys, ...HTMLTemplateElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolatePropertyKeys, ...HTMLTimeElementIsolatePropertyKeys, ...HTMLTitleElementIsolatePropertyKeys, ...HTMLTrackElementIsolatePropertyKeys, ...HTMLUListElementIsolatePropertyKeys, ...HTMLVideoElementIsolatePropertyKeys, ...LinkStylePropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...ParentNodePropertyKeys, ...SlotablePropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];

export const SuperHTMLElementConstantKeys = [...ElementCSSInlineStyleConstantKeys, ...ElementContentEditableConstantKeys, ...ElementIsolateConstantKeys, ...HTMLAnchorElementIsolateConstantKeys, ...HTMLAreaElementIsolateConstantKeys, ...HTMLAudioElementIsolateConstantKeys, ...HTMLBRElementIsolateConstantKeys, ...HTMLBaseElementIsolateConstantKeys, ...HTMLBodyElementIsolateConstantKeys, ...HTMLButtonElementIsolateConstantKeys, ...HTMLCanvasElementIsolateConstantKeys, ...HTMLDListElementIsolateConstantKeys, ...HTMLDataElementIsolateConstantKeys, ...HTMLDataListElementIsolateConstantKeys, ...HTMLDetailsElementIsolateConstantKeys, ...HTMLDialogElementIsolateConstantKeys, ...HTMLDirectoryElementIsolateConstantKeys, ...HTMLDivElementIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLEmbedElementIsolateConstantKeys, ...HTMLFieldSetElementIsolateConstantKeys, ...HTMLFontElementIsolateConstantKeys, ...HTMLFormElementIsolateConstantKeys, ...HTMLFrameElementIsolateConstantKeys, ...HTMLFrameSetElementIsolateConstantKeys, ...HTMLHRElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLHeadingElementIsolateConstantKeys, ...HTMLHtmlElementIsolateConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys, ...HTMLIFrameElementIsolateConstantKeys, ...HTMLImageElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLLIElementIsolateConstantKeys, ...HTMLLabelElementIsolateConstantKeys, ...HTMLLegendElementIsolateConstantKeys, ...HTMLLinkElementIsolateConstantKeys, ...HTMLMapElementIsolateConstantKeys, ...HTMLMediaElementIsolateConstantKeys, ...HTMLMetaElementIsolateConstantKeys, ...HTMLMeterElementIsolateConstantKeys, ...HTMLModElementIsolateConstantKeys, ...HTMLOListElementIsolateConstantKeys, ...HTMLObjectElementIsolateConstantKeys, ...HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...HTMLParagraphElementIsolateConstantKeys, ...HTMLParamElementIsolateConstantKeys, ...HTMLPreElementIsolateConstantKeys, ...HTMLProgressElementIsolateConstantKeys, ...HTMLQuoteElementIsolateConstantKeys, ...HTMLScriptElementIsolateConstantKeys, ...HTMLSelectElementIsolateConstantKeys, ...HTMLSlotElementIsolateConstantKeys, ...HTMLSourceElementIsolateConstantKeys, ...HTMLSpanElementIsolateConstantKeys, ...HTMLStyleElementIsolateConstantKeys, ...HTMLTableCaptionElementIsolateConstantKeys, ...HTMLTableCellElementIsolateConstantKeys, ...HTMLTableColElementIsolateConstantKeys, ...HTMLTableElementIsolateConstantKeys, ...HTMLTableRowElementIsolateConstantKeys, ...HTMLTableSectionElementIsolateConstantKeys, ...HTMLTemplateElementIsolateConstantKeys, ...HTMLTextAreaElementIsolateConstantKeys, ...HTMLTimeElementIsolateConstantKeys, ...HTMLTitleElementIsolateConstantKeys, ...HTMLTrackElementIsolateConstantKeys, ...HTMLUListElementIsolateConstantKeys, ...HTMLVideoElementIsolateConstantKeys, ...LinkStyleConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...ParentNodeConstantKeys, ...SlotableConstantKeys];
