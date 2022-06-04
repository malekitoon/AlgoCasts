// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {}

/* Варіант 1: (найкращий)
 1) пройтися в циклі "for" від 0 до n
 2) на кожній ітерації пройтись по врутрішньому циклі "for" від 0 до n * 2 - 1
 3) в кінці кожної зовнішньої ітерації вивести внутрішню строку
*/
function pyramid(n) {
  const levelLength = 2 * n - 1;
  const centerIndex = Math.floor(levelLength / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < levelLength; column++) {
      level += ((column >= centerIndex - row) && (column <= centerIndex + row)) ? '#' : ' ';
    }

    console.log(level);
  }
}

/* Варіант 2: (хороший / рекурсивний)
*/
// function pyramid(n, row = 0, level = '') {
//   if (row === n) return;
//
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//
//   const centerIndex = Math.floor((2 * n - 1) / 2);
//
//   const add = ((level.length >= centerIndex - row) && (level.length <= centerIndex + row)) ? '#' : ' ';
//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
