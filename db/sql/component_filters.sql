CREATE TABLE component_filters (
  name TEXT,

  domType TEXT NOT NULL,
  itemType TEXT NOT NULL,

  isCore BOOLEAN NOT NULL DEFAULT 0,
  isEnabled BOOLEAN NOT NULL DEFAULT 0,
  isHidden BOOLEAN NOT NULL DEFAULT 0,
  isWritable BOOLEAN NOT NULL DEFAULT 0,
  isAbstract BOOLEAN NOT NULL DEFAULT 0,

  PRIMARY KEY(name, domType),
  CHECK (itemType = "interface" OR itemType = "property" OR itemType = "method")
);
