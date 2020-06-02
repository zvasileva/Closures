import findBy from '../task';

test.each([
  ['type', 'character', [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }]],
  ['name', 'заклинание', [{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }]],
])('get result', (item1, item2, expected) => {
  const finder = findBy(item1, item2);

  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(results).toEqual(expected);
});
