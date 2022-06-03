// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {}

/* Варіант 1: (хороший)
1) перетворити строку у масив через split('')
2) перевернути масив [].reverse() // змінює існуючий масив
3) перевірити на рівність початкову і перевернуту строки
*/
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return reversed === str;
// }

/* Варіант 2: (не дуже хороший)
    (бо виконує перевірки на рівність даже після досягнення середини строки.
    получається робить лишню роботу - в 2 рази більше перевірок)
1) перетворити строку у масив через split('')
2) пройтись по масиву через every((elem, index) => true/false)
      і перевірити чи елементи з початку і кінця рівні між собою.
      every повертає true якщо допоміжна ф-я для кожного елемента поверне true.
*/
// function palindrome(str) {
//   return str.split('').every((char, i) => char === str[str.length - 1 - i]);
// }

module.exports = palindrome;
