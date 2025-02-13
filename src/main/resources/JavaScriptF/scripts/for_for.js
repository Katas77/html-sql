 for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
   alert(i);}

 let sum = 0;
 while (true) {
   let value = +prompt("Введите число", '');
   if (!value) break; // (*)
   sum += value;}
 alert( 'Сумма: ' + sum );

let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;}

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;}
//Фигурные скобки не требуются для тела цикла из одной строки
 // Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки
 let i = 3;
 while (i) alert(i--);

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {

  alert( key );
  alert( user[key] ); }

    let codes = {
      "49": "Германия",
      "41": "Швейцария",
      "44": "Великобритания",
      "1": "США"
    };

    for (let code in codes) {
       alert(code);
      alert(codes[code]);
    }