import AwaitedPath from '../exports-for-base/AwaitedPath';

test('it should parse basic property awaited paths', () => {
  const path = AwaitedPath.createFromString(null,'window.document.body.innerText').toJSON();
  expect(path).toHaveLength(4);
  expect(path).toMatchObject(['window', 'document', 'body', 'innerText']);
});

test('it should parse indexer access', () => {
  const path = AwaitedPath.createFromString(null,'window.document.body.children[0]').toJSON();
  expect(path).toHaveLength(5);
  expect(path).toMatchObject(['window', 'document', 'body', 'children', '0']);
});

test('it should parse function calls', () => {
  const path = AwaitedPath.createFromString(null,'document.querySelector("test")').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'test']]);
});

test('it should parse function calls with multiple args', () => {
  const path = AwaitedPath.createFromString(null,'document.querySelector("test", 2, \'2\', "item3")').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'test', 2, '2', 'item3']]);
});

test('it should allow brackets in query selectors', () => {
  const path = AwaitedPath.createFromString(null,'document.querySelector(`a[href=*funny.html]`)').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'a[href=*funny.html]']]);
});
