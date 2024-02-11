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
