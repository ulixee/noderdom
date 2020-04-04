CREATE TABLE methods (
  name TEXT PRIMARY KEY,

  interfaceName TEXT NOT NULL,
  localName TEXT NOT NULL,

  nativeArgTypes TEXT NOT NULL,
  customArgTypes TEXT NOT NULL,

  nativeReturnTypes TEXT NOT NULL,
  customReturnTypes TEXT NOT NULL,

  docOverview TEXT,

  isStatic BOOLEAN NOT NULL DEFAULT 0,
  isDeprecated BOOLEAN NOT NULL DEFAULT 0,
  isExperimental BOOLEAN NOT NULL DEFAULT 0,
  isObsolete BOOLEAN NOT NULL DEFAULT 0,
  isDocumented BOOLEAN NOT NULL DEFAULT 0,
  hasDefinedIDL BOOLEAN NOT NULL DEFAULT 0,
  isOnMDN BOOLEAN NOT NULL DEFAULT 0,

  mdnDocumentationPath TEXT,
  mdnFilename TEXT,

  FOREIGN KEY(interfaceName) REFERENCES interfaces(name) ON UPDATE CASCADE ON DELETE CASCADE
);
