CREATE TABLE interface_relationships (
  parent TEXT NOT NULL,
  child TEXT NOT NULL,
  type TEXT NOT NULL,

  FOREIGN KEY(parent) REFERENCES interfaces(name) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(child) REFERENCES interfaces(name) ON UPDATE CASCADE ON DELETE CASCADE,

  PRIMARY KEY(parent, child),
  CHECK (type = "extends" OR type = "implements")
);
