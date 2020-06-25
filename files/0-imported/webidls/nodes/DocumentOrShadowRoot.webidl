// https://dom.spec.whatwg.org/#documentorshadowroot
interface mixin DocumentOrShadowRoot {
};

Document includes DocumentOrShadowRoot;
ShadowRoot includes DocumentOrShadowRoot;

// https://html.spec.whatwg.org/multipage/dom.html#documentorshadowroot
partial interface mixin DocumentOrShadowRoot {
  readonly attribute Element? activeElement;
};

// https://w3c.github.io/pointerlock/#extensions-to-the-documentorshadowroot-mixin
partial interface mixin DocumentOrShadowRoot {
  readonly attribute Element ? pointerLockElement;
};

// https://w3c.github.io/webcomponents/spec/shadow/#extensions-to-the-documentorshadowroot-mixin
partial interface DocumentOrShadowRoot {
  Selection? getSelection ();
  Element? elementFromPoint(double x, double y);
  sequence<Element> elementsFromPoint(double x, double y);
  CaretPosition? caretPositionFromPoint(double x, double y);
};
