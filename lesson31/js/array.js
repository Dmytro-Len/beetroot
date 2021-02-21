//Arr.every() - выполняет функцию в скобках для каждого эл-та
const arr = [28, 55, 89, -1]
function showPoint (age) {
    return age > 18
}
console.log(arr.every(showPoint)) 
// если все элементы выполняют условие - true. Хоть один не выполняет false

//arr1.concat(arr2, arr3) - объединяет массивы в один
const arr2 = [52, 44, 12]
const arr3 = [1, -4, 8, 15]
const concatArr = arr.concat(arr2, arr3)
console.log(concatArr)

//copyWithin()
const arr4 = [5, 11, 16, 70, -4, 27, 0]
arr4.copyWithin(2, 0, 3)
//начиная со второго символа (45) меняем на символы: с первого(11)
//по третье(19) не включительно
console.log(arr4)
//expected output 5 11 5 11 16 27 0

//entries() - каждому элементу массива присвоить порядковый номер
const arr5 = ['dog', 'duck', 'cat', 'bird']
let arr5Enter = arr5.entries(); //применим метод и запишем в переменную
console.log()
for (item of arr5Enter) {
    console.log(item)
}
