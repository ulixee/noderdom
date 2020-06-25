// https://html.spec.whatwg.org/#htmlanchorelement
[Exposed=Window, HTMLConstructor]
interface HTMLAnchorElement : HTMLElement {
  [CEReactions, Reflect] attribute DOMString target;
  [CEReactions, Reflect] attribute DOMString download;
  [CEReactions, Reflect] attribute DOMString rel;
  [SameObject, PutForwards=value] readonly attribute DOMTokenList relList;
  [CEReactions, Reflect] attribute DOMString hreflang;
  [CEReactions, Reflect] attribute DOMString type;
  [CEReactions] attribute DOMString text;
  [CEReactions] attribute DOMString referrerPolicy;
};
HTMLAnchorElement includes HTMLHyperlinkElementUtils;

