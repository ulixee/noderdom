[Exposed=Window,
 HTMLConstructor]
interface HTMLIFrameElement : HTMLElement {
  [CEReactions] attribute USVString src;
  [CEReactions, Reflect] attribute DOMString srcdoc;
  [CEReactions, Reflect] attribute DOMString name;
  [SameObject, PutForwards=value] readonly attribute DOMTokenList sandbox;
  [CEReactions] attribute DOMString allow;
  [CEReactions, Reflect] attribute boolean allowFullscreen;
  [CEReactions] attribute boolean allowPaymentRequest;
//  [CEReactions] attribute boolean allowUserMedia;
  [CEReactions, Reflect] attribute DOMString width;
  [CEReactions, Reflect] attribute DOMString height;
  [CEReactions] attribute DOMString referrerPolicy;
  readonly attribute Document? contentDocument;
  readonly attribute WindowProxy? contentWindow;
  // Document? getSVGDocument(); // deprecated

  // also has obsolete membersx
};

partial interface HTMLIFrameElement {
  [CEReactions, Reflect] attribute DOMString align;
  [CEReactions, Reflect] attribute DOMString scrolling;
  [CEReactions, Reflect] attribute DOMString frameBorder;
  [CEReactions] attribute USVString longDesc;

  [CEReactions, Reflect] attribute [TreatNullAs=EmptyString] DOMString marginHeight;
  [CEReactions, Reflect] attribute [TreatNullAs=EmptyString] DOMString marginWidth;
};

partial interface HTMLIFrameElement {
    [SameObject] readonly attribute FeaturePolicy featurePolicy;
};

// https://w3c.github.io/webappsec-cspee/#csp-attribute
partial interface HTMLIFrameElement {
  [CEReactions] attribute DOMString csp;
};
