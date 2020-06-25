// https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#the-htmlformcontrolscollection-interface
//
// REPLACING THIS IN webidl-replacements
//
// [Exposed=Window]
// interface HTMLFormControlsCollection : HTMLCollection {
//   // inherits length and item()
//   getter (RadioNodeList or Element)? namedItem(DOMString name); // shadows inherited namedItem()
// };
//
// [Exposed=Window]
// interface RadioNodeList : NodeList {
//   attribute DOMString value;
// };
