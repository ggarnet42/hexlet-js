import _ from 'lodash';

import getBirthYear from './src/index.js';

console.log('Hello, Hexlet!');
console.log(_.last(['one', 'two']));

console.log('Сколько вам лет?');
const age = 18; // Каким-то способом получаем возраст пользователя, через терминал. Сейчас не важно как
const birthYear = getBirthYear(age);
console.log(`Ваш год рождения: ${birthYear}`);
