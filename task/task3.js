//todo: Дан номер некоторого года (положительное целое число). 
// Вывести соответствующий ему номер столетия, учитывая, что, 
// к примеру, началом 20 столетия был 1901 год.
/* Задание 3*/
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let year = getRandom(1,2100)
let yearArr = (""+year).split("").map(Number)
console.log(yearArr)
if (year>=1000){
o=yearArr[0]*10
i=yearArr[1]
z=o+i+1
}
else if(year<=999&&year>=100){
z=yearArr[0]+1
}
else{
z=1
}
console.log(year+' год это '+z+" век")
