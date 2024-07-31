// (1)
// function revereastring(str){
//     const strArr = str.split("")
//     console.log(strArr.reverse().join(""))
// }
// revereastring("Who We Are");
// (2)
// function isPalindrome(pdrom){
//     const Str01 = pdrom.toLowerCase().replace(/[\W_]/g, '');
//     const reverseStr01 = Str01.split("").reverse().join("");

//     return Str01 === reverseStr01

//     console.log(reverseStr01)
// }

// console.log(isPalindrome(""))

// (3)
// const arr = [4,3,2,1,8,7,11];

// function avgOfArr(arr){
//     const total = arr.reduce((acc,currentEelement)=>{
//         return acc+currentEelement;
//     },0)
//     return total/arr.length
// }
// console.log(avgOfArr(arr))

// (4)maxNO

// const arr = [1, 8, 9, 1, -2];

// console.log(...arr);

// function maxN(arr) {
//   return Math.max(...arr);
// }

// console.log(maxN(arr));

// (5)

// function findTheFactorial(num){
//     let fact = 1;
//     for(let i=1 ; i<=num ; i++){
//         fact = fact * i;
//        console.log("fact==>",fact,"i===>",i)
//     }
//     return fact;
// }

// console.log(findTheFactorial(4));
// (6)


// function some(arr){
    // 1

    // const total = arr.reduce((acc,currentEle)=>acc+currentEle,0);
    // return total;

    // 2

    // let s = 0;
    // for(let i=0 ; i< arr.length ; i++){
    //     s = s + arr[i]
    // }
    // return s;
// }
// console.log(some([4,5,3,3]))

// (7)
// let a = 1;
// let b=2;

// let temperory;
// temperory = a;
// a=b;
// b=temperory
// console.log(a,b)

// (8)
// function findMaxNum(n1,n2){
//  return ( n1 > n2 ? n1 :n2 )
// }
// console.log(findMaxNum(11,12))


// (9)
// function isPalindrome(str){
//     const newStr = str.toLowerCase().replace(/\W/g,"");
//     const reverseStr = newStr.split("").reverse().join("");
    
//     return (newStr === reverseStr ? true : false)
     
// }
// console.log(isPalindrome("yoY "))

// (10)
// function fizzfuzz(n1) {
//     if (n1 % 3 === 0 && n1 % 5 === 0) {
//         return "fizzfuzz";
//     } else if (n1 % 3 === 0) {
//         return "fizz";
//     } else if (n1 % 5 === 0) {
//         return "fuzz";
//     } else {
//         return undefined; 
//     }
// }

// console.log(fizzfuzz(11));


// (11)


// function isPrime(n){
//     var divisor = 2
//     while (n > divisor){
//       if (n % divisor == 0){
//         return false; 
//       } else {
//         divisor++; 
//       }
//     }
  
//     return true;  
//   }
  
// console.log(isPrime(23))

// (12)


// function primeFactors(n){
//     var factors = [], 
//         divisor = 2;
    
//     while(n>2){
//       if(n % divisor == 0){
//          factors.push(divisor); 
//          n= n/ divisor;
//       }
//       else{
//         divisor++;
//       }     
//     }
//     return factors;
//   }
// console.log(primeFactors(69));
  
// (13)

// const solution = number => {
//   let sum = 0;
//   for (let i = 3; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       console.log(i)
//       sum += i;
//     }
//   }
//   return sum;
// };

// console.log(solution(-10))

// (14)

// function ode(num){
//   return (num % 2 == 0 ? "even" : "odd")
// }
// console.log(ode(1))

// (15)
// The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight.
//  Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.

// Create a function that checks if a number n is divisible by two numbers x AND y.
//  All inputs are positive, non-zero digits.


// function divbytwonum(num,x,y){
//  if(num%x==0 && num%y==0){
//     return true
//  }else{
//     return false
//  }
// }
// console.log(divbytwonum(5,2,3));


// function isDivisible(n,x,y){
//     return n % x== 0 && n % y == 0;
// }
// console.log(isDivisible(6,2,3))

// (16)
// Return the number (count) of vowels (a, e, i, o, u) in the given string.
//  The input string will only consist of lower case letters and/or spaces.
function noOfVow(str) {
    const newArr = str.split(""); // Convert string to array of characters
    const vowls = ["a", "e", "i", "o", "u"];
    let count = 0; // Initialize count to 0

    for (let i = 0; i < newArr.length; i++) {
        if (vowls.includes(newArr[i])) { // Check if the character is a vowel
            count++;
        }
    }

    return count;
}

// console.log(noOfVow("express the emotions")); 

// (17)

// Swap two integers present in variables num1 and num2 without using temporary variable
num2 = 10;

// Swap using arithmetic operations
num1 = num1 + num2; // num1 now holds the sum of both numbers
num2 = num1 - num2; // num2 is now the original value of num1
num1 = num1 - num2; // num1 is now the original value of num2

// console.log("num1:", num1);
//  Outputs: num1: 10
// console.log("num2:", num2); 
// Outputs: num2: 5

// ************************************************************************************************************
// (18)Write a function which returns true if given value of number is an integer without using any inbuilt functions



function isInteger(value) {
    // Check if the value is a number
    if (typeof value !== 'number') {
        return false;
    }
    
    // Check if the number is finite
    if (value !== value || value === Infinity || value === -Infinity) {
        return false;
    }

    // Check if the number is an integer
    // A number is an integer if its difference from Math.floor(value) is zero
    return value - Math.floor(value) === 0;
}


