// https://drafts.csswg.org/web-animations/#animation

[Exposed=Window]
interface Animation : EventTarget {
    constructor(optional AnimationEffect? effect = null, optional AnimationTimeline? timeline);
             attribute DOMString                id;
             attribute AnimationEffect?         effect;
    readonly attribute AnimationTimeline?       timeline;
             attribute double?                  startTime;
             attribute double?                  currentTime;
             attribute double                   playbackRate;
    readonly attribute AnimationPlayState       playState;
    readonly attribute AnimationReplaceState    replaceState;
    readonly attribute boolean                  pending;
    readonly attribute Promise<Animation>       ready;
    readonly attribute Promise<Animation>       finished;
             attribute EventHandler             onfinish;
             attribute EventHandler             oncancel;
             attribute EventHandler             onremove;
    void cancel();
    void finish();
    void play();
    void pause();
    void updatePlaybackRate(double playbackRate);
    void reverse();
    void persist();
    void commitStyles();
};
