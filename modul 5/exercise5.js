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

// Write a function to remove all odds numbers in array and return even only number new array //
// contoh = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 -> 2,4,6,8,10 //

const b = function (angka3 = []) {
  return angka3.filter(function (angka3) {
    return angka3 % 2 === 0;
  });
};
console.log(b([1, 2, 3, 4, 5, 6]));
//------------------------------------------------------//

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements) //
// Contoh : maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

function maxSize(limit, ...num) {
  return num.slice(0, limit);
}

const limitArr = 5;
console.log(maxSize(limitArr, 5, 10, 24, 3, 6, 7, 8));
//------------------------------------------------------//

// Write a function that will combine 2 given array into one array //
// contoh : arr1 = [1, 2, 3], arr2 = [4, 5, 6] -> [1, 2, 3, 4, 5, 6]

const comb = function (no, no1) {
  return no.concat(no1);
};

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

console.log(comb(arr3, arr4));
//-----------------------------------------------------//

// Write a function to find duplicate values in array //
// contoh : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] -> [2, 3, 5]

const arr5 = [1, 2, 2, 2, 3, 3, 4, 5, 5];

const dupl = function () {
  let z = arr5.filter((item, index) => arr5.indexOf(item) !== index);
  return z;
};

const duplElements = dupl(arr5);
console.log(duplElements);
//--------------------------------------------------------//

// Write a function to find diferentiate between 2 arrays //
// contoh : arr1 = [1, 2, 3, 4, 5], arr = [3, 4, 5, 6, 7] -> [1, 2, 6, 7]

function dif(data, data1) {
  let removed = [];
  for (i of data) {
    if (!removed.includes(i) && !data1.includes(i)) {
      removed.push(i);
    }
  }
  for (i of data1) {
    if (!removed.includes(i) && !data.includes(i)) {
      removed.push(i);
    }
  }
  return removed;
}
const c = [1, 2, 3, 4, 5];
const d = [3, 4, 5, 6, 7];

console.log(dif(c, d));
//--------------------------------------------------------//
