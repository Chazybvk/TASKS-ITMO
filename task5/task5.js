// todo: Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года("зима", "весна" и т.д.). 
// Примечание: решить задачу через конструкцию switch
/* Задание 5 (месяц выбирается рандомно)*/
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const random = Math.floor(Math.random() * months.length);
console.log(months[random]);
let jan = 1
let feb = 2
let mar = 3
let apr = 4
let may = 5
let jun = 6
let jul = 7
let aug = 8
let sep = 9
let oct = 10
let nov = 11
let dec = 12
let season = random+1
switch (season){
    case 12:
    case 1:
    case 2:
        console.log("Сейчас Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Сейчас Весна")
        break;
    case 6:
    case 7:
    case 8:
        console.log("Сейчас Лето")
        break;
    case 9:
    case 10:
    case 11:
        console.log("Сейчас Осень")
        break;
    default:
        console.log("ошибка")
}
