// Write a code to display the multiplication table of a given integer //
const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
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

let kata = "101";
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
//------------------------------------------------------------//

// Write a code to reverse a string //

const w = "hello";
let x = w.split("");
let b = x.reverse();
let a = b.join("");

console.log(`${w} -> ${a}`);
// --------------------------------------------------------------//

// Write a code to swap the case of each character from string //

let W = "tHe QuIcK BrOwN FoX";
W = W.replace("tHe QuIcK BrOwN FoX", "ThE qUiCk bRoWn fOx ");

console.log(W);

//---------------------------------------------------------------//

// Write a code to find the largest of two given integers //

let num1 = 42;
let num2 = 27;
let bigger = Math.max(num1, num2);

console.log(bigger);
//---------------------------------------------------------------//

// Write a conditional statement to sort three numbers //
let arr = [42, 27, 18];
let y = arr.sort();

console.log(y);
//---------------------------------------------------------------//

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.//

let input1 = 1;

if (typeof input1 == "string") {
  console.log(1);
} else if (typeof input1 == "number") {
  console.log(2);
} else {
  console.log(3);
}
//------------------------------------------------------------------//

// Write a code to change every letter a into * from a string of input //

// let letter = "An apple a day keeps the doctor away";
// let star = "";

// for (let i = 0; i < letter.length; i++) {
//   if (letter[i] == "a" || letter[i] == "A") {
//     star += "*";
//   } else {
//     star += letter[i];
//   }
// }
// console.log(star);
