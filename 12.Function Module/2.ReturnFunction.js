//1st

// function evenify(num){
//     if(num%2==0){
//         console.log(num,': Number is even');
//     }
//     else{
//         console.log(num*2, ': Number is Odd');
//     }
// }

// evenify(5);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num);
//     }
// }
// nums = [1,2,3,4,5,6,7,8,9];
// //evenify_all(nums);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);

//2nd


// function evenify(num){
//     if(num%2==0){
//         console.log(num,': Number is even');
//     }
//     else{
//         console.log(num*2, ': Number is Odd');
//     }
// }

// var result = evenify(5);
// console.log('result',result);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num);
//     }
// }
// nums = [1,2,3,4,5,6,7,8,9];
// evenify_all(nums);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);

//3rd


// function evenify(num){
//     if(num%2==0){
//         return num ;
//     }
//     else{
//         return num*2;
//     }
//    // return 4000;
// }

// var result = evenify(5);
// console.log('result',result);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num);
//     }
// }
// nums = [1,2,3,4,5,6,7,8,9];
// evenify_all(nums);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);

//4th


// function evenify(num){
//     var result;
//     if(num%2==0){
//         result= num ;
//     }
//     else{
//         result = num*2;
//     }
//    return result;
// }

// var result = evenify(10);
// console.log('result',result);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num);
//     }
// }
// nums = [1,2,3,4,5,6,7,8,9];
// //evenify_all(nums);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);

//5th


// function evenify(num){
//     var result;
//     if(num%2==0){
//         result= num ;
//     }
//     else{
//         result = num*2;
//     }
//    return result;
// }

// var result = evenify(10);
// var square = result*result;
// console.log('Square',square);

// function evenify_all(nums){
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         evenify(num);
//     }
// }
// nums = [1,2,3,4,5,6,7,8,9];
// //evenify_all(nums);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);

//6th


// function evenify(num){
//     var result;
//     if(num%2==0){
//         result= num ;
//     }
//     else{
//         result = num*2;
//     }
//    return result;
// }

// var result = evenify(10);
// console.log('result',result);

// function evenify_all(nums){
//     var even_array = []
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         var result = evenify(num);
//         even_array.push(result);
//     }
//     return even_array;
// }
// var nums = [1,2,3,4,5,6,7,8,9];
// var nums_even = evenify_all(nums);
// console.log(nums_even);


// friends_age = [10,20,30,40,50,60];
// //evenify_all(friends_age);



// //7th Same as check some passing variable function er vitor var name jkono kicu dewa jay jmn ami 
// //dici numberr kintu console korar smy array nam ta function a dite hbe jmn "num"

// num = [1,2,3,4,5,6];
// var Fresult =evenOdd(num);
// console.log(Fresult);

// function evenOdd(num){
//     var array=[];
//     for (let i = 0; i < num.length; i++) {
//         const number = num[i];
//         var checkEven = evenIfy(number);
//         array.push(checkEven);
//     }
//     return array;
// }

// function evenIfy(numberr){
//     var result;
//     if(numberr%2==0){
//         result= numberr*2;
//     }
//     else{
//         result = numberr;
//     }
//     return result;
// }


function evenOddLoop(number){
    var array = [];
    for(let i=0; i<number.length ; i++){
        const num1 = number[i];
        var checkEven = evenOddCondition(num1);
        array.push(checkEven);

    }
    return array;
}
function evenOddCondition(number){
    var result;
    if(number%2==0){
        result= number*2;
    }
    else{
        result = number;
    }
    return result;
}
nums=[1,2,3,4,5,6,7,8];
var ans = evenOddLoop(nums);
console.log(ans);