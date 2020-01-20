// https://w3c.github.io/FileAPI/#blob-section

[Exposed=(Window,Worker), Serializable]
interface Blob {
  constructor(optional sequence<BlobPart> blobParts,
              optional BlobPropertyBag options = {});


  readonly attribute unsigned long long size;
  readonly attribute DOMString type;

  // slice Blob into byte-ranged chunks
  Blob slice([Clamp] optional long long start,
            [Clamp] optional long long end,
            optional DOMString contentType);
};

enum EndingType { "transparent", "native" };

typedef (ArrayBufferView or ArrayBuffer) BufferSource;

dictionary BlobPropertyBag {
  DOMString type = "";
  EndingType endings = "transparent";
};

// for some reason BlobPart isn't needed
// typedef (BufferSource or Blob or USVString) BlobPart;
