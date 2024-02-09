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
