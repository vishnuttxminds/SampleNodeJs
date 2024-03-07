//npx ts-node TypeScriptScreen.ts

const hello = () => {
  return sum(6, 2);
};

let sum = (x: number, y: number): number => {
  let result = x + y;
  return result;
};

console.log("====================================");
console.log(hello());
console.log("====================================");
