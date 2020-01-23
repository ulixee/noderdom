#!/usr/bin/env ts-node

const width = 100;

function help() {
  console.log('');
  console.log(Array(width).fill('=').join(''));
  console.log('Noderdom Scaffolding');
  console.log(Array(width).fill('-').join(''));
  console.log('');
  console.log('  COMMANDS');
  console.log('  interfaces     [ interfaces | classes | documentation ]');
  console.log('  classes        [ interfaces | classes | documentation ]');
  console.log('  documentation  [ interfaces | classes | documentation ]');
  console.log('');
  console.log('  OPTIONS');
  console.log('  --webidls=./path')
  console.log(Array(width).fill('-').join(''));
  console.log('');
}

console.log(process.argv)
