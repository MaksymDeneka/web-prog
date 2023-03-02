//Variables
let num = 10;
let str = "string";
let bool = true;
let nullVar = null;
let undef = undefined;
let bigInt1 = 9007199254740991n;
let num2 = 23;
let str2 = "string2";
let bool2 = false;
let bigInt2 = 9457719925474091n;

/* Checking types of variables */
console.log(typeof(num), typeof(str) ,typeof(bool) ,typeof(nullVar) ,typeof(undef) ,typeof(bigInt1), typeof(num2) ,typeof(str2) ,typeof(bool2) ,typeof(bigInt2));

//Assignment operator
const numX = 2;
let numY = 3;
console.log(numY += numX);


//Logical operator
const number1 = 3;
const number2 = 10;
if(number1 > 1 && number2 < 20){
	console.log(number1 * number2)
} else {
	console.log("change vars")
}

//Bitwise operator
let number3 = 5 & 3;
console.log(number3)