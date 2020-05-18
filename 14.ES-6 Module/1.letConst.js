//1st ESC6-Echma script

// const  hubby = "Salman Khan";
// console.log(hubby);

//2nd

// const hubb = "Salman Khan";
// hubby = "Sharukh Khan";
// console.log(hubby);

//It is not possible bcz const use for permanent

//3rd Example

// const numbers = [10,20];
// numbers[1]=30;
// //we can also push
// numbers.push(40);
// console.log(numbers);

//4th But we can not declare same numbers const for another array. it's have error msg

// const numbers = [10,20];
// numbers[1]=30;
// //we can also push
// numbers.push(40);
// numbers = {"akash", "mamun", "shahin"};
// console.log(numbers);
// //errrrror

//5th
//But for this erorr we can use let var. let value ta k change hyte dey but const dey na.
// let patientName = "Rahim";
// patientName = "Kakon";
// console.log(patientName);

//6th
//var lick hyte pare but let hyte pare na

// let sum = 0; 
// for(var i = 0 ; i<10 ; i++){
//     sum = sum+1;
// }
// console.log(i);

//kintu
let sum = 0; 
for(let i = 0 ; i<10 ; i++){
    sum = sum+1;
}
console.log(i);