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

// Write a code to format number as currency (IDR) //

let idr = 1000;
let currency = idr.toLocaleString("id");
let format = `Rp. ${currency},00`;

console.log(format);

// ----------------------------------------------------------- //

// Write a code to remove the first occurrence of a given "Search string" from a string //

let str = "Hello World";
str = str.replace("ell", "");

console.log(`ell -> ${str} `);
// -----------------------------------------------------------//

// Write a code to capitalize the first letter of each word in a string //

let abc = "hello World";
let Abc = abc.charAt(0).toLocaleUpperCase() + abc.slice(1);

console.log(Abc);
