// https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#the-htmlformcontrolscollection-interface

// MANUALLY UPDATED: HTMLFormControlsCollection must extend HTMLCollectionBase instead of HTMLCollection. This is the
// only way to avoid typescript conflicts.

[Exposed=Window]
interface HTMLFormControlsCollection : HTMLCollectionBase {
  // inherits length and item()
  getter (RadioNodeList or Element)? namedItem(DOMString name); // shadows inherited namedItem()
};

[Exposed=Window]
interface RadioNodeList : NodeList {
  attribute DOMString value;
};
