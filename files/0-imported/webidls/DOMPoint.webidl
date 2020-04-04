// https://drafts.fxtf.org/geometry/#DOMPoint

[Exposed=(Window,Worker),
 Serializable]
interface DOMPointReadOnly {
    constructor(optional unrestricted double x = 0, optional unrestricted double y = 0,
            optional unrestricted double z = 0, optional unrestricted double w = 1);

    [NewObject] static DOMPointReadOnly fromPoint(optional DOMPointInit other = {});

    readonly attribute unrestricted double x;
    readonly attribute unrestricted double y;
    readonly attribute unrestricted double z;
    readonly attribute unrestricted double w;

    [NewObject] DOMPoint matrixTransform(optional DOMMatrixInit matrix = {});

    [Default] object toJSON();
};

[Exposed=(Window,Worker),
 Serializable,
 LegacyWindowAlias=SVGPoint]
interface DOMPoint : DOMPointReadOnly {
    constructor(optional unrestricted double x = 0, optional unrestricted double y = 0,
            optional unrestricted double z = 0, optional unrestricted double w = 1);

    [NewObject] static DOMPoint fromPoint(optional DOMPointInit other = {});

    inherit attribute unrestricted double x;
    inherit attribute unrestricted double y;
    inherit attribute unrestricted double z;
    inherit attribute unrestricted double w;
};

dictionary DOMPointInit {
    unrestricted double x = 0;
    unrestricted double y = 0;
    unrestricted double z = 0;
    unrestricted double w = 1;
};
