var num = [10, 20, 40, 50, 40, 50, 403, 30];
var sum = 0;
for(var i=0; i<num.length; i++){
    var element = num[i];
    sum = sum + element ;

}
console.log("Total sum is : " , sum);

//Now we see this program with using function

function getArraySum(num){
    var sum = 0 ;
    for(var i=0 ; i<num.length ; i++){
        var element = num[i];
        sum = sum + element ;
    }
    return sum;
}
var num = [10, 20, 40, 50, 40, 50, 403, 30];
var result = getArraySum(num);
console.log(result);

//we can see result with also array element like..
 var ArrayResult = getArraySum([10, 20, 30, 40,]);
 console.log(ArrayResult);