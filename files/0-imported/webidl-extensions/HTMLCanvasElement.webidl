[OverrideBuiltins]
partial interface HTMLCanvasElement {

  // "arguments" cannot be used as an arg name
  [SameObject] RenderingContext? getContext(DOMString contextId, any... args);

};

