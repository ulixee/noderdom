import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { ISuperNode, ISuperNodeList, ISuperDocument, ISuperElement } from '../interfaces/super';
import { IAttrIsolate, ICharacterDataIsolate, IDocumentFragmentIsolate, IDocumentIsolate, IDocumentTypeIsolate, IElementIsolate, IHTMLAnchorElementIsolate, IHTMLAreaElementIsolate, IHTMLAudioElementIsolate, IHTMLBRElementIsolate, IHTMLBaseElementIsolate, IHTMLBodyElementIsolate, IHTMLButtonElementIsolate, IHTMLCanvasElementIsolate, IHTMLDListElementIsolate, IHTMLDataElementIsolate, IHTMLDataListElementIsolate, IHTMLDetailsElementIsolate, IHTMLDialogElementIsolate, IHTMLDirectoryElementIsolate, IHTMLDivElementIsolate, IHTMLDocumentIsolate, IHTMLElementIsolate, IHTMLEmbedElementIsolate, IHTMLFieldSetElementIsolate, IHTMLFontElementIsolate, IHTMLFormElementIsolate, IHTMLFrameElementIsolate, IHTMLFrameSetElementIsolate, IHTMLHRElementIsolate, IHTMLHeadElementIsolate, IHTMLHeadingElementIsolate, IHTMLHtmlElementIsolate, IHTMLIFrameElementIsolate, IHTMLImageElementIsolate, IHTMLInputElementIsolate, IHTMLLIElementIsolate, IHTMLLabelElementIsolate, IHTMLLegendElementIsolate, IHTMLLinkElementIsolate, IHTMLMapElementIsolate, IHTMLMediaElementIsolate, IHTMLMetaElementIsolate, IHTMLMeterElementIsolate, IHTMLModElementIsolate, IHTMLOListElementIsolate, IHTMLObjectElementIsolate, IHTMLOptGroupElementIsolate, IHTMLOptionElementIsolate, IHTMLParagraphElementIsolate, IHTMLParamElementIsolate, IHTMLPreElementIsolate, IHTMLProgressElementIsolate, IHTMLQuoteElementIsolate, IHTMLScriptElementIsolate, IHTMLSelectElementIsolate, IHTMLSlotElementIsolate, IHTMLSourceElementIsolate, IHTMLSpanElementIsolate, IHTMLStyleElementIsolate, IHTMLTableCaptionElementIsolate, IHTMLTableCellElementIsolate, IHTMLTableColElementIsolate, IHTMLTableElementIsolate, IHTMLTableRowElementIsolate, IHTMLTableSectionElementIsolate, IHTMLTemplateElementIsolate, IHTMLTextAreaElementIsolate, IHTMLTimeElementIsolate, IHTMLTitleElementIsolate, IHTMLTrackElementIsolate, IHTMLUListElementIsolate, IHTMLVideoElementIsolate, INodeIsolate, IShadowRootIsolate, ITextIsolate } from '../interfaces/isolate';
import { IDocumentOrShadowRoot, IElementCSSInlineStyle, IElementContentEditable, IHTMLHyperlinkElementUtils, IHTMLOrSVGElement, ILinkStyle, INonDocumentTypeChildNode, INonElementParentNode, IParentNode, ISlotable, IXPathEvaluatorBase, IGetRootNodeOptions } from '../interfaces/official';
import { IAttrIsolateProperties, AttrIsolatePropertyKeys, AttrIsolateConstantKeys } from '../isolate-mixins/AttrIsolate';
import { ICharacterDataIsolateProperties, CharacterDataIsolatePropertyKeys, CharacterDataIsolateConstantKeys } from '../isolate-mixins/CharacterDataIsolate';
import { IDocumentFragmentIsolateProperties, DocumentFragmentIsolatePropertyKeys, DocumentFragmentIsolateConstantKeys } from '../isolate-mixins/DocumentFragmentIsolate';
import { IDocumentIsolateProperties, DocumentIsolatePropertyKeys, DocumentIsolateConstantKeys } from '../isolate-mixins/DocumentIsolate';
import { IDocumentOrShadowRootProperties, DocumentOrShadowRootPropertyKeys, DocumentOrShadowRootConstantKeys } from '../official-mixins/DocumentOrShadowRoot';
import { IDocumentTypeIsolateProperties, DocumentTypeIsolatePropertyKeys, DocumentTypeIsolateConstantKeys } from '../isolate-mixins/DocumentTypeIsolate';
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
import { IHTMLDocumentIsolateProperties, HTMLDocumentIsolatePropertyKeys, HTMLDocumentIsolateConstantKeys } from '../isolate-mixins/HTMLDocumentIsolate';
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
import { INonElementParentNodeProperties, NonElementParentNodePropertyKeys, NonElementParentNodeConstantKeys } from '../official-mixins/NonElementParentNode';
import { IParentNodeProperties, ParentNodePropertyKeys, ParentNodeConstantKeys } from '../official-mixins/ParentNode';
import { IShadowRootIsolateProperties, ShadowRootIsolatePropertyKeys, ShadowRootIsolateConstantKeys } from '../isolate-mixins/ShadowRootIsolate';
import { ISlotableProperties, SlotablePropertyKeys, SlotableConstantKeys } from '../official-mixins/Slotable';
import { ITextIsolateProperties, TextIsolatePropertyKeys, TextIsolateConstantKeys } from '../isolate-mixins/TextIsolate';
import { IXPathEvaluatorBaseProperties, XPathEvaluatorBasePropertyKeys, XPathEvaluatorBaseConstantKeys } from '../official-mixins/XPathEvaluatorBase';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperNode, ISuperNodeProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperNode>('SuperNode', getState, setState);
export const nodeFactory = new NodeFactory<ISuperNode>(getState, setState, awaitedHandler);

export function SuperNodeGenerator(AttrIsolate: Constructable<IAttrIsolate>, CharacterDataIsolate: Constructable<ICharacterDataIsolate>, DocumentFragmentIsolate: Constructable<IDocumentFragmentIsolate>, DocumentIsolate: Constructable<IDocumentIsolate>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>, DocumentTypeIsolate: Constructable<IDocumentTypeIsolate>, ElementCSSInlineStyle: Constructable<IElementCSSInlineStyle>, ElementContentEditable: Constructable<IElementContentEditable>, ElementIsolate: Constructable<IElementIsolate>, HTMLAnchorElementIsolate: Constructable<IHTMLAnchorElementIsolate>, HTMLAreaElementIsolate: Constructable<IHTMLAreaElementIsolate>, HTMLAudioElementIsolate: Constructable<IHTMLAudioElementIsolate>, HTMLBRElementIsolate: Constructable<IHTMLBRElementIsolate>, HTMLBaseElementIsolate: Constructable<IHTMLBaseElementIsolate>, HTMLBodyElementIsolate: Constructable<IHTMLBodyElementIsolate>, HTMLButtonElementIsolate: Constructable<IHTMLButtonElementIsolate>, HTMLCanvasElementIsolate: Constructable<IHTMLCanvasElementIsolate>, HTMLDListElementIsolate: Constructable<IHTMLDListElementIsolate>, HTMLDataElementIsolate: Constructable<IHTMLDataElementIsolate>, HTMLDataListElementIsolate: Constructable<IHTMLDataListElementIsolate>, HTMLDetailsElementIsolate: Constructable<IHTMLDetailsElementIsolate>, HTMLDialogElementIsolate: Constructable<IHTMLDialogElementIsolate>, HTMLDirectoryElementIsolate: Constructable<IHTMLDirectoryElementIsolate>, HTMLDivElementIsolate: Constructable<IHTMLDivElementIsolate>, HTMLDocumentIsolate: Constructable<IHTMLDocumentIsolate>, HTMLElementIsolate: Constructable<IHTMLElementIsolate>, HTMLEmbedElementIsolate: Constructable<IHTMLEmbedElementIsolate>, HTMLFieldSetElementIsolate: Constructable<IHTMLFieldSetElementIsolate>, HTMLFontElementIsolate: Constructable<IHTMLFontElementIsolate>, HTMLFormElementIsolate: Constructable<IHTMLFormElementIsolate>, HTMLFrameElementIsolate: Constructable<IHTMLFrameElementIsolate>, HTMLFrameSetElementIsolate: Constructable<IHTMLFrameSetElementIsolate>, HTMLHRElementIsolate: Constructable<IHTMLHRElementIsolate>, HTMLHeadElementIsolate: Constructable<IHTMLHeadElementIsolate>, HTMLHeadingElementIsolate: Constructable<IHTMLHeadingElementIsolate>, HTMLHtmlElementIsolate: Constructable<IHTMLHtmlElementIsolate>, HTMLHyperlinkElementUtils: Constructable<IHTMLHyperlinkElementUtils>, HTMLIFrameElementIsolate: Constructable<IHTMLIFrameElementIsolate>, HTMLImageElementIsolate: Constructable<IHTMLImageElementIsolate>, HTMLInputElementIsolate: Constructable<IHTMLInputElementIsolate>, HTMLLIElementIsolate: Constructable<IHTMLLIElementIsolate>, HTMLLabelElementIsolate: Constructable<IHTMLLabelElementIsolate>, HTMLLegendElementIsolate: Constructable<IHTMLLegendElementIsolate>, HTMLLinkElementIsolate: Constructable<IHTMLLinkElementIsolate>, HTMLMapElementIsolate: Constructable<IHTMLMapElementIsolate>, HTMLMediaElementIsolate: Constructable<IHTMLMediaElementIsolate>, HTMLMetaElementIsolate: Constructable<IHTMLMetaElementIsolate>, HTMLMeterElementIsolate: Constructable<IHTMLMeterElementIsolate>, HTMLModElementIsolate: Constructable<IHTMLModElementIsolate>, HTMLOListElementIsolate: Constructable<IHTMLOListElementIsolate>, HTMLObjectElementIsolate: Constructable<IHTMLObjectElementIsolate>, HTMLOptGroupElementIsolate: Constructable<IHTMLOptGroupElementIsolate>, HTMLOptionElementIsolate: Constructable<IHTMLOptionElementIsolate>, HTMLOrSVGElement: Constructable<IHTMLOrSVGElement>, HTMLParagraphElementIsolate: Constructable<IHTMLParagraphElementIsolate>, HTMLParamElementIsolate: Constructable<IHTMLParamElementIsolate>, HTMLPreElementIsolate: Constructable<IHTMLPreElementIsolate>, HTMLProgressElementIsolate: Constructable<IHTMLProgressElementIsolate>, HTMLQuoteElementIsolate: Constructable<IHTMLQuoteElementIsolate>, HTMLScriptElementIsolate: Constructable<IHTMLScriptElementIsolate>, HTMLSelectElementIsolate: Constructable<IHTMLSelectElementIsolate>, HTMLSlotElementIsolate: Constructable<IHTMLSlotElementIsolate>, HTMLSourceElementIsolate: Constructable<IHTMLSourceElementIsolate>, HTMLSpanElementIsolate: Constructable<IHTMLSpanElementIsolate>, HTMLStyleElementIsolate: Constructable<IHTMLStyleElementIsolate>, HTMLTableCaptionElementIsolate: Constructable<IHTMLTableCaptionElementIsolate>, HTMLTableCellElementIsolate: Constructable<IHTMLTableCellElementIsolate>, HTMLTableColElementIsolate: Constructable<IHTMLTableColElementIsolate>, HTMLTableElementIsolate: Constructable<IHTMLTableElementIsolate>, HTMLTableRowElementIsolate: Constructable<IHTMLTableRowElementIsolate>, HTMLTableSectionElementIsolate: Constructable<IHTMLTableSectionElementIsolate>, HTMLTemplateElementIsolate: Constructable<IHTMLTemplateElementIsolate>, HTMLTextAreaElementIsolate: Constructable<IHTMLTextAreaElementIsolate>, HTMLTimeElementIsolate: Constructable<IHTMLTimeElementIsolate>, HTMLTitleElementIsolate: Constructable<IHTMLTitleElementIsolate>, HTMLTrackElementIsolate: Constructable<IHTMLTrackElementIsolate>, HTMLUListElementIsolate: Constructable<IHTMLUListElementIsolate>, HTMLVideoElementIsolate: Constructable<IHTMLVideoElementIsolate>, LinkStyle: Constructable<ILinkStyle>, NodeIsolate: Constructable<INodeIsolate>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>, ShadowRootIsolate: Constructable<IShadowRootIsolate>, Slotable: Constructable<ISlotable>, TextIsolate: Constructable<ITextIsolate>, XPathEvaluatorBase: Constructable<IXPathEvaluatorBase>) {
  const Parent = (ClassMixer(AttrIsolate, [CharacterDataIsolate, DocumentFragmentIsolate, DocumentIsolate, DocumentOrShadowRoot, DocumentTypeIsolate, ElementCSSInlineStyle, ElementContentEditable, ElementIsolate, HTMLAnchorElementIsolate, HTMLAreaElementIsolate, HTMLAudioElementIsolate, HTMLBRElementIsolate, HTMLBaseElementIsolate, HTMLBodyElementIsolate, HTMLButtonElementIsolate, HTMLCanvasElementIsolate, HTMLDListElementIsolate, HTMLDataElementIsolate, HTMLDataListElementIsolate, HTMLDetailsElementIsolate, HTMLDialogElementIsolate, HTMLDirectoryElementIsolate, HTMLDivElementIsolate, HTMLDocumentIsolate, HTMLElementIsolate, HTMLEmbedElementIsolate, HTMLFieldSetElementIsolate, HTMLFontElementIsolate, HTMLFormElementIsolate, HTMLFrameElementIsolate, HTMLFrameSetElementIsolate, HTMLHRElementIsolate, HTMLHeadElementIsolate, HTMLHeadingElementIsolate, HTMLHtmlElementIsolate, HTMLHyperlinkElementUtils, HTMLIFrameElementIsolate, HTMLImageElementIsolate, HTMLInputElementIsolate, HTMLLIElementIsolate, HTMLLabelElementIsolate, HTMLLegendElementIsolate, HTMLLinkElementIsolate, HTMLMapElementIsolate, HTMLMediaElementIsolate, HTMLMetaElementIsolate, HTMLMeterElementIsolate, HTMLModElementIsolate, HTMLOListElementIsolate, HTMLObjectElementIsolate, HTMLOptGroupElementIsolate, HTMLOptionElementIsolate, HTMLOrSVGElement, HTMLParagraphElementIsolate, HTMLParamElementIsolate, HTMLPreElementIsolate, HTMLProgressElementIsolate, HTMLQuoteElementIsolate, HTMLScriptElementIsolate, HTMLSelectElementIsolate, HTMLSlotElementIsolate, HTMLSourceElementIsolate, HTMLSpanElementIsolate, HTMLStyleElementIsolate, HTMLTableCaptionElementIsolate, HTMLTableCellElementIsolate, HTMLTableColElementIsolate, HTMLTableElementIsolate, HTMLTableRowElementIsolate, HTMLTableSectionElementIsolate, HTMLTemplateElementIsolate, HTMLTextAreaElementIsolate, HTMLTimeElementIsolate, HTMLTitleElementIsolate, HTMLTrackElementIsolate, HTMLUListElementIsolate, HTMLVideoElementIsolate, LinkStyle, NodeIsolate, NonDocumentTypeChildNode, NonElementParentNode, ParentNode, ShadowRootIsolate, Slotable, TextIsolate, XPathEvaluatorBase]) as unknown) as Constructable<IAttrIsolate & ICharacterDataIsolate & IDocumentFragmentIsolate & IDocumentIsolate & IDocumentOrShadowRoot & IDocumentTypeIsolate & IElementCSSInlineStyle & IElementContentEditable & IElementIsolate & IHTMLAnchorElementIsolate & IHTMLAreaElementIsolate & IHTMLAudioElementIsolate & IHTMLBRElementIsolate & IHTMLBaseElementIsolate & IHTMLBodyElementIsolate & IHTMLButtonElementIsolate & IHTMLCanvasElementIsolate & IHTMLDListElementIsolate & IHTMLDataElementIsolate & IHTMLDataListElementIsolate & IHTMLDetailsElementIsolate & IHTMLDialogElementIsolate & IHTMLDirectoryElementIsolate & IHTMLDivElementIsolate & IHTMLDocumentIsolate & IHTMLElementIsolate & IHTMLEmbedElementIsolate & IHTMLFieldSetElementIsolate & IHTMLFontElementIsolate & IHTMLFormElementIsolate & IHTMLFrameElementIsolate & IHTMLFrameSetElementIsolate & IHTMLHRElementIsolate & IHTMLHeadElementIsolate & IHTMLHeadingElementIsolate & IHTMLHtmlElementIsolate & IHTMLHyperlinkElementUtils & IHTMLIFrameElementIsolate & IHTMLImageElementIsolate & IHTMLInputElementIsolate & IHTMLLIElementIsolate & IHTMLLabelElementIsolate & IHTMLLegendElementIsolate & IHTMLLinkElementIsolate & IHTMLMapElementIsolate & IHTMLMediaElementIsolate & IHTMLMetaElementIsolate & IHTMLMeterElementIsolate & IHTMLModElementIsolate & IHTMLOListElementIsolate & IHTMLObjectElementIsolate & IHTMLOptGroupElementIsolate & IHTMLOptionElementIsolate & IHTMLOrSVGElement & IHTMLParagraphElementIsolate & IHTMLParamElementIsolate & IHTMLPreElementIsolate & IHTMLProgressElementIsolate & IHTMLQuoteElementIsolate & IHTMLScriptElementIsolate & IHTMLSelectElementIsolate & IHTMLSlotElementIsolate & IHTMLSourceElementIsolate & IHTMLSpanElementIsolate & IHTMLStyleElementIsolate & IHTMLTableCaptionElementIsolate & IHTMLTableCellElementIsolate & IHTMLTableColElementIsolate & IHTMLTableElementIsolate & IHTMLTableRowElementIsolate & IHTMLTableSectionElementIsolate & IHTMLTemplateElementIsolate & IHTMLTextAreaElementIsolate & IHTMLTimeElementIsolate & IHTMLTitleElementIsolate & IHTMLTrackElementIsolate & IHTMLUListElementIsolate & IHTMLVideoElementIsolate & ILinkStyle & INodeIsolate & INonDocumentTypeChildNode & INonElementParentNode & IParentNode & IShadowRootIsolate & ISlotable & ITextIsolate & IXPathEvaluatorBase>;

  return class SuperNode extends Parent implements ISuperNode, PromiseLike<ISuperNode> {
    public static readonly ATTRIBUTE_NODE: number = 2;
    public static readonly CDATA_SECTION_NODE: number = 4;
    public static readonly COMMENT_NODE: number = 8;
    public static readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public static readonly DOCUMENT_NODE: number = 9;
    public static readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public static readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public static readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public static readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public static readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public static readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public static readonly DOCUMENT_TYPE_NODE: number = 10;
    public static readonly ELEMENT_NODE: number = 1;
    public static readonly ENTITY_NODE: number = 6;
    public static readonly ENTITY_REFERENCE_NODE: number = 5;
    public static readonly NOTATION_NODE: number = 12;
    public static readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public static readonly TEXT_NODE: number = 3;

    public readonly ATTRIBUTE_NODE: number = 2;
    public readonly CDATA_SECTION_NODE: number = 4;
    public readonly COMMENT_NODE: number = 8;
    public readonly DOCUMENT_FRAGMENT_NODE: number = 11;
    public readonly DOCUMENT_NODE: number = 9;
    public readonly DOCUMENT_POSITION_CONTAINED_BY: number = 0x10;
    public readonly DOCUMENT_POSITION_CONTAINS: number = 0x08;
    public readonly DOCUMENT_POSITION_DISCONNECTED: number = 0x01;
    public readonly DOCUMENT_POSITION_FOLLOWING: number = 0x04;
    public readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number = 0x20;
    public readonly DOCUMENT_POSITION_PRECEDING: number = 0x02;
    public readonly DOCUMENT_TYPE_NODE: number = 10;
    public readonly ELEMENT_NODE: number = 1;
    public readonly ENTITY_NODE: number = 6;
    public readonly ENTITY_REFERENCE_NODE: number = 5;
    public readonly NOTATION_NODE: number = 12;
    public readonly PROCESSING_INSTRUCTION_NODE: number = 7;
    public readonly TEXT_NODE: number = 3;
    constructor() {
      super();
      initializeConstantsAndProperties<SuperNode>(this, SuperNodeConstantKeys, SuperNodePropertyKeys);
      setState(this, {
        createInstanceName: 'createSuperNode',
      });
    }

    // properties

    public get baseURI(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'baseURI', false);
    }

    public get childNodes(): ISuperNodeList {
      throw new Error('SuperNode.childNodes getter not implemented');
    }

    public get firstChild(): ISuperNode {
      throw new Error('SuperNode.firstChild getter not implemented');
    }

    public get isConnected(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'isConnected', false);
    }

    public get lastChild(): ISuperNode {
      throw new Error('SuperNode.lastChild getter not implemented');
    }

    public get nextSibling(): ISuperNode {
      throw new Error('SuperNode.nextSibling getter not implemented');
    }

    public get nodeName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'nodeName', false);
    }

    public get nodeType(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'nodeType', false);
    }

    public get nodeValue(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'nodeValue', true);
    }

    public get ownerDocument(): ISuperDocument {
      throw new Error('SuperNode.ownerDocument getter not implemented');
    }

    public get parentElement(): ISuperElement {
      throw new Error('SuperNode.parentElement getter not implemented');
    }

    public get parentNode(): ISuperNode {
      throw new Error('SuperNode.parentNode getter not implemented');
    }

    public get previousSibling(): ISuperNode {
      throw new Error('SuperNode.previousSibling getter not implemented');
    }

    public get textContent(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'textContent', true);
    }

    // methods

    public compareDocumentPosition(other: INodeIsolate): Promise<number> {
      return awaitedHandler.runMethod<number>(this, 'compareDocumentPosition', [other]);
    }

    public contains(other: INodeIsolate | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'contains', [other]);
    }

    public getRootNode(options?: IGetRootNodeOptions): ISuperNode {
      throw new Error('SuperNode.getRootNode not implemented');
    }

    public hasChildNodes(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasChildNodes', []);
    }

    public isDefaultNamespace(namespace: string | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isDefaultNamespace', [namespace]);
    }

    public isEqualNode(otherNode: INodeIsolate | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isEqualNode', [otherNode]);
    }

    public isSameNode(otherNode: INodeIsolate | null): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'isSameNode', [otherNode]);
    }

    public lookupNamespaceURI(prefix: string | null): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'lookupNamespaceURI', [prefix]);
    }

    public lookupPrefix(namespace: string | null): Promise<string | null> {
      return awaitedHandler.runMethod<string | null>(this, 'lookupPrefix', [namespace]);
    }

    public normalize(): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'normalize', []);
    }

    public then<TResult1 = ISuperNode, TResult2 = never>(onfulfilled?: ((value: ISuperNode) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperNodeProperties extends IAttrIsolateProperties, ICharacterDataIsolateProperties, IDocumentFragmentIsolateProperties, IDocumentIsolateProperties, IDocumentOrShadowRootProperties, IDocumentTypeIsolateProperties, IElementCSSInlineStyleProperties, IElementContentEditableProperties, IElementIsolateProperties, IHTMLAnchorElementIsolateProperties, IHTMLAreaElementIsolateProperties, IHTMLAudioElementIsolateProperties, IHTMLBRElementIsolateProperties, IHTMLBaseElementIsolateProperties, IHTMLBodyElementIsolateProperties, IHTMLButtonElementIsolateProperties, IHTMLCanvasElementIsolateProperties, IHTMLDListElementIsolateProperties, IHTMLDataElementIsolateProperties, IHTMLDataListElementIsolateProperties, IHTMLDetailsElementIsolateProperties, IHTMLDialogElementIsolateProperties, IHTMLDirectoryElementIsolateProperties, IHTMLDivElementIsolateProperties, IHTMLDocumentIsolateProperties, IHTMLElementIsolateProperties, IHTMLEmbedElementIsolateProperties, IHTMLFieldSetElementIsolateProperties, IHTMLFontElementIsolateProperties, IHTMLFormElementIsolateProperties, IHTMLFrameElementIsolateProperties, IHTMLFrameSetElementIsolateProperties, IHTMLHRElementIsolateProperties, IHTMLHeadElementIsolateProperties, IHTMLHeadingElementIsolateProperties, IHTMLHtmlElementIsolateProperties, IHTMLHyperlinkElementUtilsProperties, IHTMLIFrameElementIsolateProperties, IHTMLImageElementIsolateProperties, IHTMLInputElementIsolateProperties, IHTMLLIElementIsolateProperties, IHTMLLabelElementIsolateProperties, IHTMLLegendElementIsolateProperties, IHTMLLinkElementIsolateProperties, IHTMLMapElementIsolateProperties, IHTMLMediaElementIsolateProperties, IHTMLMetaElementIsolateProperties, IHTMLMeterElementIsolateProperties, IHTMLModElementIsolateProperties, IHTMLOListElementIsolateProperties, IHTMLObjectElementIsolateProperties, IHTMLOptGroupElementIsolateProperties, IHTMLOptionElementIsolateProperties, IHTMLOrSVGElementProperties, IHTMLParagraphElementIsolateProperties, IHTMLParamElementIsolateProperties, IHTMLPreElementIsolateProperties, IHTMLProgressElementIsolateProperties, IHTMLQuoteElementIsolateProperties, IHTMLScriptElementIsolateProperties, IHTMLSelectElementIsolateProperties, IHTMLSlotElementIsolateProperties, IHTMLSourceElementIsolateProperties, IHTMLSpanElementIsolateProperties, IHTMLStyleElementIsolateProperties, IHTMLTableCaptionElementIsolateProperties, IHTMLTableCellElementIsolateProperties, IHTMLTableColElementIsolateProperties, IHTMLTableElementIsolateProperties, IHTMLTableRowElementIsolateProperties, IHTMLTableSectionElementIsolateProperties, IHTMLTemplateElementIsolateProperties, IHTMLTextAreaElementIsolateProperties, IHTMLTimeElementIsolateProperties, IHTMLTitleElementIsolateProperties, IHTMLTrackElementIsolateProperties, IHTMLUListElementIsolateProperties, IHTMLVideoElementIsolateProperties, ILinkStyleProperties, INodeIsolateProperties, INonDocumentTypeChildNodeProperties, INonElementParentNodeProperties, IParentNodeProperties, IShadowRootIsolateProperties, ISlotableProperties, ITextIsolateProperties, IXPathEvaluatorBaseProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly baseURI?: Promise<string>;
  readonly childNodes?: ISuperNodeList;
  readonly firstChild?: ISuperNode;
  readonly isConnected?: Promise<boolean>;
  readonly lastChild?: ISuperNode;
  readonly nextSibling?: ISuperNode;
  readonly nodeName?: Promise<string>;
  readonly nodeType?: Promise<number>;
  readonly nodeValue?: Promise<string | null>;
  readonly ownerDocument?: ISuperDocument;
  readonly parentElement?: ISuperElement;
  readonly parentNode?: ISuperNode;
  readonly previousSibling?: ISuperNode;
  readonly textContent?: Promise<string | null>;
}

export const SuperNodePropertyKeys = [...AttrIsolatePropertyKeys, ...CharacterDataIsolatePropertyKeys, ...DocumentFragmentIsolatePropertyKeys, ...DocumentIsolatePropertyKeys, ...DocumentOrShadowRootPropertyKeys, ...DocumentTypeIsolatePropertyKeys, ...ElementCSSInlineStylePropertyKeys, ...ElementContentEditablePropertyKeys, ...ElementIsolatePropertyKeys, ...HTMLAnchorElementIsolatePropertyKeys, ...HTMLAreaElementIsolatePropertyKeys, ...HTMLAudioElementIsolatePropertyKeys, ...HTMLBRElementIsolatePropertyKeys, ...HTMLBaseElementIsolatePropertyKeys, ...HTMLBodyElementIsolatePropertyKeys, ...HTMLButtonElementIsolatePropertyKeys, ...HTMLCanvasElementIsolatePropertyKeys, ...HTMLDListElementIsolatePropertyKeys, ...HTMLDataElementIsolatePropertyKeys, ...HTMLDataListElementIsolatePropertyKeys, ...HTMLDetailsElementIsolatePropertyKeys, ...HTMLDialogElementIsolatePropertyKeys, ...HTMLDirectoryElementIsolatePropertyKeys, ...HTMLDivElementIsolatePropertyKeys, ...HTMLDocumentIsolatePropertyKeys, ...HTMLElementIsolatePropertyKeys, ...HTMLEmbedElementIsolatePropertyKeys, ...HTMLFieldSetElementIsolatePropertyKeys, ...HTMLFontElementIsolatePropertyKeys, ...HTMLFormElementIsolatePropertyKeys, ...HTMLFrameElementIsolatePropertyKeys, ...HTMLFrameSetElementIsolatePropertyKeys, ...HTMLHRElementIsolatePropertyKeys, ...HTMLHeadElementIsolatePropertyKeys, ...HTMLHeadingElementIsolatePropertyKeys, ...HTMLHtmlElementIsolatePropertyKeys, ...HTMLHyperlinkElementUtilsPropertyKeys, ...HTMLIFrameElementIsolatePropertyKeys, ...HTMLImageElementIsolatePropertyKeys, ...HTMLInputElementIsolatePropertyKeys, ...HTMLLIElementIsolatePropertyKeys, ...HTMLLabelElementIsolatePropertyKeys, ...HTMLLegendElementIsolatePropertyKeys, ...HTMLLinkElementIsolatePropertyKeys, ...HTMLMapElementIsolatePropertyKeys, ...HTMLMediaElementIsolatePropertyKeys, ...HTMLMetaElementIsolatePropertyKeys, ...HTMLMeterElementIsolatePropertyKeys, ...HTMLModElementIsolatePropertyKeys, ...HTMLOListElementIsolatePropertyKeys, ...HTMLObjectElementIsolatePropertyKeys, ...HTMLOptGroupElementIsolatePropertyKeys, ...HTMLOptionElementIsolatePropertyKeys, ...HTMLOrSVGElementPropertyKeys, ...HTMLParagraphElementIsolatePropertyKeys, ...HTMLParamElementIsolatePropertyKeys, ...HTMLPreElementIsolatePropertyKeys, ...HTMLProgressElementIsolatePropertyKeys, ...HTMLQuoteElementIsolatePropertyKeys, ...HTMLScriptElementIsolatePropertyKeys, ...HTMLSelectElementIsolatePropertyKeys, ...HTMLSlotElementIsolatePropertyKeys, ...HTMLSourceElementIsolatePropertyKeys, ...HTMLSpanElementIsolatePropertyKeys, ...HTMLStyleElementIsolatePropertyKeys, ...HTMLTableCaptionElementIsolatePropertyKeys, ...HTMLTableCellElementIsolatePropertyKeys, ...HTMLTableColElementIsolatePropertyKeys, ...HTMLTableElementIsolatePropertyKeys, ...HTMLTableRowElementIsolatePropertyKeys, ...HTMLTableSectionElementIsolatePropertyKeys, ...HTMLTemplateElementIsolatePropertyKeys, ...HTMLTextAreaElementIsolatePropertyKeys, ...HTMLTimeElementIsolatePropertyKeys, ...HTMLTitleElementIsolatePropertyKeys, ...HTMLTrackElementIsolatePropertyKeys, ...HTMLUListElementIsolatePropertyKeys, ...HTMLVideoElementIsolatePropertyKeys, ...LinkStylePropertyKeys, ...NodeIsolatePropertyKeys, ...NonDocumentTypeChildNodePropertyKeys, ...NonElementParentNodePropertyKeys, ...ParentNodePropertyKeys, ...ShadowRootIsolatePropertyKeys, ...SlotablePropertyKeys, ...TextIsolatePropertyKeys, ...XPathEvaluatorBasePropertyKeys, 'baseURI', 'childNodes', 'firstChild', 'isConnected', 'lastChild', 'nextSibling', 'nodeName', 'nodeType', 'nodeValue', 'ownerDocument', 'parentElement', 'parentNode', 'previousSibling', 'textContent'];

export const SuperNodeConstantKeys = [...AttrIsolateConstantKeys, ...CharacterDataIsolateConstantKeys, ...DocumentFragmentIsolateConstantKeys, ...DocumentIsolateConstantKeys, ...DocumentOrShadowRootConstantKeys, ...DocumentTypeIsolateConstantKeys, ...ElementCSSInlineStyleConstantKeys, ...ElementContentEditableConstantKeys, ...ElementIsolateConstantKeys, ...HTMLAnchorElementIsolateConstantKeys, ...HTMLAreaElementIsolateConstantKeys, ...HTMLAudioElementIsolateConstantKeys, ...HTMLBRElementIsolateConstantKeys, ...HTMLBaseElementIsolateConstantKeys, ...HTMLBodyElementIsolateConstantKeys, ...HTMLButtonElementIsolateConstantKeys, ...HTMLCanvasElementIsolateConstantKeys, ...HTMLDListElementIsolateConstantKeys, ...HTMLDataElementIsolateConstantKeys, ...HTMLDataListElementIsolateConstantKeys, ...HTMLDetailsElementIsolateConstantKeys, ...HTMLDialogElementIsolateConstantKeys, ...HTMLDirectoryElementIsolateConstantKeys, ...HTMLDivElementIsolateConstantKeys, ...HTMLDocumentIsolateConstantKeys, ...HTMLElementIsolateConstantKeys, ...HTMLEmbedElementIsolateConstantKeys, ...HTMLFieldSetElementIsolateConstantKeys, ...HTMLFontElementIsolateConstantKeys, ...HTMLFormElementIsolateConstantKeys, ...HTMLFrameElementIsolateConstantKeys, ...HTMLFrameSetElementIsolateConstantKeys, ...HTMLHRElementIsolateConstantKeys, ...HTMLHeadElementIsolateConstantKeys, ...HTMLHeadingElementIsolateConstantKeys, ...HTMLHtmlElementIsolateConstantKeys, ...HTMLHyperlinkElementUtilsConstantKeys, ...HTMLIFrameElementIsolateConstantKeys, ...HTMLImageElementIsolateConstantKeys, ...HTMLInputElementIsolateConstantKeys, ...HTMLLIElementIsolateConstantKeys, ...HTMLLabelElementIsolateConstantKeys, ...HTMLLegendElementIsolateConstantKeys, ...HTMLLinkElementIsolateConstantKeys, ...HTMLMapElementIsolateConstantKeys, ...HTMLMediaElementIsolateConstantKeys, ...HTMLMetaElementIsolateConstantKeys, ...HTMLMeterElementIsolateConstantKeys, ...HTMLModElementIsolateConstantKeys, ...HTMLOListElementIsolateConstantKeys, ...HTMLObjectElementIsolateConstantKeys, ...HTMLOptGroupElementIsolateConstantKeys, ...HTMLOptionElementIsolateConstantKeys, ...HTMLOrSVGElementConstantKeys, ...HTMLParagraphElementIsolateConstantKeys, ...HTMLParamElementIsolateConstantKeys, ...HTMLPreElementIsolateConstantKeys, ...HTMLProgressElementIsolateConstantKeys, ...HTMLQuoteElementIsolateConstantKeys, ...HTMLScriptElementIsolateConstantKeys, ...HTMLSelectElementIsolateConstantKeys, ...HTMLSlotElementIsolateConstantKeys, ...HTMLSourceElementIsolateConstantKeys, ...HTMLSpanElementIsolateConstantKeys, ...HTMLStyleElementIsolateConstantKeys, ...HTMLTableCaptionElementIsolateConstantKeys, ...HTMLTableCellElementIsolateConstantKeys, ...HTMLTableColElementIsolateConstantKeys, ...HTMLTableElementIsolateConstantKeys, ...HTMLTableRowElementIsolateConstantKeys, ...HTMLTableSectionElementIsolateConstantKeys, ...HTMLTemplateElementIsolateConstantKeys, ...HTMLTextAreaElementIsolateConstantKeys, ...HTMLTimeElementIsolateConstantKeys, ...HTMLTitleElementIsolateConstantKeys, ...HTMLTrackElementIsolateConstantKeys, ...HTMLUListElementIsolateConstantKeys, ...HTMLVideoElementIsolateConstantKeys, ...LinkStyleConstantKeys, ...NodeIsolateConstantKeys, ...NonDocumentTypeChildNodeConstantKeys, ...NonElementParentNodeConstantKeys, ...ParentNodeConstantKeys, ...ShadowRootIsolateConstantKeys, ...SlotableConstantKeys, ...TextIsolateConstantKeys, ...XPathEvaluatorBaseConstantKeys, 'ATTRIBUTE_NODE', 'CDATA_SECTION_NODE', 'COMMENT_NODE', 'DOCUMENT_FRAGMENT_NODE', 'DOCUMENT_NODE', 'DOCUMENT_POSITION_CONTAINED_BY', 'DOCUMENT_POSITION_CONTAINS', 'DOCUMENT_POSITION_DISCONNECTED', 'DOCUMENT_POSITION_FOLLOWING', 'DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC', 'DOCUMENT_POSITION_PRECEDING', 'DOCUMENT_TYPE_NODE', 'ELEMENT_NODE', 'ENTITY_NODE', 'ENTITY_REFERENCE_NODE', 'NOTATION_NODE', 'PROCESSING_INSTRUCTION_NODE', 'TEXT_NODE'];
