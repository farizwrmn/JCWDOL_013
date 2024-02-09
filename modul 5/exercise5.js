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
