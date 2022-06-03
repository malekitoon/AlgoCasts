// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {}

/* Варіант 1: (найкращий) [].reverse()
 1) перетворити строку у масив через split('')
 2) перевернути масив [].reverse() // змінює існуючий масив
 3) склеїти масив в строку через join('')
*/
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

/* Варіант 2: (погано) цикл "for від 0 до str.length"
      (погано, краще не юзати цикл for бо багато мість де можна опечататись)
 1) створити тимчасову змінну куди будем доклеювати результат
 2) у циклі "for від 0 до str.length" пройтись по кожному елементі строки
   і доклеювати його на ПОЧАТОК тимчасовї змінної
*/
// function reverse(str) {
//   let reversed = '';
//
//   for (let i = 0; i < str.length; i++) {
//     reversed = str[i] + reversed;
//   }
//
//   return reversed;
// }

/* Варіант 3: (хороший) цикл "for of"
  1) створити тимчасову змінну куди будем доклеювати результат
  2) у циклі "for of" пройтись по кожному елементі строки
   і доклеювати його на ПОЧАТОК тимчасовї змінної
*/
// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }

/* Варіант 4: [].reduce() (дуже хороший)
1) перетворити строку у масив через split('')
2) прогнати масив через reduce() починаючи з пустої строки
*/
// function reverse(str) {
//   return str.split('').reduce((prev, cur) => cur + prev, '');
// }

module.exports = reverse;
