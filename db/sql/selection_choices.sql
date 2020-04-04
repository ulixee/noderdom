CREATE TABLE selection_choices (
  name TEXT,

  buildType TEXT NOT NULL,
  itemType TEXT NOT NULL,

  isCore BOOLEAN NOT NULL DEFAULT 0,
  isEnabled BOOLEAN NOT NULL DEFAULT 0,
  isHidden BOOLEAN NOT NULL DEFAULT 0,
  isWritable BOOLEAN NOT NULL DEFAULT 0,

  PRIMARY KEY(name, buildType),
  CHECK (itemType = "interface" OR itemType = "property" OR itemType = "method")
);
