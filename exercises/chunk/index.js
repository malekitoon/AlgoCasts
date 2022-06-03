// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {}

/* Варіант 1: (хороший)
 1) пробігтися циклом "for of" по масиву
 2) для кожного елемента пробувати взяти останній підмасив з масиву
 3) якщо такого нема - додаєм в результуючий масив новий масив з поточним елементом всередині,
 якщо є - просто додаєм елемент в останній підмасив
*/
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const lastSubArr = chunked[chunked.length - 1];
//
//     if (!lastSubArr || lastSubArr.length === size) {
//       chunked.push([element]);
//     } else {
//       lastSubArr.push(element);
//     }
//   }
//
//   return chunked;
// }

/* Варіант 2: (нормальний)
 1) пробігтися циклом "for" по масиву з індексом, який збільшується на chunk size
 2) на кожній ітерації додавати в результуючий масив
    новий масив через arr.slice(startIndex, endIndex)
*/
// function chunk(array, size) {
//   const chunked = [];
//
//   for (let i = 0; i < array.length; i += size) {
//     chunked.push(array.slice(i, i + size));
//   }
//
//   return chunked;
// }

/* Варіант 3: (хороший)
 1) пробігтися циклом "while" по масиву
 2) на кожній ітерації додавати в результуючий масив
    новий масив через arr.slice(startIndex, endIndex)
    та збільшувати індекс на chunk size
*/
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
