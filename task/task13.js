//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.
let array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9]
let max = array[0]
let maxIndex = 0
let min = array[0]
let minIndex = 0
console.log(array)
            for (var i = 1; i < array.length; i++)
            {
                if (array[i] < min)
                {
                    min = array[i]
                    minIndex = i
                }
                if (array[i] > max)
                {
                    max = array[i]
                    maxIndex = i
                }
            }
            array[minIndex] = max
            array[maxIndex] = min
console.log(array)
