///////////////////////////////////////////////////////////////////
///////////////// EXERCISE 9 ///////////////////////////////////////
const element = (arr) => {
  return (
    arr.filter((i) => arr.filter((y) => y == i).length > arr.length / 2)[0] || 0
  );
};

console.log(element([4, 2, 1, 4, 4]));
/*---------------------------------------------*/
