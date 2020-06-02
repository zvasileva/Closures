// TODO: write your code here
import sum from './basic';

import findBy from './task';

console.log('worked');

console.log(sum([1, 2]));

const finder = findBy('type', 'character');

const results = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
].filter(finder);

console.log(results);
