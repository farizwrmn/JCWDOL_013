// Write a function that will return primitive data types only
// Contoh : arr = [1, [], undefined, {}, "string", {}, []]; -> [1, undefined, "string"]

function a(primitive) {
  let order = primitive.sort();
  let re = order.slice(5);
  let hasil = re.unshift(1);

  return re;
}

const arr = [1, [], undefined, {}, "string", {}, []];
console.log(a(arr));
//----------------------------------------------------//

// Write a function to return the second smallest number //
// contoh : numbers = [5, 3, 1, 7, 2, 6] -> 2

function b(num) {
  let result = "";
  let order = num.sort();
  return result + order[1];
}

const numbers = [5, 3, 1, 7, 2, 6];
console.log(b(numbers));
// --------------------------------------------- //

// Write a function from a given array of mixed data types and return the sum of all the numbers //
// Contoh : mixedArr = ["3", 1, "String", null, false, undefined, 2] -> 3

function sum(arr) {
  let hasil = arr.sort();
  console.log(hasil);
  return hasil[0] + hasil[1];
}

const mixedArr = ["3", 1, "String", null, false, undefined, 2];
console.log(sum(mixedArr));
//-------------------------------------------------------------------//

// Write a function from the below array of number that will return sum of duplicate values //
// Contoh : arr = [10, 20, 40, 10, 50, 30, 10, 60, 10] -> 40;

function dupl(sum) {
  let z = sum.filter((item, index) => sum.indexOf(item) !== index);
  return z[0] + z[0] + z[1] + z[2];
}
const Arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(dupl(Arr));
//----------------------------------------------------------------//
