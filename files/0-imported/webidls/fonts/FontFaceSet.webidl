dictionary FontFaceSetLoadEventInit : EventInit {
  sequence<FontFace> fontfaces = [];
};

[Exposed=(Window,Worker)]
interface FontFaceSetLoadEvent : Event {
  constructor(CSSOMString type, optional FontFaceSetLoadEventInit eventInitDict = {});
  [SameObject] readonly attribute FrozenArray<FontFace> fontfaces;
};

enum FontFaceSetLoadStatus { "loading", "loaded" };

callback ForEachCallback = void (FontFace font, long index, FontFaceSet self);

[Exposed=(Window,Worker)]
interface FontFaceSet : EventTarget {
  constructor(sequence<FontFace> initialFaces);

  // FontFaceSet is Set-like!
  setlike<FontFace>;
  FontFaceSet add(FontFace font);
  boolean delete(FontFace font);
  void clear();

  // events for when loading state changes
  attribute EventHandler onloading;
  attribute EventHandler onloadingdone;
  attribute EventHandler onloadingerror;

  // check and start loads if appropriate
  // and fulfill promise when all loads complete
  Promise<sequence<FontFace>> load(CSSOMString font, optional CSSOMString text = " ");

  // return whether all fonts in the fontlist are loaded
  // (does not initiate load if not available)
  boolean check(CSSOMString font, optional CSSOMString text = " ");

  // async notification that font loading and layout operations are done
  readonly attribute Promise<FontFaceSet> ready;

  // loading state, "loading" while one or more fonts loading, "loaded" otherwise
  readonly attribute FontFaceSetLoadStatus status;
};
