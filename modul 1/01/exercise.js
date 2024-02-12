// Exercise //

// let rectLength = 5;
// let rectWidth = 3;
// let hasil = rectLength * rectWidth;
// console.log(hasil);

// let length = 5;
// let width = 3;
// let hasil1 = 2 * (length + width);
// console.log(hasil1);

// let radius = 5;
// let pi = 3.14;

// let diameter = radius * 2;
// console.log(diameter);

// let circum = 2 * pi * radius;
// console.log(circum);

// let area = pi * Math.pow(radius, 2);
// console.log(area);

let a = 80;
let b = 65;
let c = 180;

const hasiil = c - (a + b);
console.log(hasiil);

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let hasil = (date2 - date1) / (24 * 3600 * 1000);

console.log(hasil);

const day = 400;
const dayInYear = 365;
const dayInMonth = 30;
const dayInWeek = 7;

const year = (day / dayInYear).toFixed();
const month = ((day % dayInYear) / dayInMonth).toFixed();
const days = day - year * dayInYear - month * dayInMonth;

console.log(`${year} Tahun, ${month} Bulan, ${days} Hari`);

//----------------------------------------------------------------------------------//
