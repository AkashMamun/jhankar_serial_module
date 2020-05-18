// 1st normal function 

// function doubleIt(num){
//     return num * 2 ;
// } 
// const result = doubleIt(5);
// console.log(result);

//2nd function declaration, function expression

// const doubleIt = function (num){
//     return num*2;
// }

// const result = doubleIt(5);
// console.log(result);

//3rd function declaration, function expression

// const doubleIt = function myFun(num){
//     return num*2;
// }

// const result = doubleIt(5);
// console.log(result);

//4th function declaratin in es6 with arrow function

// const doubleIt = num => num*2; //single parameter
// const result = doubleIt(5);

// const add=(x,y)=>x+y; //double parameter
// const result1 = add(10,20);

// const give5=()=>5; // null parameter
// const result3= give5();

// console.log(result);
// console.log(result1);
// console.log(result3);

const doMath = (x,y) =>{
    const sum = x+y;
    const dif= x-y;
    const result = sum*dif;
    return result;
}

const mathResult = doMath(50,40);
console.log(mathResult);

