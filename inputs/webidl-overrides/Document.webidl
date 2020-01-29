[OverrideBuiltins]
partial interface Document {

  // "interface" is a reserved Typescript keyword
  [SameObject] Event createEvent(DOMString eventInterface);

};
