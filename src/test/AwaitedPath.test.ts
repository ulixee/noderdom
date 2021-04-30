import AwaitedPath from '../exports-for-base/AwaitedPath';

test('it should parse basic property awaited paths', () => {
  const path = AwaitedPath.createFromString(null, 'window.document.body.innerText').toJSON();
  expect(path).toHaveLength(4);
  expect(path).toMatchObject(['window', 'document', 'body', 'innerText']);
});

test('it should parse indexer access', () => {
  const path = AwaitedPath.createFromString(null, 'window.document.body.children[0]').toJSON();
  expect(path).toHaveLength(5);
  expect(path).toMatchObject(['window', 'document', 'body', 'children', '0']);
});

test('it should parse function calls', () => {
  const path = AwaitedPath.createFromString(null, 'document.querySelector("test")').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'test']]);
});

test('it should parse function calls with multiple args', () => {
  const path = AwaitedPath.createFromString(null, 'document.querySelector("test", 2, \'2\', "item3")').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'test', 2, '2', 'item3']]);
});

test('it should allow brackets in query selectors', () => {
  const path = AwaitedPath.createFromString(null, 'document.querySelector(`a[href=*funny.html]`)').toJSON();
  expect(path).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', 'a[href=*funny.html]']]);
});

test('it should handle multiple lines', () => {
  const path = AwaitedPath.createFromString(
    null,
    `document.querySelector(
          "[class='test1'], [class*='test2 yesindeed']",
        )`,
  ).toJSON();
  expect(path).toHaveLength(2);
  expect(path[1]).toHaveLength(2);
  expect(path).toMatchObject(['document', ['querySelector', "[class='test1'], [class*='test2 yesindeed']"]]);
});

test('it should handle widlcard', () => {
  const path = AwaitedPath.createFromString(null, `querySelector('[class*=name]').innerText`).toJSON();
  expect(path).toHaveLength(2);
  expect(path[0]).toHaveLength(2);
  expect(path).toMatchObject([['querySelector', '[class*=name]'], 'innerText']);
});

test('it should handle escaped nested strings', () => {
  const path = AwaitedPath.createFromString(
    null,
    `querySelector("[class='ITIL-price'],  [class=\\"ITIR-price\\"]").textContent`,
  ).toJSON();
  expect(path).toHaveLength(2);
  expect(path[0]).toHaveLength(2);
  expect(path).toMatchObject([['querySelector', '[class=\'ITIL-price\'],  [class="ITIR-price"]'], 'textContent']);
});
