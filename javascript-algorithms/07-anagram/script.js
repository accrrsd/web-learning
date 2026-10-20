/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let result

  // Приводим к рабочему виду
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  const signs = ['!', ',', ' ', '.', '"', `'`, '?', '', ':', ';']

  const charsOne = str1.split('').sort()

  const charsTwo = str2.split('').sort()

  for (let i = 0; i <= charsOne.length; i++) {
    if (charsOne[i] !== charsTwo[i]) {
      result = false
    }
  }

  return result === false ? false : true
}

// Протестируйте решение, вызывая функцию с разными аргументами:
// console.log(anagram('up', 'UP'))
// console.log(anagram('finder', 'Friend')) // true
// console.log(anagram('hello', 'bye')) // false
