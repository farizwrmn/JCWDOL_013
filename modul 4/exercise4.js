// Create a function that can create a triangle pattern according to the height we provide//

// 01
// 02 03
// 04 05 06
// 07 08 09 10

let triangleHeight = function (height) {
  let angka = 1;
  let result = "";

  for (let i = 1; i < height; i++) {
    result += i === 1 ? "" : "\n";

    for (let j = 1; j <= i; j++) {
      result += (j === 1 ? "" : " ") + String(angka).padStart(2, "0");
      angka++;
    }
  }
  return result;
};

console.log(triangleHeight(5));
//---------------------------------------------------//

// Create a function that can loop the number of times according to numbers //
// n -> total looping

function n(number = 0) {
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += `${i === i ? "" : ", "} ${
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    }`;
  }
  return result;
}

console.log(n(15));
//------------------------------------------------------------------------------//

// Create a function to calculate Body Mass Index (BMI)

const BMI = function (weight = 1, height = 1) {
  let rumus = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let hasil = "";

  if (rumus < 18.5) {
    hasil = "less weight";
  } else if (rumus >= 18.5 && rumus <= 25.0) {
    hasil = "ideal";
  } else if (rumus > 25.0 && rumus <= 29.9) {
    hasil = "overweight";
  } else if (rumus > 30.0 && rumus <= 39.9) {
    hasil = "very overweight";
  } else {
    hasil = "obesity";
  }
  return hasil;
};

const weight = 50;
const height = 177;

console.log(BMI(weight, height));
//------------------------------------------------//

// Write a function to remove all odds numbers in array and return even only number new array //
// contoh = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 -> 2,4,6,8,10 //

const arr = function (angka = []) {
  return angka.filter(function (angka) {
    return angka % 2 === 0;
  });
};
console.log(arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//--------------------------------------------------------------------//

// Write a function to split a string and convert it into an array of words //
// contoh : "Hello World" -> ["Hello", "World"]

function a(newArr) {
  let b = newArr.split(" ");
  return b;
}
console.log(a("Hello World"));
