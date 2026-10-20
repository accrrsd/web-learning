/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
 */

function intersection(arr1, arr2) {
  // Из меньшего массива создается перечень чисел для совпадения
  // После чего они ищутся в большем массиве, и в случае совпадения, улетают в результат.
  const minArr =
    Math.min(arr1.length, arr2.length) === arr1.length ? arr1 : arr2
  const maxArr =
    Math.min(arr1.length, arr2.length) === arr1.length ? arr2 : arr1
  const result = []
  for (let i = 0; i < maxArr.length; i++) {
    if (minArr.includes(maxArr[i]) && !result.includes(maxArr[i]))
      result.push(maxArr[i])
  }
  return result
}

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])) // [4, 1]
// console.log(intersection([1, 5, 4, 2], [7, 12])) // []
