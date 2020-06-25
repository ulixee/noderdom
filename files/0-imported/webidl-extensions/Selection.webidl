// Additional methods not currently in the spec but documented on MDN
// pulled from https://github.com/mozilla/gecko-dev/blob/master/dom/webidl/Selection.webidl
partial interface Selection {
  void modify(DOMString alter, DOMString direction, DOMString granularity);
};
