// //1st simple function 2 parameter

// function add(num1,num2){
//     return num1+num2;
// }
// const result = add(10,20);
// console.log(result);


//2nd simple function 3 parameter

// function add(num1,num2){
//     return num1+num2;
// }
// const result = add(10,20,30); //but 30 nibe na
// console.log(result);

// //3rd now we use argument to see 3rd value

// function add(num1,num2){
//     console.log(arguments);
//     return num1+num2;
// }
// const result = add(10,20,30);
// console.log(result);


//4t now we use argument to see 3rd value added result

// function add(num1,num2){
//     console.log(arguments);
//     return num1+num2+arguments[2];
// }
// const result = add(10,20,30);
// console.log(result);

//5th but now we can not detect 4th element

// function add(num1,num2){
//     console.log(arguments);
//     return num1+num2+arguments[2];
// }
// const result = add(10,20,30,40);
// console.log(result);

//7th now we solve this use argument firstly use ...spred operation

// function add(num1,num2){
//     console.log(...arguments);
//     return num1+num2+arguments[2];
// }
// const result = add(10,20,30,40);
// console.log(result);

//8th object k akon array korbo
// function add(num1,num2){
//     console.log([...arguments]);
//     return num1+num2+arguments[2];
// }
// const result = add(10,20,30,40);
// console.log(result);

// obdro value gulo jehutu array korci akon segulo chayle sum ba max korte parbo atay 
//arguments er udddeessso 