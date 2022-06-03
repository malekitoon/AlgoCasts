// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {}

/* Варіант 1: (хороший)
 1) створити допоміжну ф-ію, яка:
  - забере з строки лишні символи
  - приведе до нижнього регістру
  - поверне мапу з к-стю повторів символів тої строки
 2) порівняти чи рівна к-сть пропертів в обох мапах і чи значення ключів в двох мапах рівні
*/
// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//
//   return Object.keys(charMapA).length === Object.keys(charMapB).length
//     && Object.keys(charMapA).every(key => charMapA[key] === charMapB[key]);
// }
//
// function buildCharMap(string) {
//   const str = string.replace(/[^\w]/g, '').toLowerCase();
//
//   const charMap = {};
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

/* Варіант 2: (найкращий)
 1) створити допоміжну ф-ію, яка:
  - забере з строки лишні символи
  - приведе до нижнього регістру
  - сконвертує строку до масива, відсортує arr.sort() в алфавітному порядку і склеїть в строку
 2) порівняти чи рівні 2 строки
*/
function anagrams(stringA, stringB) {
  return orderString(stringA) === orderString(stringB);
}

function orderString(string) {
  return string.replace('/[^\w]/g', '').toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
