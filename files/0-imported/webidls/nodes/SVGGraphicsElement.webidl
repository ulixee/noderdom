// https://svgwg.org/svg2-draft/types.html#InterfaceSVGGraphicsElement
dictionary SVGBoundingBoxOptions {
  boolean fill = true;
  boolean stroke = false;
  boolean markers = false;
  boolean clipped = false;
};

interface SVGGraphicsElement : SVGElement {
  [SameObject] readonly attribute SVGAnimatedTransformList transform;

  DOMRect getBBox(optional SVGBoundingBoxOptions options);
  DOMMatrix? getCTM();
  DOMMatrix? getScreenCTM();
};

SVGGraphicsElement includes SVGTests;

// https://www.w3.org/TR/SVG/coords.html#InterfaceSVGAnimatedTransformList
[Exposed=Window]
interface SVGAnimatedTransformList {
  [SameObject] readonly attribute SVGTransformList baseVal;
  [SameObject] readonly attribute SVGTransformList animVal;
};

// https://www.w3.org/TR/SVG/coords.html#InterfaceSVGTransformList
[Exposed=Window]
interface SVGTransformList {
  readonly attribute unsigned long length;
  readonly attribute unsigned long numberOfItems;

  void clear();
  SVGTransform initialize(SVGTransform newItem);
  getter SVGTransform getItem(unsigned long index);
  SVGTransform insertItemBefore(SVGTransform newItem, unsigned long index);
  SVGTransform replaceItem(SVGTransform newItem, unsigned long index);
  SVGTransform removeItem(unsigned long index);
  SVGTransform appendItem(SVGTransform newItem);
  setter void (unsigned long index, SVGTransform newItem);

  // Additional methods not common to other list interfaces.
  SVGTransform createSVGTransformFromMatrix(DOMMatrixReadOnly matrix);
  SVGTransform? consolidate();
};

// https://www.w3.org/TR/SVG/coords.html#InterfaceSVGTransform
[Exposed=Window]
interface SVGTransform {
  // Transform Types
  const unsigned short SVG_TRANSFORM_UNKNOWN = 0;
  const unsigned short SVG_TRANSFORM_MATRIX = 1;
  const unsigned short SVG_TRANSFORM_TRANSLATE = 2;
  const unsigned short SVG_TRANSFORM_SCALE = 3;
  const unsigned short SVG_TRANSFORM_ROTATE = 4;
  const unsigned short SVG_TRANSFORM_SKEWX = 5;
  const unsigned short SVG_TRANSFORM_SKEWY = 6;

  readonly attribute unsigned short type;
  [SameObject] readonly attribute DOMMatrix matrix;
  readonly attribute float angle;

  void setMatrix(DOMMatrixReadOnly matrix);
  void setTranslate(float tx, float ty);
  void setScale(float sx, float sy);
  void setRotate(float angle, float cx, float cy);
  void setSkewX(float angle);
  void setSkewY(float angle);
};
