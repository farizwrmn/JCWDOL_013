// var x = 4;
// var y = 3;
// var z = 2;
// var firstStep = (x + y * z) / (x * y);
// var w = Math.pow(firstStep, z);
// console.log(Math.round(w));

// var input = prompt("Masukkan angka berapapun");
// var prompt = parseInt(input);
// var kuadrat = Math.pow(prompt, 2);
// var hasil = `Angka kuadrat dari ${prompt} = ${kuadrat}`;

// alert(hasil);
// console.log(hasil);

// var bilangan = prompt("Masukkan angka berapapun");
// var akar = Math.cbrt(bilangan);

// alert(akar);
// console.log(akar);
// console.log(typeof akar);

// var day = 485;
// var year = 360;
// var month = 30;
// var week = 7;

// var hari = `${day} Hari `;
// var tahun = `${year} Tahun `;
// var bulan = `${month} Bulan `;
// var minggu = `${week} Minggu `;
// var hasil = tahun + bulan + minggu + hari;

// console.log(hasil);

// let kotakSepatu = "hermes";
// console.log(kotakSepatu);
// kotakSepatu = "gucci";
// console.log(kotakSepatu);

// const kotakBaju = "herman";
// console.log(kotakBaju);

// const test = "hello";
// var test1 = test.toUpperCase();
// console.log(test.toLocaleUpperCase());
// console.log(test1);

// let y = 5;
// console.log(++y);

// let x = 2;
// let w = 2;

// console.log(x === w);

// let y = 17;
// if (y <= 16) {
//   console.log("Anda belum cukup umur");
// } else {
//   console.log("Anda sudah cukup umur");
// }

// let grade = "76";
// if (grade >= 75) {
//   console.log("Selamat anda Lulus");
// } else if (grade <= 75) {
//   console.log("Maaf anda belum lulus");
// } else {
//   console.log("Maaf bukan angka");
// }

// let NoToCheck = -9;
// let isEven;

// if (NoToCheck % 2 === 0) {
//   console.log(`${NoToCheck} Adalah bilangan genap`);
// } else {
//   console.log(`${NoToCheck} Bukan genap`);
// }

// const myStr = "bob";
// let mySsr = "J";
// mySsr += myStr.slice(1);
// console.log(mySsr);

// const myStr = "Lovelace";
// let lastName = myStr[myStr.length - 1];
// console.log(lastName);

// const name = [
//   ["john", 15],
//   ["simmy", 14],
//   ["opi", 12],
// ];
// const removed = name.pop();
// console.log(removed);

// NESTED FUNCTION //

// function getMessage(firstName) {
//   function sayHello() {
//     return `Hello ${firstName}, `;
//   }
//   function welcomeMessage() {
//     return "welcome to Purwadhika!.";
//   }
//   return sayHello() + welcomeMessage();
// }

// console.log(getMessage(123));

// CLOSURE //

// function greeting(name) {
//     const defaultMessage = 'Hello ';

//     return function() {
//         return defaultMessage + name;
//     };
// }
// const result = greeting("Budi");
// console.log(result());
// console.log(greeting("Dodo")());

// CURRYING //

// function multiplierCur(factor) {
//   return function (number) {
//     return function (number2) {
//       return number * factor * number2;
//     };
//   };
// }
// const data = multiplierCur(5);
// const result1 = data(3);

// console.log(result1(1));
// console.log(multiplierCur(3)(3)(2));

// ARROW FUNCTION //

// const pengurangan = (a, b) => {
//   return a - b;
// };

// console.log(pengurangan(4, 2));

// //-----------------------------------//

// const pertambahan = (a, b) => a + b;

// console.log(pertambahan(3, 3));
//---------------------------------------//

// var isPalindrome = function (x) {
//   let name = x.toString();
//   for (var i = 0; i < name.length / 2; i++) {
//     if (name.charAt(i) != name.charAt(name.length - 1 - i)) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPalindrome("madam"));

// class User {
//   name = "budi";
//   greeting() {
//     return "Hello World";
//   }
// }

// const user = new User();
// console.log(user.greeting())

// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }
// };

// const arr = [null];
// console.log(arr.last()); // 3

// var romanToInt = function (s) {
//   let ans = 0;
//   return s * ans;
// };

// console.log(romanToInt());

let person = {
  nama: "fariz",
  umur: 28,
  alamatLengkap: {
    domisili: "Ciputat",
    asal: "Jakarta",
  },
  pendidikan: "S1",
};

console.log(person);

for (key in person) {
  console.log(person[key]);
}

const orang = {
  firstName: "Fariz",
  lastName: "Warman",
  umur: 21,

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },
};

console.log(orang.fullName);

orang.fullName = "Anies Baswedan";
console.log(orang.fullName);
