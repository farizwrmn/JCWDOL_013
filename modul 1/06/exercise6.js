// Exercise 6.1 //

const student = [
  {
    name: "Johhny",
    email: "johnny@gmail.com",
    age: new Date("01-11-1999"),
    score: 75,
  },
  {
    name: "Phil",
    email: "phil@gmail.com",
    age: new Date("2-11-1998"),
    score: 40,
  },
  {
    name: "Budi",
    email: "bud@gmail.com",
    age: new Date("3-11-1997"),
    score: 30,
  },
];

function arr(object) {
  let hasil = {
    score: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
    age: {
      highest: 0,
      lowest: 0,
      average: 0,
    },
  };

  let score = [];
  let age = [];
  let date = new Date();

  for (let i = 0; i < object.length; i++) {
    let date = new Date();
    score.push(object[i].score);
    age.push(object[i].age);
  }
  console.log(score);
  console.log(age);
  hasil.score.highest = Math.max(...score);
  hasil.score.lowest = Math.min(...score);
  hasil.score.average = score.reduce((a, b) => a + b) / score.length;

  hasil.age.highest = Math.max(...age);
  hasil.age.lowest = Math.min(...age);
  hasil.age.highest = age.reduce((a, b) => a + b) / age.length;

  return hasil;
}
console.log(arr(student));
