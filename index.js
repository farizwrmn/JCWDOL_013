/// PROMISE ////
// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("Success");
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });

// tryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally done"));
/* --------------------------------------------- */
////// FETCH / Promise example //////////////////////

// const fetchData = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((Response) => {
//       return Response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("always running");
//     });
// };

// fetchData();
/* --------------------------------------------- */
///// Async Await //////////
// const withAsyncAwait = async () => {
//   console.log("satu with async await");
//   await tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally((fin) => console.log(fin));
// };

// tryPromise();

// const getData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(getData());
// /* --------------------------------------------- */
// ////// With throw ////////
// const tryThrow = () => {
//   try {
//     let isFalse = true;
//     if (isFalse) {
//       throw "there is an error";
//     }
//     console.log("success");
//   } catch (err) {
//     console.log(err);
//   }
// };

// tryThrow();

// const login = (username, password) => {
//   try {
//     if (!username || !password) {
//       throw `Username dan password wajib di isi`;
//     }
//     console.log("success");
//   } catch (err) {
//     console.log(err);
//   }
// };

// console.log(login("asd", "asd"));
// //// throw new lebih detail dalam throw error /////
// const tryThrowNew = () => {
//   try {
//     let isFalse = true;
//     if (isFalse) {
//       throw new Error("error");
//     }
//     console.log("success");
//   } catch (err) {
//     console.log(err);
//   }
// };

// tryThrowNew();
/* ------------------------------------------------- */
// JSON to Object JS //
// const text =
//   '{ "employees": [' +
//   '{ "firstName": "John", "lastName": "Doe"},' +
//   '{ "firstName": "Anna", "lastName": "Smith"},' +
//   '{ "firstName": "Peter", "lastName": "Jones"} ]}';

// console.log(JSON.parse(text));
// // Object to JSON //

// const text1 = {
//   employees: [
//     { firsName: "John", lastName: "Doe" },
//     { firstName: "Anna", lastName: "Smith" },
//     { firstName: "Peter", lastName: "Jones" },
//   ],
// };
// console.log(JSON.stringify(text1));
/* ------------------------------------------------------------- */
//////////// EXAM //////////////////
console.log(typeof null);
console.log(typeof 151);
/* ----------------------------- */
const user = {
  name: "andika",
  age: 19,
};
console.log(user.name);
console.log(user.status);
/* ----------------------------- */

///// INVALID ARRAY LENGTH ////////////
// let temp = "javascript is awesome".split(" ");
// for (let i = 0; i < temp.length; i += 1) {
//   temp.push(temp[i]);
// }
// console.log(temp);
/* ----------------------------- */

//// apakah perbedaan utama antara pembuatan variable menggunakan let dan const /////
//// perbedaannya adalah variable let masih bisa diubah dan const tidak bisa diubah ////

/* ----------------------------- */

/////////// data tidak lengkap //////////////
const nama = "indra";
const umur = 17;
if (!nama || !umur) console.log("data salah");
else if (nama && umur > 17) console.log("sudah dewasa");
else if (nama && umur < 17) console.log("belum dewasa");
else console.log("data tidak lengkap");
/* ----------------------------- */

////// cannot access 'getDouble' before initialization //////
// getDouble(4);
// const getDouble = function (numb) {
//     console.log(2 * 2);
// };

/* ----------------------------- */

////// [jeruk, lemon, kiwi, jambu, semangka] ////////
const fruits = ["Pisang", "Jeruk", "Jambu", "Semangka"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.shift();
console.log(fruits);
/* ----------------------------- */

//// taufik /////////////////////
// let name = "andika";
// name += "julien";
// name = "taufik";
// console.log(name);
/* ----------------------------- */
//// perbedaan forEach() dengan map() yang paling tepat? ////
/// forEach() tidak perlu mereturn nilai dan map() perlu utk mereturn nilai akhir ///
/// dan forEach tidak memanipulasi data utama sedangkan Map memanipulasi data utama ////
/* ----------------------------- */

///////// Tipe data string dengan hasil NaN atau not a number /////////////
let angka = "12z";
angka = Number(angka);
angka = String(angka);
console.log(angka);
console.log(typeof angka);
/* ----------------------------- */
///// penulisan nama dan deklarasi variable yang benar dalam javascript /////
//// var name = "", let angka = 0, const nilai = {} /////
/* ----------------------------- */

///// STACK adalah jenis data structure yang menggunakan LIFO /////////

/* ----------------------------- */

///// console.log(data[3]()); ////
const data = [
  "number",
  true,
  { name: "junior", age: 17 },
  () => [{ result: "callback" }],
];
console.log(data[3]());
/* ----------------------------- */
///// yang akan ditampilkan adalah angka: 4 /////
getDoublee(4);
function getDoublee(numb) {
  console.log(2 * 2);
}

/* ----------------------------- */

//////// 241 /////////
let angka1 = "12";
angka1 *= 2;
angka1++;
angka1--;
angka1 += "1";
console.log(angka1);
/* ----------------------------- */

//// name is not defined /////////
// function capitalize() {
//   const name = "KLEE";
// }

// console.log(name);
/* ----------------------------- */

/// [ 1, 2, 3, 3] //////
let temp1 = [3, 2, 1, 5];
temp1.push(3);
temp1.sort();
temp1.pop();
console.log(temp1);
/* ----------------------------- */

///// TRUE //////////////////////
let arr = [
  "book",
  true,
  [1, "banana"],
  null,
  ["false", [2, NaN], false, ["clock", 0]],
  NaN,
  false,
  [true],
];
console.log(Boolean(arr[4][3][0]));
console.log(arr[4][3][0]);
/* ----------------------------- */

////// "Hello, World!" //////////
let output = "Hello";
if ("0" != true) output += ", World!";
console.log(output);
/* ----------------------------- */

/////// Perbedaan dari While dan Do While /////////
// While: pengecekan kondisi di awal, Do While: pengecekan kondisi di akhir ////
// While: selama kondisi terpenuhi jalankan perintah/////
// Do While: lakukan perintah, kemudian cek apakah kondisi sudah terpenuhi /////
let i = 0;
while (i < 5) {
  i++;
}
console.log(i);

let x = 0;
do {
  x++;
} while (x < 5);

console.log(x);
/* ----------------------------- */

///// pernyataan yang benar mengenai ARRAY, kecuali.. /////
// function printMessage(message, callback) {
//   callback(message);
// }
// console.log(printMessage("Hello", "World"));
/* ----------------------------- */

///// TRUE ////////////////////////
console.log(String(12) === "12");
/* ----------------------------- */

///// Variabel const tidak dapat diubah isinya //////////
const sentence = "Learn javascript at Purwadhika";
sentence.replace("a", "o");
sentence.split(" ");
// sentence.reverse();
console.log(sentence);
/* ----------------------------- */

///// O(n2) //////////////////////
function checkDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
console.log(checkDuplicate([1, 2, 3, 1]));
/* ----------------------------- */
