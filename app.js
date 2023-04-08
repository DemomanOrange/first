console.log('Giga Drill');
// - это строчный комментарий
/*
это блочный комментарий
кеуке
**/

//Переменная в JS
var kartoshka = 'optimus prime';
console.log(kartoshka);
//camelcase
var nameAndSurname = 'Daniel Azhiev';
console.log(nameAndSurname);

//типы данных
//1)String - текстовый тип данных

var name = 'Azhiev'
console.log(typeof name);
//методыстрок
var group = 'Frontend'
var number = '14-1'
//конкaтенация
console.log(group + ' '+ number + ' стартовала сегодня');
//длина строки
console.log(kartoshka.length)
console.log(kartoshka.toUpperCase())
console.log(kartoshka.toLowerCase())
console.log('-'.repeat(50))

//2)number - числовой тип данных

var numberSSS = 90;
console.log(typeof numberSSS)

var number3 = '90'
console.log(number3)
//методы чисел
var num1 = 45
var num2 = 15
console.log('45 + 15 =', num1 + num2)
console.log('45 - 15 =', num1 - num2)
console.log('45 * 15 =', num1 * num2)
console.log('45 / 15 =', num1 / num2)
console.log('45 % 15 =', num1 % num2)
console.log('45 ** 15 =', num1 ** num2)

console.log('средний возвраст группы 14-1 = ', (15+20+18+17+15+17+16) / 7 + ' лет');

//знаки сравнения: >, <, >=, <=, !==

var n1 = 90
var n2 = '90'
console.log(n1 == n2)  //нестрогое равенство
console.log(n1 === n2) //строгое равенство

var word1 = prompt('you"re gay')
var word2 = prompt("you're not gay")
//3)boolean -логический тип данных
//if, else..if, else - условные конструкции
if(word1.length > word2.length){
    console.log('слово ' + word1 + ' длиннее, чем слово ' + word2)
}else if(word2.length > word1.length){
    console.log('слово ' + word2 + ' длиннее, чем слово ' + word1)
}else if(word1.length === word2.length){
    console.log('слово ' + word1 + ' и слово ' +word2 + " равны")
}else{
    console.error("что то пошло не так")
}
























