// https://drafts.csswg.org/cssom/#the-medialist-interface

[Exposed=Window]
interface MediaList {
  stringifier attribute [TreatNullAs=EmptyString] CSSOMString mediaText;
  readonly attribute unsigned long length;
  getter CSSOMString? item(unsigned long index);
  void appendMedium(CSSOMString medium);
  void deleteMedium(CSSOMString medium);
};
