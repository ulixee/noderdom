// https://html.spec.whatwg.org/#htmlareaelement (this is obsolete link)
[Exposed=Window, HTMLConstructor]
interface HTMLAreaElement : HTMLElement {
  [CEReactions, Reflect] attribute DOMString alt;
  [CEReactions, Reflect] attribute DOMString coords;
  [CEReactions, Reflect] attribute DOMString shape;
  [CEReactions, Reflect] attribute DOMString target;
  [CEReactions] attribute DOMString download;
  [CEReactions, Reflect] attribute DOMString rel;
  [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
   attribute DOMString hreflang;
  [CEReactions] attribute DOMString referrerPolicy;
  attribute DOMString type;
};
HTMLAreaElement includes HTMLHyperlinkElementUtils;

partial interface HTMLAreaElement {
  [CEReactions, Reflect] attribute boolean noHref;
};
