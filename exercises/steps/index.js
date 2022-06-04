// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {}

/* Варіант 1: (найкращий)
 1) пройтися в циклі "for" від 0 до n
 2) на кожній ітерації пройтись по врутрішньому циклі "for" від 0 до n
 3) якщо колонка більша ніж рядок то записувати " ", інакше - "#"
    в результуючу строку для кожного рядка
 4) в кінці кожної зовнішньої ітерації вивести внутрішню строку
*/
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      stair += column > row ? ' ' : '#';
    }

    console.log(stair);
  }

  // for (let row = 0; row < n; row++) {
  //   const stair = [];
  //   for (let column = 0; column < n; column++) {
  //     stair.push(column > row ? ' ' : '#');
  //   }
  //   console.log(stair.join(''));
  // }
}

/* Варіант 2: (хороший / рекурсивний)
*/
// function steps(n, row = 0, stair = '') {
//   if (row === n) return;
//
//   if (stair.length === n) {
//     console.log(stair);
//     return steps(n, row + 1);
//   }
//
//   stair += stair.length <= row ? '#' : ' ';
//   steps(n, row, stair);
// }

module.exports = steps;
