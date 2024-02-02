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

// Exercise //
// let rectLength = 5;
// let rectWidth = 3;
// let hasil = rectLength * rectWidth;
// console.log(hasil);

// let length = 5;
// let width = 3;
// let hasil1 = 2 * (length + width);
// console.log(hasil1);

// let radius = 5;
// let pi = 3.14;

// let diameter = radius * 2;
// console.log(diameter);

// let circum = 2 * pi * radius;
// console.log(circum);

// let area = pi * Math.pow(radius, 2);
// console.log(area);

// let a = 80;
// let b = 65;
// let c = 180;

// const hasiil = c - (a + b);
// console.log(hasiil);

// let date1 = new Date("2022-01-20");
// let date2 = new Date("2022-01-22");
// let hasil = (date2 - date1) / (24 * 3600 * 1000);

// console.log(hasil);

// const day = parseInt(prompt("Masukkan berapa Hari"));
// const dayInYear = 365;
// const dayInMonth = 30;
// const dayInWeek = 7;

// const year = (day / dayInYear).toFixed();
// const month = ((day % dayInYear) / dayInMonth).toFixed();
// const days = day - year * dayInYear - month * dayInMonth;

// alert(`${year} Tahun, ${month} Bulan, ${days} Hari`);

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

// --------EXERCISE-------- //

// Konversi celsius ke fahrenheit //
// Rumus (60ºC x 9) / 5 + 32 = 140ºF //

const c = 30;
const f = (c * 9) / 5 + 32;
console.log(f);
// ---------Atau--------- //
console.log((60 * 9) / 5 + 32 + "ºF");
//------------------------------------------------//

// Even or Odd number checker //
// Angka Genap jika di modulus (%) 2 = 0, Selain itu program akan menilai Angka sebagai Bilangan Ganjil, Membuat Variabel nomor yang akan di periksa dan memasukkan rumus di  //

let noToCheck = 25;

if (noToCheck % 2 === 0) {
  console.log(`${noToCheckoToCheck} Adalah bilangan Genap`);
} else {
  console.log(`${noToCheck} Adalah bilangan Ganjil`);
}

//----------Atau--------- //
const isEven = 2;
const isOdd = isEven % 2 === 0;

isOdd
  ? console.log(`${isEven} Bilangan Genap`)
  : console.log(`${isEven} Bilangan Ganjil`);
// -------------------------------------------------- //

// Prime number checker //
// Bilangan primer adalah bilangan asli yang lebih dari 1 dan bukan hasil perkalian dari 2 bilangan asli yang lebih kecil //

const n = (angka) => {
  let pembagi = 0;
  for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    console.log("prima");
  } else {
    console.log("bukan prima");
  }
};

n(7); // prima
n(6); // bukan prima
//--------------------------------------------------------//

// Write a code to find the sum of numbers 1 to N
const N = 5;
let calc = 0;
message = `${N} -> `;

for (let i = 1; i <= N; i++) {
  calc += i;
  message += i == N ? ` ${i} = ${calc}` : ` ${i} +`;
}

console.log(message);
//---------------------------------------------------------//

// Write a code to find factorial of number
let factNo = 5;
message = `factorial of ${factNo} = `;
for (let i = n - 1; i >= 1; i--) {
  n *= i;
}
message += `${factNo}`;
console.log(message);
