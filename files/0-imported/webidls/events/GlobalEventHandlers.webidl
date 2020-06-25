// https://html.spec.whatwg.org/#globaleventhandlers
interface mixin GlobalEventHandlers {
  attribute EventHandler onabort;
  attribute EventHandler onauxclick;
  attribute EventHandler onblur;
  attribute EventHandler oncancel;
  attribute EventHandler oncanplay;
  attribute EventHandler oncanplaythrough;
  attribute EventHandler onchange;
  attribute EventHandler onclick;
  attribute EventHandler onclose;
  attribute EventHandler oncontextmenu;
  attribute EventHandler oncuechange;
  attribute EventHandler ondblclick;
  attribute EventHandler ondrag;
  attribute EventHandler ondragend;
  attribute EventHandler ondragenter;
  // attribute EventHandler ondragexit; // does not seem to be supported by chrome yet
  attribute EventHandler ondragleave;
  attribute EventHandler ondragover;
  attribute EventHandler ondragstart;
  attribute EventHandler ondrop;
  attribute EventHandler ondurationchange;
  attribute EventHandler onemptied;
  attribute EventHandler onended;
  attribute OnErrorEventHandler onerror;
  attribute EventHandler onfocus;
  attribute EventHandler onformdata;
  attribute EventHandler oninput;
  attribute EventHandler oninvalid;
  attribute EventHandler onkeydown;
  attribute EventHandler onkeypress;
  attribute EventHandler onkeyup;
  attribute EventHandler onload;
  attribute EventHandler onloadeddata;
  attribute EventHandler onloadedmetadata;
  // attribute EventHandler onloadend; // does not seem to be supported by chrome yet
  attribute EventHandler onloadstart;
  attribute EventHandler onmousedown;
  [LenientThis] attribute EventHandler onmouseenter;
  [LenientThis] attribute EventHandler onmouseleave;
  attribute EventHandler onmousemove;
  attribute EventHandler onmouseout;
  attribute EventHandler onmouseover;
  attribute EventHandler onmouseup;
  attribute EventHandler onwheel;
  attribute EventHandler onpause;
  attribute EventHandler onplay;
  attribute EventHandler onplaying;
  attribute EventHandler onprogress;
  attribute EventHandler onratechange;
  attribute EventHandler onreset;
  attribute EventHandler onresize;
  attribute EventHandler onscroll;
  // attribute EventHandler onsecuritypolicyviolation; // does not seem to be supported by chrome yet
  attribute EventHandler onseeked;
  attribute EventHandler onseeking;
  attribute EventHandler onselect;
  attribute EventHandler onstalled;
  attribute EventHandler onsubmit;
  attribute EventHandler onsuspend;
  attribute EventHandler ontimeupdate;
  // attribute EventHandler ontoggle; // does not seem to be supported by chrome yet
  attribute EventHandler onvolumechange;
  attribute EventHandler onwaiting;
};


// https://drafts.csswg.org/css-animations/#interface-globaleventhandlers-idl
partial interface mixin GlobalEventHandlers {
  attribute EventHandler onanimationstart;
  attribute EventHandler onanimationiteration;
  attribute EventHandler onanimationend;
  // attribute EventHandler onanimationcancel;  // does not seem to be supported by chrome yet
};

// https://www.w3.org/TR/pointerevents2/#extensions-to-the-globaleventhandlers-mixin
partial interface mixin GlobalEventHandlers {
  attribute EventHandler ongotpointercapture;
  attribute EventHandler onlostpointercapture;
  attribute EventHandler onpointerdown;
  attribute EventHandler onpointermove;
  attribute EventHandler onpointerup;
  attribute EventHandler onpointercancel;
  attribute EventHandler onpointerover;
  attribute EventHandler onpointerout;
  attribute EventHandler onpointerenter;
  attribute EventHandler onpointerleave;
};

// https://w3c.github.io/selection-api/#extensions-to-globaleventhandlers-interface
partial interface mixin GlobalEventHandlers {
  attribute EventHandler onselectstart;
  attribute EventHandler onselectionchange;
};

// https://w3c.github.io/touch-events/#extensions-to-the-globaleventhandlers-mixin
partial interface mixin GlobalEventHandlers {
  attribute EventHandler ontouchstart;
  attribute EventHandler ontouchend;
  attribute EventHandler ontouchmove;
  attribute EventHandler ontouchcancel;
};

// https://drafts.csswg.org/css-transitions/#interface-globaleventhandlers-idl
partial interface mixin GlobalEventHandlers {
  // attribute EventHandler ontransitionrun; // does not seem to be supported by chrome yet
  // attribute EventHandler ontransitionstart; // does not seem to be supported by chrome yet
  attribute EventHandler ontransitionend;
  // attribute EventHandler ontransitioncancel; // does not seem to be supported by chrome yet
};
