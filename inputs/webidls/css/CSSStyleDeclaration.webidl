[Exposed=Window]
interface CSSStyleDeclaration {
  [CEReactions] attribute CSSOMString cssText;
  readonly attribute unsigned long length;
  getter CSSOMString item(unsigned long index);
  CSSOMString getPropertyValue(CSSOMString property);
  CSSOMString getPropertyPriority(CSSOMString property);
  [CEReactions] void setProperty(CSSOMString property, [TreatNullAs=EmptyString] CSSOMString value, optional [TreatNullAs=EmptyString] CSSOMString priority = "");
  [CEReactions] CSSOMString removeProperty(CSSOMString property);
  readonly attribute CSSRule? parentRule;
  [CEReactions] attribute [TreatNullAs=EmptyString] CSSOMString cssFloat;
};
