CREATE TABLE super_isolates (
  name TEXT NOT NULL,
  superName TEXT NOT NULL,
  interfaceName TEXT NOT NULL,

  FOREIGN KEY(superName) REFERENCES supers(name) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY(interfaceName) REFERENCES interfaces(name) ON UPDATE CASCADE ON DELETE CASCADE,

  PRIMARY KEY(name, superName)
);
