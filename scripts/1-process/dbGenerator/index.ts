#!/usr/bin/env ts-node

console.log('------ INSERTING INTERFACES ------- \n\n\n');
require('./insertInterfaces');
console.log('\n\n\n------ INSERTING PROPERTIES AND METHODS ------- \n\n\n');
require('./insertPropertiesAndMethods');
console.log('\n\n\n------ INSERTING MDN DOCS ------- \n\n\n');
require('./insertMDNDocumentation');
console.log('\n\n\n------ INSERTING SUPERS ------- \n\n\n');
require('./insertSupers');
console.log('\n\n\n------ INSERTING COMPONENT FILTERS ------- \n\n\n');
require('./insertComponentFilters');
process.exit(0);
