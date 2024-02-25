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
//// FOR EACH, BISA MENERIMA HINGGA 3 ARGUMEN////

const day = ["monday", "tuesday", "friday"];

day.forEach((val, index, arr) => {
  console.log(`Direct index ${index} : ${val} arr ${arr}`);
});

const num = [2, 5, 7];
const resu = [];

num.forEach((val) => {
  return resu.push(val * 2);
});

console.log(resu);

const nums = [39, 101, 1, 5, 25, 13];
var min, max;
nums.forEach((val, idx) => {
  if (idx === 0) {
    min = max = val;
  } else if (val < min) {
    min = val;
  } else if (val > max) {
    max = val;
  }
});

console.log(min, max);

const numb = [11, 22, 34, 41, 52, 63, 71, 86];

const numbs = (numbers) => {
  let odd = [];
  let even = [];

  numb.forEach((number) => {
    if (number % 2 == 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  });
  return [odd, even];
};

console.log(numbs(numb));

const nomor = [1, 2, 3];
const rezult = [];

nomor.forEach((val) => {
  rezult.push(val * 2);
});

console.log(rezult);

///////////////////////////////////////////////////////////////////////
//// MAP function ////////////////////////////////////////////////////

const nomor1 = [1, 2, 3];

var mapResult = nomor1.map((number) => {
  return number * 2;
});

console.log(mapResult);

const ars = [1, 2, 3, 4];

const evenOdd = (number) => {
  var hasil = number.map((val) => {
    if (val % 2 === 0) {
      return [val, "Genap"];
    } else {
      return [val, "Ganjil"];
    }
  });
  return hasil;
};

console.log(evenOdd(ars));

const multi = (number, cb) => {
  let arrMap = [];
  // for (let i = 0; i < number.length; i++) {
  //   arrMap.push(cb(number[i]));
  // }
  // return arrMap;

  //////////////////////////////
  //menggunakan forEach ////////
  number.forEach((val) => {
    arrMap.push(cb(val));
  });
  return arrMap;
};

const mult = (number) => {
  return number * 2;
};

const forLoop = multi(ars, mult);
console.log(forLoop);

////////////////////////////////////////////////
/////// Filter ////////////////////////////////

var numbers = [1, 2, 3, 4, 5];

var resFil = numbers.filter((number) => {
  return number % 2 == 1;
});

console.log(resFil);
/* ----------------------------------------- */
var words = ["Koro Sensei", "Jin Mori", "Eren", "Tanjirou", "Zorro"];

let length = words.filter((word) => {
  return word.length <= 5;
});

console.log(length);
/* ----------------------------------------- */

var data = [
  ["John", 43, "Jakarta"],
  ["Baby", 21, "Jakarta"],
  ["Tony", 34, "Surabaya"],
  ["Justin", 29, "Banjarmasin"],
];

var datFil1 = (persons) => {
  let resu = [];
  let resuX = [];
  persons.filter((data) => {
    if (data[1] >= 30 || data[2] == "Jakarta") {
      return resu.push(data);
    } else {
      return resuX.push(data);
    }
  });
  return resu;
};

console.log(datFil1(data));
/* ----------------------------------------- */
///// Filter manual ////////
var filterLoop = (arr, cb) => {
  var arrLoop = [];
  for (let i = 0; i < arr.length; i++) {
    var isTrue = cb(arr[i]);
    if (isTrue) {
      arrLoop.push(arr[i]);
    }
  }
  return arrLoop;
};

var numbss = [1, 23, 31, 20, 48];
var odd = (val) => {
  return val % 2 == 1;
};

console.log(filterLoop(numbss, odd));
/* ----------------------------------------- */

var forEachLoop = (arr, cb) => {
  var result = [];
  arr.forEach((val) => {
    if (cb(val)) {
      result.push(val);
    }
  });
  return result;
};

console.log(forEachLoop(numbss, odd));
/* ----------------------------------------- */
const captain = {
  name: "Kuroky",
  pets: ["cats", "fox", "bird"],
  active: true,
  height: 170,
  play: function (game) {
    console.log(`Playing ${game}`);
  },
};

console.log(captain.play("pubg"));
captain.nationality = "Indonesia";
console.log(captain);

const { name, pets } = captain;
console.log(`my name is ${name} and i have ${pets.length} pets`);

const capitan = new Object();
capitan.name = "Fariz";
capitan.age = 28;
capitan["Pets"] = ["Ciro", "Polly"];
capitan.play = function play(game) {
  return `playing ${game}`;
};
console.log(capitan);
console.log(capitan.play("Dota"));
/*----------------------------------------------------------------------------------------------*/
/// Leetcode - Nested array Generator ////
let inorderTraversal = function* (arr) {
  function* traverse(node) {
    if (Array.isArray(node)) {
      for (let subArray of node) {
        yield* traverse(subArray);
      }
    } else {
      yield node;
    }
  }
  yield* traverse(arr);
};

const gen = inorderTraversal([6, [1, 3]]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
/*----------------------------------------------------------------------------------------------*/
/// PROMISE ////
const tryPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Success");
    } else {
      reject("error");
    }
  }, 2000);
});

tryPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally done"));
/* ------------------------------------------------------ */

let sepatu = {
  merek: "adidas",
  tipe: "Air Jordan",
  ukuran: 42,
};

let listSepatu = [
  {
    merek: "adidas",
    tipe: "air Joran",
    ukuran: 42,
  },
  {
    merek: "adidas",
    tipe: "air jordan",
    ukuran: 39,
  },
];

console.log(listSepatu);
console.log(sepatu);
//
const sepokat = new Object();
sepokat.brand = "Kompas";
sepokat.ukuran = 39;
sepokat.fungsi = function () {
  return "berjalan";
};
console.log(sepokat.fungsi());
