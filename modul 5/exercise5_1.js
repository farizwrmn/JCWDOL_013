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
