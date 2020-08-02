var num = 2.122333;
var result1 = Math.floor(num);
console.log(result1);

var result2 = Math.ceil(num);
console.log(result2);

//For round lik near by 2 or near by 3

var nun = 2.499999;
var result3 = Math.round(num);
console.log(result3);

var num = 2.99999;
var result4 = Math.round(num);
console.log(result4);

//For any random number 
var dice = Math.random();
console.log(dice);

//Finding random number for 10
var dice = Math.random() * 10;
console.log(dice);

// To convert random number into integer number

var result5 = Math.random() *10 ;
var randomResult = Math.round(result5);
console.log(randomResult);

// Find random number for like a dice with for loop

for(var i=0 ; i<=6 ; i++){
    var result6 = Math.random() * 6 ;
    var Output = Math.round(result6);
    console.log(Output);
}