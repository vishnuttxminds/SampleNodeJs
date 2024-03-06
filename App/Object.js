
// let person = "John Doe";

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     get lang() {
//       return this.language;
//     }
//   };



let person = {
    name: 'John Doe',
    age: 30,
  };
  
  let object = Object.create (person);

console.log('====================================');
console.log(object.age);
console.log('====================================');