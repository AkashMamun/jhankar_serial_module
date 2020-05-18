//1st
// function add(num1, num2){
//     sum = num1  + num2;
//     return sum;
// }
// const total = add(5,10);
// console.log(total);

// 2nd But eroor when you foget two input two number

// function add(num1, num2){
//     sum = num1  + num2;
//     return sum;
// }
// const total = add(5);
// console.log(total);

// //3rd error Nan solving with old method
// function add(num1, num2){
//     if(num2 == undefined){
//         num2=0;
//     }
//or num2 = num2 || 0;
//     sum = num1  + num2;
//     return sum;
// }
// const total = add(5);
// console.log(total);

//4th error Nan solving with shortcut method method
// function add(num1, num2=10){
//     sum = num1  + num2;
//     return sum;
// }
// const total = add(5);
// console.log(total);

//5th error Nan solving with shortcut method method
function add(num1, num2=10){
    sum = num1  + num2;
    return sum ;
}
const total = add(5,1);
console.log(total);