// 1. write three type of variable

/* var number = 42;
var name = 'Ezabul bari';
var isDaySunny = true; */


// 2. write two variable with "let" and "const"

/* let number = 522;
const name = 'Ezabul bari';

let number = 544; */

// 3. simple math oparetion with (+, -, *, /, %)

/* const num1 = 25;
const num2 = 5;

const sum = num1 + num2;
console.log(sum);

const minus = num1 - num2;
console.log(minus);

const multiplay = num1 * num2;
console.log(multiplay);

const divide = num1 / num2;
console.log(divide);

const modulus = num1 % num2;
console.log(modulus); */


// 4. comparision variable (<, >, <=, >=, ==, !=)

/* const num1 = 24;
const num2 = 14;

if(num1 < num2){
    console.log('num2 is bigger');
}
if(num1 > num2){
    console.log('num2 is smaller');
}
if(num1 <= num2){
    console.log('num2 is bigger and equale');
}
if(num1 >= num2){
    console.log('num2 is smaller and equale');
}
if(num1 == num2){
    console.log('num1 and num2 is equale');
}
if(num1 != num2){
    console.log('num1 and num2 is not equale');
} */


// 5. full fill both condition and full fill only one condition 

/* var age = 30;
var money = 10000;
var home = true;

if(age > 25 && home == true || money > 500000){
    console.log('colo biya kori')
} */


// 6.if else  

/* var rofik = 22;
var tonmoy = 26;
var shibly = 26;

if(rofik > tonmoy){
    console.log('rofik boro vai')
}
else if(tonmoy == shibly){
    console.log('alorito-30 amra sobai bondhu')
} */


// 7. while loop declare 7 to 19 number 

/* var i = 7;
while(i <= 19){
    console.log(i);
    i++;
} */


// 8. declare an array, change a valu, total element numbers 

/* const age = [12, 13, 14, 15, 17, 14, 16, 18, 19, 12, 16, 17, 13, 11]

const length = age.length;
console.log(length);

const index = age.indexOf(15);
console.log(index);

const element = age[4];
console.log(element);

age[0] = 20;
age[9] = 99;
console.log(age);

age.push(102);
age.push(100);
console.log(age);

age.pop();
console.log(age); */


// 9. use a for loop , display an array all element 


/* const products = ['kola', 'badam', 'lici', 'hiuyt', 'ooajd', 'kopadd'];

for(let i = 0; i < products.length; i++){
    console.log(products);
} */

// 10. i have number of an array , find the element who is bigger than 80


/* function heighestNumber(num){
    let bigNumber = 0;
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if (element > bigNumber) {
            bigNumber = element;
        }
    }
    return bigNumber;
}

const age = [12, 15, 78, 89, 85, 41, 86, 84, 52];
const myBigNumber = heighestNumber(age);
console.log(myBigNumber); */


// 11. write a function input three numbers and multiplye the three numbers . sum the thre multiplye numbers 


/* function multiply(num1, num2, num3){
    const firstMultiply = num1 * num2;
    const secondMultiply = num2 * num3;
    const thirdMultiply = num3 * num1;
    const sumOfThreeMultiply = firstMultiply + secondMultiply + thirdMultiply;
    return sumOfThreeMultiply;
}

let threeNumbers = multiply(12, 22, 32);
console.log(threeNumbers); */



// 12. declare an object and change any property of this object.


var man = {
    name: 'ezabul', roll: 1524030, sesion: 2015.16, home:'bagerhat', color: 'gray',
}

man['roll'] = 112233;
console.log(man);