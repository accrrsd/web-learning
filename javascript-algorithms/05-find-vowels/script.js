/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  // Приводим к рабочему виду
  str = str.toLowerCase()
  const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
  let numOfVowels = 0
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      numOfVowels++
    }
  }
  return numOfVowels
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(findVowels('здравствуй')) // 2
// console.log(findVowels('привет')) // 2
// console.log(findVowels('хеллоу')) // 3
