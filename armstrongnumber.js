let sum = 0;
const number = prompt('Enter any three digit positive integer: ');
let temp = number;
while (temp > 0) 
{
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
if (sum == number) 
{
    console.log(`${number} is the Armstrong number`);
}
else
{
    console.log(`${number} is not the Armstrong number`);
}
}
