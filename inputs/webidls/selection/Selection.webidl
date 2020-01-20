[Exposed=Window]
interface Selection {
  readonly attribute Node? anchorNode;
  readonly attribute unsigned long anchorOffset;
  readonly attribute Node? focusNode;
  readonly attribute unsigned long focusOffset;
  readonly attribute boolean isCollapsed;
  readonly attribute unsigned long rangeCount;
  readonly attribute DOMString type;
  Range getRangeAt(unsigned long index);
  void addRange(Range range);
  void removeRange(Range range);
  void removeAllRanges();
  void empty();
  void collapse(Node? node, optional unsigned long offset = 0);
  void setPosition(Node? node, optional unsigned long offset = 0);
  void collapseToStart();
  void collapseToEnd();
  void extend(Node node, optional unsigned long offset = 0);
  void setBaseAndExtent(Node anchorNode, unsigned long anchorOffset, Node focusNode, unsigned long focusOffset);
  void selectAllChildren(Node node);
  [CEReactions]
  void deleteFromDocument();
  boolean containsNode(Node node, optional boolean allowPartialContainment = false);
  stringifier DOMString ();
};
