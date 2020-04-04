// https://drafts.css-houdini.org/css-typed-om-1/#the-stylepropertymap

[Exposed=(Window, Worker, PaintWorklet, LayoutWorklet)]
interface StylePropertyMapReadOnly {
    iterable<USVString, sequence<CSSStyleValue>>;
    any get(USVString property);
    /* 'any' means (undefined or CSSStyleValue) here,
       see https://github.com/heycam/webidl/issues/60 */
    sequence<CSSStyleValue> getAll(USVString property);
    boolean has(USVString property);
    readonly attribute unsigned long size;
};

[Exposed=Window]
interface StylePropertyMap : StylePropertyMapReadOnly {
    void set(USVString property, (CSSStyleValue or USVString)... values);
    void append(USVString property, (CSSStyleValue or USVString)... values);
    void delete(USVString property);
    void clear();
};
