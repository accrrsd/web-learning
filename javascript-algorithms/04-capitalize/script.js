/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const oneWord = str.split(' ')
  oneWord.forEach((word, i) => {
    oneWord[i] = word.charAt(0).toUpperCase() + word.slice(1)
  }, oneWord)
  return oneWord.join(' ')
}
// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(capitalize('молодость всё простит')) // "Молодость Всё Простит"
