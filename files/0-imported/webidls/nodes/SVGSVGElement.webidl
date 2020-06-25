// https://svgwg.org/svg2-draft/struct.html#InterfaceSVGSVGElement
interface SVGSVGElement : SVGGraphicsElement {
  [SameObject] readonly attribute SVGAnimatedLength x;
  [SameObject] readonly attribute SVGAnimatedLength y;
  [SameObject] readonly attribute SVGAnimatedLength width;
  [SameObject] readonly attribute SVGAnimatedLength height;

  attribute float currentScale;
  [SameObject] readonly attribute DOMPointReadOnly currentTranslate;

  NodeList getIntersectionList(DOMRectReadOnly rect, SVGElement? referenceElement);
  NodeList getEnclosureList(DOMRectReadOnly rect, SVGElement? referenceElement);
  boolean checkIntersection(SVGElement element, DOMRectReadOnly rect);
  boolean checkEnclosure(SVGElement element, DOMRectReadOnly rect);

  void deselectAll();

  SVGNumber createSVGNumber();
  SVGLength createSVGLength();
  SVGAngle createSVGAngle();
  DOMPoint createSVGPoint();
  DOMMatrix createSVGMatrix();
  DOMRect createSVGRect();
  SVGTransform createSVGTransform();
  SVGTransform createSVGTransformFromMatrix(DOMMatrixReadOnly matrix);

  Element getElementById(DOMString elementId);

  // Deprecated methods that have no effect when called,
  // but which are kept for compatibility reasons.
  unsigned long suspendRedraw(unsigned long maxWaitMilliseconds);
  void unsuspendRedraw(unsigned long suspendHandleID);
  void unsuspendRedrawAll();
  void forceRedraw();
};

// SVGSVGElement includes SVGFitToViewBox;
// SVGSVGElement includes SVGZoomAndPan;
SVGSVGElement includes WindowEventHandlers;


// https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedLength
interface SVGAnimatedLength {
  readonly attribute SVGLength baseVal;
  readonly attribute SVGLength animVal;
};

// https://www.w3.org/TR/SVG11/types.html#InterfaceSVGLength
interface SVGLength {
  // Length Unit Types
  const unsigned short SVG_LENGTHTYPE_UNKNOWN = 0;
  const unsigned short SVG_LENGTHTYPE_NUMBER = 1;
  const unsigned short SVG_LENGTHTYPE_PERCENTAGE = 2;
  const unsigned short SVG_LENGTHTYPE_EMS = 3;
  const unsigned short SVG_LENGTHTYPE_EXS = 4;
  const unsigned short SVG_LENGTHTYPE_PX = 5;
  const unsigned short SVG_LENGTHTYPE_CM = 6;
  const unsigned short SVG_LENGTHTYPE_MM = 7;
  const unsigned short SVG_LENGTHTYPE_IN = 8;
  const unsigned short SVG_LENGTHTYPE_PT = 9;
  const unsigned short SVG_LENGTHTYPE_PC = 10;

  readonly attribute unsigned short unitType;
           attribute float value; // setraises(DOMException);
           attribute float valueInSpecifiedUnits; // setraises(DOMException);
           attribute DOMString valueAsString; // setraises(DOMException);

  void newValueSpecifiedUnits(unsigned short unitType, float valueInSpecifiedUnits); // raises(DOMException);
  void convertToSpecifiedUnits(unsigned short unitType); // raises(DOMException);
};
