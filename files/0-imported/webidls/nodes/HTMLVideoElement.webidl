[Exposed=Window, HTMLConstructor]
interface HTMLVideoElement : HTMLMediaElement {
  [CEReactions, Reflect] attribute unsigned long width;
  [CEReactions, Reflect] attribute unsigned long height;
  readonly attribute unsigned long videoWidth;
  readonly attribute unsigned long videoHeight;
  [CEReactions] attribute USVString poster; // TODO could use URL reflection
  // [CEReactions, Reflect] attribute boolean playsInline; // not sure if this is implemented in Chrome
};

// https://w3c.github.io/media-playback-quality/#extension-to-the-htmlvideoelement-interface
partial interface HTMLVideoElement {
  VideoPlaybackQuality getVideoPlaybackQuality();
};

// https://w3c.github.io/media-playback-quality/#videoplaybackquality-interface

[Exposed=Window]
interface VideoPlaybackQuality {
  readonly attribute DOMHighResTimeStamp creationTime;
  readonly attribute unsigned long droppedVideoFrames;
  readonly attribute unsigned long totalVideoFrames;

  // Deprecated!
  // readonly attribute unsigned long corruptedVideoFrames;
};
