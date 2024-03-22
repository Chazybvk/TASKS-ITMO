//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:

/* Задание 4(число выбирается рандомно)*/
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let x = getRandom(1,1000)
let arrNum = (""+x).split("").map(Number)
let sum = arrNum[0]+arrNum[1]+arrNum[2]
if(sum%2==0){
console.log(x+' - нечетное')
}
else{
    console.log(x+' - четное') 
}
