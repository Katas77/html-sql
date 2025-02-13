var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
alert(myCar.make)

   function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
   var mycar = new Car("Eagle", "Talon TSi", 1993);
        alert(mycar.year)

 let user = {
   name: "John",
   age: 30
 };
 alert( user.name );
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

let roma = {
  name: "Рома",
  sayHi: function() {
    alert("Привет, дружище!");
  }
};

roma.sayHi();