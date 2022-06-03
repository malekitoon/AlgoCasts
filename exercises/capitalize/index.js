// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {}

/* Варіант 1: (найкращий)
 1) розбити строку на масив по " "
 2) для кожного елемента підняти 1-у букву до верхнього регістру
 3) склеїти масив у строку по " "
*/
function capitalize(str) {
  return str
    .split(' ')
    .map(item => `${item[0].toUpperCase()}${item.slice(1)}`)
    .join(' ');
}

/* Варіант 2: (хороший)
 1) пройтися циклом "for-of" по розбитій на масив по " " строці
 2) для кожного елемента підняти 1-у букву до верхнього регістру
 3) склеїти масив у строку по " "
*/
// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

/* Варіант 3: (гамно)
(костиль з першою буквою, багато пам"яті жре бо строки копіюються ціляком, цикл for)
 1) створити допоміжну строку з 1ю буквою оригінальної строки у верхньому регістрі (костиль)
 2) пройтися циклом "for" від 1 до довжини строки
 3) для кожного елемента перевіряти якщо символ ПЕРЕД ним був пробіл
    то підняти поточний символ до верхнього регістру
*/
// function capitalize(str) {
//   let result = str[0].toUpperCase();
//
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//
//   return result;
// }

module.exports = capitalize;
