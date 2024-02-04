// Write a code to display the multiplication table of a given integer //
const input = 9;
const limit = 10;

for (let i = 0; i <= limit; i++) {
  console.log(`${input} x ${i} = ${input * i}`);
}

// Write a code to check whether a string is a palindrome or not //

let word = "madam";
let split = word.split("");
let balik = split.reverse();
let palindrome = balik.join("");

console.log(
  word === palindrome
    ? `${word} is a palindrome`
    : `${word} is not a palindrome`
);

//-----atau-----//

let kata = "soto";
let reversed = "";

for (let i = kata.length - 1; i >= 0; i--) {
  reversed += kata[i];
}
reversed === kata
  ? (reversed = `${kata} is a Palindrome`)
  : (reversed = `${kata} is not a palindrome`);

console.log(reversed);

// ------------------------------------------------------------ //

// Write a code to convert CM to KM //
let cm = 500000;
let km = cm / 100000;

console.log(`${km} Km`);

// -----------------------------------------------------------//
