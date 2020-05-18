//1st simply function access
// function sum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
 

// const output = sum(10,20);
// console.log(output);


// 2nd but we can have now error. jodi vitorer kobor jante chay!
// karon scope a nay

// function sum(num1,num2){
//     let result = num1+num2;
//     return result;
// }
 

// const output = sum(10,20);
// console.log(result);
// console.log(output);


//3rd but vitore mean scope under a korle result PerformanceObserver
// function sum(num1,num2){
//     let result = num1+num2;
//     console.log(result);
//     return result;
// }
 

// const output = sum(10,20);
// console.log(output);

//4t but baire declare korle global hbe tokon j kew use korte parbr
// let bonus =30;

// function sum(num1,num2){
//     let result = num1+num2+bonus;
//     console.log(bonus);
//     return result;
// }
 

// const output = sum(10,20);
// console.log(output);
// console.log(bonus);


//5th

// let bonus =30;

// function sum(num1,num2){
//     let result = num1+num2+bonus;
//     if(result>9){
//         const mood = "happy";
//         console.log(mood);
//     }
//     return result;
// }
 

// const output = sum(10,20);

//6th but {} aatr baire use korle error dekave


// let bonus =30;

// function sum(num1,num2){
//     let result = num1+num2+bonus;
//     if(result>9){
//         const mood = "happy";
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
 

// const output = sum(10,20);

//7th let use korleo eroor deakbe

// let bonus =30;

// function sum(num1,num2){
//     let result = num1+num2+bonus;
//     if(result>9){
//         let mood = "happy";
//         mood ="sad";
//         mood = "bad";
//         console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }
 
//8th but var use korel error dekabe na . var confusion a fele dey.
//var dile output pawa jay, but akane ami kicu vul korci tai output pacci  na

// let bonus =30;
// function sum (num1, num2){
//     let result = num1+ num2 + bonus;
//     if(result>9){
//         var mood = "happy";
//         mood ="sad";
//         mood = "bad";
//        console.log(mood);
//     }
//     console.log(mood);
//     return result;
// }