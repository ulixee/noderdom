CREATE TABLE method_signatures (
  methodName TEXT NOT NULL,
  signatureIndex INTEGER NOT NULL,
  paramIndex INTEGER NOT NULL,
  paramName TEXT NOT NULL,
  paramType TEXT NOT NULL,
  isVariadic BOOLEAN NOT NULL DEFAULT 0,
  isOptional BOOLEAN NOT NULL DEFAULT 0,
  docOverview TEXT,

  isOnMDN BOOLEAN NOT NULL DEFAULT 0,
  mdnDocumentationPath TEXT,
  mdnFilename TEXT,

  PRIMARY KEY("methodName", "signatureIndex", "paramIndex"),
  FOREIGN KEY("methodName") REFERENCES methods(name) ON UPDATE CASCADE ON DELETE CASCADE
);
