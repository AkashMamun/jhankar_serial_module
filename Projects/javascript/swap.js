var a = 5;
var b= 10;
console.log("Before swap: a = ", a ," b = ", b );
var temp=a;
var a = b;
var b= temp;
console.log("After swap : a = " , a, "b = " , b);

//Another process of swap

var x= 2;
var y= 3;
x= x+y;
y= x-y;
x= x-y;
console.log("After swap : x = ", x, "y = ", y);


//Another form o swap

var p =10;
var q = 20;
[p, q] = [q, p];
console.log("After swap : p = ", p, "q = ", q)