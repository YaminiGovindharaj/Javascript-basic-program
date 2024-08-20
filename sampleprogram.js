function isEven(element) 
{
  return element % 2 == 0;
}
let randomArray = [8, 52, 8, 10, 9];

let firstEven = randomArray.find(isEven);
console.log(firstEven); 
let firstOdd = randomArray.find((element) => element % 2 == 1);
console.log(firstOdd);
