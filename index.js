// type conversion 
const inputYear = '1992';
console.log(Number(inputYear)) //the number() converts a string to a number
console.log(Number(inputYear) + 10); //adding a number() converts the string to number and adds 10

console.log(Number('jonas')) //javascript will return NUN since it cannot convert jonas to a number

console.log(String(232));

// type coersion
console.log('i am' + " " + 23 + " " + 'years old!'); //converts numbers to strings
console.log('23'- '10' - 3);//converts strings to number

let n = '1'+ 1;
n = n - 1;
console.log(n);// thi will result to 10 since on line 14 javascript add string '1' to 1 becoming 11 the minus 1 