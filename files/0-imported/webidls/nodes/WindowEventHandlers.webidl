interface mixin WindowEventHandlers {
  attribute EventHandler onafterprint;
  attribute EventHandler onbeforeprint;
  attribute OnBeforeUnloadEventHandler onbeforeunload;
  attribute EventHandler onhashchange;
  attribute EventHandler onlanguagechange;
  attribute EventHandler onmessage;
  attribute EventHandler onmessageerror;
  // attribute EventHandler onoffline; // not sure if chrome supports
  // attribute EventHandler ononline; // not sure if chrome supports
  // attribute EventHandler onpagehide; // not sure if chrome supports
  // attribute EventHandler onpageshow; // not sure if chrome supports
  attribute EventHandler onpopstate;
  attribute EventHandler onrejectionhandled;
  attribute EventHandler onstorage;
  attribute EventHandler onunhandledrejection;
  attribute EventHandler onunload;
};
