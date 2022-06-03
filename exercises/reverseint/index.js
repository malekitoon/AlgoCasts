// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

/* Варіант 1: (найкращий)
 1) перетворити строку у масив через split('')
 2) перевернути масив arr.reverse() // змінює існуючий масив
 3) склеїти масив в строку через join('')
 4) розпарсити int зі строки (проігнорує "-" в кінці строки) і домножити на Math.sign(n)

 Math.sign(n) ==> 1
 Math.sign(-n) ==> -1
 Math.sign(0) ==> 0
*/
// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   return parseInt(reversed) * Math.sign(n);
// }

module.exports = reverseInt;
