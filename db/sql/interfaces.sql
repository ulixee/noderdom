CREATE TABLE interfaces (
  name TEXT PRIMARY KEY,

  type TEXT NOT NULL,
  tags TEXT DEFAULT '',

  docOverview TEXT,

  isSuper BOOLEAN NOT NULL DEFAULT 0,
  isDeprecated BOOLEAN NOT NULL DEFAULT 0,
  isExperimental BOOLEAN NOT NULL DEFAULT 0,
  isObsolete BOOLEAN NOT NULL DEFAULT 0,
  isDocumented BOOLEAN NOT NULL DEFAULT 0,
  hasDefinedIDL BOOLEAN NOT NULL,
  isOnMDN BOOLEAN NOT NULL,

  sourcedAtPath TEXT NOT NULL,
  mdnDocumentationPath TEXT,
  mdnFilename TEXT,
  mdnCategory TEXT,

  CHECK (type = "interface" OR type = "callbackInterface" OR type = "mixin" OR type = "unknown")
);
