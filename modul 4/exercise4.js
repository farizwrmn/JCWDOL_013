// Create a function that can create a triangle pattern according to the height we provide//

// 01
// 02 03
// 04 05 06
// 07 08 09 10

// const pertambahan = function (a, b) {
//   return a + b;
// };

// console.log(pertambahan(2, 4));

var penjumlahan = function (num1, num2) {
  let sisi = Math.pow(num1, 3);
  // console.log(sisi);
  let sisi1 = Math.pow(num2, 3);
  // console.log(sisi1);

  return sisi + sisi1;
};

console.log(penjumlahan(8, 2));
console.log(penjumlahan(5, 2));
