// https://dom.spec.whatwg.org/#interface-htmlcollection

// MANUALLY UPDATED: HTMLCollectionBase has been created from core properties/methods that are also used by
// HTMLFormControlsCollection. Otherwise Typescript throws errors.

[Exposed=Window, LegacyUnenumerableNamedProperties]
interface HTMLCollectionBase {
  readonly attribute unsigned long length;
  getter Element? item(unsigned long index);
};

interface HTMLCollection : HTMLCollectionBase {
  getter Element? namedItem(DOMString name);
};
