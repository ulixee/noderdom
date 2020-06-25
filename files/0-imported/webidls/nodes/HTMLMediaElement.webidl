// https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement

enum CanPlayTypeResult { "" /* empty string */, "maybe", "probably" };
typedef (MediaStream or MediaSource or Blob) MediaProvider;

[Exposed=Window]
interface HTMLMediaElement : HTMLElement {

  // error state
  readonly attribute MediaError? error;

  // network state
  [CEReactions] attribute USVString src;
//  attribute MediaProvider? srcObject;
  readonly attribute USVString currentSrc;
  [CEReactions, Reflect] attribute DOMString? crossOrigin;
  const unsigned short NETWORK_EMPTY = 0;
  const unsigned short NETWORK_IDLE = 1;
  const unsigned short NETWORK_LOADING = 2;
  const unsigned short NETWORK_NO_SOURCE = 3;
  readonly attribute unsigned short networkState;
  [CEReactions, Reflect] attribute DOMString preload; // TODO limited only to known values
  readonly attribute TimeRanges buffered;
  void load();
  CanPlayTypeResult canPlayType(DOMString type);

  // ready state
  const unsigned short HAVE_NOTHING = 0;
  const unsigned short HAVE_METADATA = 1;
  const unsigned short HAVE_CURRENT_DATA = 2;
  const unsigned short HAVE_FUTURE_DATA = 3;
  const unsigned short HAVE_ENOUGH_DATA = 4;
  readonly attribute unsigned short readyState;
  readonly attribute boolean seeking;

  // playback state
  attribute double currentTime;
//  void fastSeek(double time);
  readonly attribute unrestricted double duration;
//  object getStartDate();
  readonly attribute boolean paused;
  attribute double defaultPlaybackRate;
  attribute double playbackRate;
  readonly attribute TimeRanges played;
  readonly attribute TimeRanges seekable;
  readonly attribute boolean ended;
  [CEReactions, Reflect] attribute boolean autoplay;
  [CEReactions, Reflect] attribute boolean loop;
  Promise<void> play();
  void pause();

  // controls
  [CEReactions, Reflect] attribute boolean controls;
  attribute double volume;
  attribute boolean muted;
  [CEReactions, Reflect=muted] attribute boolean defaultMuted;

  // tracks
  [SameObject] readonly attribute AudioTrackList audioTracks;
  [SameObject] readonly attribute VideoTrackList videoTracks;
  [SameObject] readonly attribute TextTrackList textTracks;
  TextTrack addTextTrack(TextTrackKind kind, optional DOMString label = "", optional DOMString language = "");
};

enum TextTrackKind { "subtitles",  "captions",  "descriptions",  "chapters",  "metadata" };

[Exposed=Window]
interface AudioTrackList : EventTarget {
  readonly attribute unsigned long length;
  getter AudioTrack (unsigned long index);
  AudioTrack? getTrackById(DOMString id);

  attribute EventHandler onchange;
  attribute EventHandler onaddtrack;
  attribute EventHandler onremovetrack;
};

[Exposed=Window]
interface AudioTrack {
  readonly attribute DOMString id;
  readonly attribute DOMString kind;
  readonly attribute DOMString label;
  readonly attribute DOMString language;
  attribute boolean enabled;
};

[Exposed=Window]
interface VideoTrackList : EventTarget {
  readonly attribute unsigned long length;
  getter VideoTrack (unsigned long index);
  VideoTrack? getTrackById(DOMString id);
  readonly attribute long selectedIndex;

  attribute EventHandler onchange;
  attribute EventHandler onaddtrack;
  attribute EventHandler onremovetrack;
};

[Exposed=Window]
interface VideoTrack {
  readonly attribute DOMString id;
  readonly attribute DOMString kind;
  readonly attribute DOMString label;
  readonly attribute DOMString language;
  attribute boolean selected;
};

[Exposed=Window]
interface TextTrackList : EventTarget {
  readonly attribute unsigned long length;
  getter TextTrack (unsigned long index);
  TextTrack? getTrackById(DOMString id);

  attribute EventHandler onchange;
  attribute EventHandler onaddtrack;
  attribute EventHandler onremovetrack;
};


enum TextTrackMode { "disabled",  "hidden",  "showing" };
enum TextTrackKind { "subtitles",  "captions",  "descriptions",  "chapters",  "metadata" };

[Exposed=Window]
interface TextTrack : EventTarget {
  readonly attribute TextTrackKind kind;
  readonly attribute DOMString label;
  readonly attribute DOMString language;

  readonly attribute DOMString id;
  readonly attribute DOMString inBandMetadataTrackDispatchType;

  attribute TextTrackMode mode;

  readonly attribute TextTrackCueList? cues;
  readonly attribute TextTrackCueList? activeCues;

  void addCue(TextTrackCue cue);
  void removeCue(TextTrackCue cue);

  attribute EventHandler oncuechange;
};

// https://html.spec.whatwg.org/multipage/media.html#error-codes
[Exposed=Window]
interface MediaError {
  const unsigned short MEDIA_ERR_ABORTED = 1;
  const unsigned short MEDIA_ERR_NETWORK = 2;
  const unsigned short MEDIA_ERR_DECODE = 3;
  const unsigned short MEDIA_ERR_SRC_NOT_SUPPORTED = 4;

  readonly attribute unsigned short code;
  readonly attribute DOMString message;
};

[Exposed=Window]
interface TimeRanges {
  readonly attribute unsigned long length;
  double start(unsigned long index);
  double end(unsigned long index);
};


[Exposed=Window]
interface TextTrackCueList {
  readonly attribute unsigned long length;
  getter TextTrackCue (unsigned long index);
  TextTrackCue? getCueById(DOMString id);
};

[Exposed=Window]
interface TextTrackCue : EventTarget {
  readonly attribute TextTrack? track;

  attribute DOMString id;
  attribute double startTime;
  attribute double endTime;
  attribute boolean pauseOnExit;

  attribute EventHandler onenter;
  attribute EventHandler onexit;
};

partial interface HTMLMediaElement {
  [CEReactions, SameObject, PutForwards=value] readonly attribute DOMTokenList controlsList;
};

// https://www.w3.org/TR/remote-playback/#extensions-to-htmlmediaelement
partial interface HTMLMediaElement {
    // [SameObject] readonly attribute RemotePlayback remote;
    [CEReactions] attribute boolean disableRemotePlayback;
};

// https://w3c.github.io/encrypted-media/#htmlmediaelement-extensions
[Exposed=Window]
partial interface HTMLMediaElement {
  [SecureContext] readonly attribute MediaKeys?   mediaKeys;
  attribute EventHandler onencrypted;
  attribute EventHandler onwaitingforkey;
  [SecureContext] Promise<void> setMediaKeys (MediaKeys? mediaKeys);
};

// https://w3c.github.io/encrypted-media/#mediakeys-interface
enum MediaKeySessionType {
    "temporary",
    "persistent-license",
    "persistent-usage-record"
};

[Exposed=Window, SecureContext] interface MediaKeys {
    MediaKeySession  createSession (optional MediaKeySessionType sessionType = "temporary");
    Promise<boolean> setServerCertificate (BufferSource serverCertificate);
};

// https://w3c.github.io/encrypted-media/#mediakeysession-interface
[Exposed=Window, SecureContext] interface MediaKeySession : EventTarget {
    readonly        attribute DOMString           sessionId;
    readonly        attribute unrestricted double expiration;
    readonly        attribute Promise<void>       closed;
    readonly        attribute MediaKeyStatusMap   keyStatuses;
                    attribute EventHandler        onkeystatuseschange;
                    attribute EventHandler        onmessage;
    Promise<void>    generateRequest (DOMString initDataType, BufferSource initData);
    Promise<boolean> load (DOMString sessionId);
    Promise<void>    update (BufferSource response);
    Promise<void>    close ();
    Promise<void>    remove ();
};

// https://w3c.github.io/mediacapture-output/#htmlmediaelement-extensions
partial interface HTMLMediaElement {
  [SecureContext] readonly attribute DOMString sinkId;
  [SecureContext] Promise<void> setSinkId (DOMString sinkId);
};

// https://w3c.github.io/mediacapture-fromelement/#html-media-element-media-capture-extensions
partial interface HTMLMediaElement {
    MediaStream captureStream ();
};
