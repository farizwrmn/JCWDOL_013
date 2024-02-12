// --------EXERCISE-------- //

// Konversi celsius ke fahrenheit //
// Rumus (60ºC x 9) / 5 + 32 = 140ºF //

const c = 60;
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
// n(6); // bukan prima
//--------------------------------------------------------//

// Membuat code untuk pejumlahan angka dari 1 ke N //
// contoh: 5 adalah 1 + 2 + 3 + 4 + 5 = 15 //

const N = 5;
let angka = 0;
message = `${N} -> `;

for (let i = 1; i <= N; i++) {
  angka += i;
  message += i == N ? ` ${i} = ${angka}` : ` ${i} +`;
}

console.log(message);
//---------------------------------------------------------//

// Mencari nomor faktorial //
// Rumus: !5 = 5 * 4 * 3 * 2 * 1 = 120 //

let factNo = 4;
message = `factorial of ${factNo} = `;
for (let i = factNo - 1; i >= 1; i--) {
  factNo *= i;
}
message += `${factNo}`;
console.log(message);

// -------------------------------------------------------//

// Menampilkan angka fibonacci N //
// Contoh: 15 -> 610 //

calc = 0;
numberN = 15;
let number1 = 0;
let number2 = 1;
message = `First ${numberN} of fibonacci = ${number1}, `;

for (let i = 1; i <= numberN; i++) {
  calc = number1 + number2;
  number1 = number2;
  number2 = calc;
  message += i == 1 ? `${number1}` : `, ${number1}`;
}
console.log(message);
