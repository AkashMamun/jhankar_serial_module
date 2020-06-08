// some console command
// window
// document===window.document
// console===window.console
// document.getElementById

//1st

// function add(num1, num2){
//     var result = num1+num2;
//     console.log('Inside result : ', result);
//     return result;
// }

// var sum = add(10,10);
// console.log(sum);

//2nd but outside a ata erorr dekabe
//.r ata holo local scope

// function add(num1, num2){
//     var result = num1+num2;
//     console.log('Inside result : ', result);
//     return result;
// }
// console.log('Outside redult : ', result);
// var sum = add(10,10);
// console.log(sum);

//4th global scope
//for 4.window.html er jonno aytuku

// var name = 'akash';
// function add(num1, num2){
//     var result = num1+num2;
//     console.log('Inside result : ', name);
//     return result;
// }
// console.log('Outside result : ', name);
// var sum = add(10,10);
// console.log(sum);

//5th function er vitor function is not global run 4.window.html
//for 4.window.html er jonno aytuku
// var name = 'akash';
// function add(num1, num2){
//     var result = num1+num2;
//     console.log('Inside result : ', name);
//     function double(num){
//         return num*2;
//     }
//     var total = double(result);
//     return result;
// }
// console.log('Outside result : ', name);
// var sum = add(10,10);
// console.log(sum);

//6th for window.html result undefine dekabe but var utte dile r undefine dekay na

// var name = 'akash';
// function add(num1, num2){
//     var result = num1+num2;
//     console.log('Inside result : ', name);
//     function double(num){
//         return num*2;
//     }
//     var total = double(result);
//     return total;
// }
// console.log('Outside result : ', name);
// var sum = add(10,10);
// console.log(sum);
// console.log('outside result is', result);

// var name = 'akash';
// function add(num1, num2){
//     result = num1+num2;
//     console.log('Inside result : ', name);
//     function double(num){
//         return num*2;
//     }
//     var total = double(result);
//     return total;
// }
// console.log('Outside result : ', name);
// var sum = add(10,10);
// console.log(sum);
// console.log('outside result is', result);


//abr window.result likle seta global hbe and show korbe

var name = 'akash';
function add(num1, num2){
    result = num1+num2;
    console.log('Inside result : ', name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('Outside result : ', name);
console.log('outside result is', result); //for erorr
var sum = add(10,10);
console.log(sum);
//console.log('outside result is', result);