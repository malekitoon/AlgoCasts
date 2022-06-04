// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {}

/* Варіант 1: (хороший)
 1) перетворити строку в нижньому регістрі у масив
 2) пройтись по масиву через reduce() починаючи від 0
 3) на кожній ітерації перевірити чи включає еталонний масив поточний символ
*/
// function vowels(str) {
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   return str.toLowerCase()
//     .split('')
//     .reduce((prev, cur) => checker.includes(cur) ? prev + 1 : prev, 0);
// }

/* Варіант 2: (найкращий)
(еталонні символи краще тримати як масив, бо якщо в єдиній строці 'aeiou' то можна подумати,
    що важливий порядок символів; масив дозволяє перевіряти на групу символів 'abc')
 1) пройтись по строці в нижньому регістрі в циклі "for-of"
 2) на кожній ітерації перевірити чи включає еталонний масив поточний символ
*/
function vowels(str) {
  const checker = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

/* Варіант 3: (кращий)
(якщо нічого не знайдено match повертає null, якщо знайдено то масив)
*/
// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
