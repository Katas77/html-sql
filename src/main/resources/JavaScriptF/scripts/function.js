var iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");}


let message;
message = 'Hello!';
message=1;
alert(message); // показывает содержимое переменной
let message3 = 'Hello!'; // определяем переменную и присваиваем ей значение
alert(message); // Hello!

//Мы также можем объявить несколько переменных в одной строке:
let user = 'John', age = 25, message2 = 'Hello';


function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result );

function sayHi() {
  alert( "Привет" ); //Function Declaration (Объявление Функции):
}

let sayHi = function() {  //Function Expression Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.
  alert( "Привет" );
};
let sum2 = function(a, b) { return a + b;};
let result = sum2(1, 2);
alert( result );

let sum5 = (a, b) => a + b;/* Эта стрелочная функция представляет собой более короткую форму: let sum = function(a, b) { return a + b;};*/
alert( sum5(1, 2) ); // 3

let age = prompt("Сколько Вам лет?", 18);//Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:
let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");
welcome();
