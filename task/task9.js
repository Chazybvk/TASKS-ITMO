//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях. 

function check(str) {
  return str.split('').reverse().join('').replace(/\s+/g, '').toUpperCase() == str.toUpperCase();
}

console.log('потоп '+check('потоп'));
console.log('мадам '+check('мадам'));
console.log('комок '+check('комок'));
console.log('Уж истово вот сижу '+check('Уж истово вот сижу'));
