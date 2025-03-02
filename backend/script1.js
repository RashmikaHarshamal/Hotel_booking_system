let user = {name: "hello", age: 21, city: "Gampaha", email: "hello@g.com" };

//for objects
// const { name, age, ...rest } = user;

// console.log(name);
// console.log(age);
// console.log(rest);

//for list
const data = ["name1", "name2", 12, "gampaha"];

const [firstname, lastname, ...rest] = data;

console.log(firstname);
console.log(lastname);
console.log(rest);

const data2 = [...data];

data2[0] = "name3";

console.log(data);
console.log(data2);

