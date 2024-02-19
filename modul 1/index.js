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

// let person = {
//   nama: "fariz",
//   umur: 28,
//   alamatLengkap: {
//     domisili: "Ciputat",
//     asal: "Jakarta",
//   },
//   pendidikan: "S1",
// };

// console.log(person);

// for (key in person) {
//   console.log(person[key]);
// }

// const orang = {
//   firstName: "Fariz",
//   lastName: "Warman",
//   umur: 21,

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set fullName(value) {
//     const split = value.split(" ");
//     this.firstName = split[0];
//     this.lastName = split[1];
//   },
// };

// console.log(orang.fullName);

// orang.fullName = "Anies Baswedan";
// console.log(orang.fullName);

// class User {
//   nama;
//   namaLengkap;

//   constructor(nama, namaLengkap) {
//     this.nama = nama;
//     this.namaLengkap = namaLengkap;
//   }

//   greetings() {
//     return "Hello World";
//   }
// }

// const User1 = class {
//   nama = "Laras";
//   greetings() {
//     return "Hello World";
//   }
// };

// const user = new User("Fariz", "Warman");
// console.log(user.nama, user.namaLengkap);

// const user1 = new User1();
// console.log(user1.greetings());
// //--------------------------------------------------------//

// class a {
//   nama = "Fariz";
//   kelas;
//   umur;

//   constructor(kelas, umur) {
//     this.kelas = kelas;
//     this.umur = umur;
//   }

//   greeting() {
//     return `Hello world`;
//   }
// }

// const b = new a(12);
// console.log(b);

// class stack {
//     #maxSize;
//     #container = [];
//     constructor(maxSize = 10) {
//         this.maxSize = maxSize;
//     }

//     push (element) {

//     }

//     pop() {

//     }

//     getElement() {

//     }
// }

// Single Linked //
// var mergeTwoLists = function (list1, list2) {
//   if (!list1) {
//     return list2;
//   }
//   if (!list2) {
//     return list1;
//   }
//   if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   }
// };

// const num1 = [1, 2, 4];
// const num2 = [1, 3, 4];
// console.log(mergeTwoLists(num1, num2));

// var filter = function (arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       return arr[i];
//     }
//   }
// };

// const greaterThan = function (n) {
//   return n > 10;
// };

// const ray = [0, 10, 20, 30];
// const newArray = filter(ray, greaterThan());
// console.log(newArray);

///////////////////////////////
// Function switch //////////////////

// var numbers = [1, 2, 3];

// const arrCalculator = (arr, operation, operand) => {
//   let arrRes = [];
//   switch (operation) {
//     case "addition":
//       for (let i = 0; i < arr.length; i++) {
//         arrRes.push(arr[i] + operand);
//       }
//       break;

//     case "multiplication":
//       for (let i = 0; i < arr.length; i++) {
//         arrRes.push(arr[i] * operand);
//       }
//       break;
//   }
//   return arrRes;
// };

// console.log(arrCalculator(numbers, "multiplication", 2));

///////////////////////////////
// Function pangkat //////////////////

const power = (num1, num2 = 2) => {
  let result = num1;
  for (let i = 1; i < num2; i++) {
    result *= num1;
  }
  return result;
};

console.log(power(8, 3));

///////////////////////////////
// CALLBACK //////////////////

let addition = (num1, num2) => {
  return num1 + num2;
};
let multiplication = (num1, num2) => {
  return num1 * num2;
};

let result = (a, cb, b) => {
  return cb(a, b);
};

console.log(result(9, multiplication, 7));

///////////////////////////////
// Counter & call inside funct //////////////////

var countDown = (counter) => {
  console.log(counter);
  counter--;
  if (counter >= 0) {
    countDown(counter);
  }
};

console.log(countDown(10));

///////////////////////////////////////////////
/// ADD SUM + 1 ARRAY /////////////////////////
let arr1 = [1, 2, 3];

var map = function (arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

plusone = (n) => {
  return n + 1;
};

const res = map(arr1, plusone);
console.log(res);
////////////////////////////////////////////////
/// ONE FUNCTION CALL /////////////////////////

var once = function (fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
      return result;
    } else {
      return undefined;
    }
  };
};

const arrr = (a, b, c) => a + b + c;
const one = once(arrr);

console.log(one(1, 2, 3));
console.log(one(1, 2, 3));
////////////////////////////////////////////////
/// Counter ///////////////////////////////////
const nom = 5;

function createCounter(init) {
  let counter = init;
  function increment() {
    return ++counter;
  }
  function decrement() {
    return --counter;
  }
  function reset() {
    return (counter = init);
  }
  return { increment, decrement, reset };
}

const counter = createCounter(nom);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
/////////////////////////////////////////////////
//// Number reverse ////////////////////////////
var reverse = function (x) {
  let bit = Math.pow(2, 31) - 1;
  let rev = x.toString().split("").reverse().join("");
  let result = parseInt(rev);
  if (result > bit || result < -bit) {
    return 0;
  }
  if (x < 0) {
    return -result;
  } else {
    return result;
  }
};

const abc = -123;
console.log(reverse(-123));
/////////////////////////////////////////////////
