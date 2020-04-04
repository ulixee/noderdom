[OverrideBuiltins]
partial interface Document {

  // "interface" is a reserved Typescript keyword
  [SameObject] Event createEvent(DOMString eventInterface);

};

// "Document includes FontFaceSource" in Document.webidl isn't taking, so...
partial interface Document {
  readonly attribute FontFaceSet fonts;
};
