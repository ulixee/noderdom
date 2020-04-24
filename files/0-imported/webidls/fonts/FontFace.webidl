typedef (ArrayBuffer or ArrayBufferView) BinaryData;

dictionary FontFaceDescriptors {
  CSSOMString style = "normal";
  CSSOMString weight = "normal";
  CSSOMString stretch = "normal";
  CSSOMString unicodeRange = "U+0-10FFFF";
  CSSOMString variant = "normal";
  CSSOMString featureSettings = "normal";
  CSSOMString variationSettings = "normal";
  CSSOMString display = "auto";
};

enum FontFaceLoadStatus { "unloaded", "loading", "loaded", "error" };

[Exposed=(Window,Worker)]
interface FontFace {
  constructor(CSSOMString family, (CSSOMString or BinaryData) source,
                optional FontFaceDescriptors descriptors = {});
  attribute CSSOMString family;
  attribute CSSOMString style;
  attribute CSSOMString weight;
  attribute CSSOMString stretch;
  attribute CSSOMString unicodeRange;
  attribute CSSOMString variant;
  attribute CSSOMString featureSettings;
  attribute CSSOMString variationSettings;
  attribute CSSOMString display;

  readonly attribute FontFaceLoadStatus status;

  Promise<FontFace> load();
  readonly attribute Promise<FontFace> loaded;
};
