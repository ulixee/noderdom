// https://drafts.csswg.org/web-animations/#animationeffect

interface AnimationEffect {
    EffectTiming         getTiming();
    ComputedEffectTiming getComputedTiming();
    void                 updateTiming(optional OptionalEffectTiming timing = {});
};

// https://drafts.csswg.org/web-animations/#dictdef-effecttiming

dictionary EffectTiming {
    double                             delay = 0;
    double                             endDelay = 0;
    FillMode                           fill = "auto";
    double                             iterationStart = 0.0;
    unrestricted double                iterations = 1.0;
    (unrestricted double or DOMString) duration = "auto";
    PlaybackDirection                  direction = "normal";
    DOMString                          easing = "linear";
};

dictionary OptionalEffectTiming {
    double                             delay;
    double                             endDelay;
    FillMode                           fill;
    double                             iterationStart;
    unrestricted double                iterations;
    (unrestricted double or DOMString) duration;
    PlaybackDirection                  direction;
    DOMString                          easing;
};

// https://drafts.csswg.org/web-animations/#the-computedeffecttiming-dictionary
dictionary ComputedEffectTiming : EffectTiming {
    unrestricted double  endTime;
    unrestricted double  activeDuration;
    double?              localTime;
    double?              progress;
    unrestricted double? currentIteration;
};

// https://drafts.csswg.org/web-animations/#the-playbackdirection-enumeration
enum PlaybackDirection { "normal", "reverse", "alternate", "alternate-reverse" };

// https://drafts.csswg.org/web-animations/#the-fillmode-enumeration
enum FillMode { "none", "forwards", "backwards", "both", "auto" };
