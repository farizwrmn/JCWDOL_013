// Write a function to get the lowest, average and highest value in array //
// contoh : arr = [12, 5, 23, 18, 4, 45, 32] -> {lowest : 4, highest : 45, average: 19.8}

function Arr(max) {
  let highest = Math.max(...max);
  let num1 = Math.min(...max);
  let avg = "";
  let hasil = "";
  for (let i = 0; i < max.length; i++) {
    avg += max[i];
  }
  avg = avg / max.length;

  return `lowest : ${hasil + num1}, highest : ${hasil + highest}, average : ${
    hasil + Math.floor(avg)
  }`;
}

console.log(Arr([12, 5, 23, 18, 4, 45, 32]));
//----------------------------------------------------------------------------------------------//

// Write a function that takes an array of words and returns a string by concat, separate with commas "and" the last word //
// Contoh : arr = ["apple", "banana", "cherry", "date"] -> "apple, banana, cherry, and date"

function arr([...string]) {
  let last = string.pop();
  return string + ", and " + last;
}

console.log(arr(["apple", "banana", "cherry", "date"]));
//-----------------------------------------------------//

// Write a function to split a string and convert it into an array of words //
// contoh : "Hello World" -> ["Hello", "World"]

function a(newArr) {
  let b = newArr.split(" ");
  return b;
}
console.log(a("Hello World"));
//---------------------------------------------------//

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// contoh : [1, 2, 3] + [3, 2, 1] -> [4, 4, 4]
const Arr1 = [1, 2, 3];
const Arr2 = [3, 2, 1];

let sum = Arr1.map(function (angka, angka1) {
  return angka + Arr2[angka1];
});

console.log(sum);
//-----------------------------------------------------//

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// contoh : arr = [1, 2, 3, 4], newElement = 7 -> [1, 2, 3, 4, 7]

function addArr(Arr3, num) {
  if (!Arr3.includes(num)) {
    Arr3.push(num);
  }
  return Arr3;
}

const Arr3 = [1, 2, 3, 4];
const element = 7;

console.log(addArr(Arr3, element));
//-------------------------------------------------------//
