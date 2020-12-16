[Exposed=Window]
interface CaretPosition {
  readonly attribute Node offsetNode;
  readonly attribute unsigned long offset;
  [NewObject] DOMRect? getClientRect();
};
