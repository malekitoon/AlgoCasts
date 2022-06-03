// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {}

/* Варіант 1: (найкращий)
 1) створити пустий обʼєкт
 2) пробігтися циклом "for of" по строці і записати к-сть повторень символів в обʼєкт
 3) пробігтися циклом "for in" по обʼєкту порівнюючи яке значення найбільше зустрічалося
*/
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';
//
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//
//   return maxChar;
// }

module.exports = maxChar;
