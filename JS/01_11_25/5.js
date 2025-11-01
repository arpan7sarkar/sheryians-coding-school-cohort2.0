//take user input and check if its even or odd
// let num=prompt("Enter a number");//prompt always gives us string
let num=+prompt("Enter a number");// if we attach + at first then the prompt willl be taken as int
// num=parseInt(num); or Number(num)
if(num%2===0) console.log("Even");
else console.log("odd");


