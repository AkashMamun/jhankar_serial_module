//Find max number for two variable

var businessman = 450;
var minister = 350;
if(businessman> minister){
    console.log("BusinessMan is a bigger");
}
else{
    console.log("Minister is a bigger");
}

//Find max Number for three variable

var business = 300 ;
var minister = 400;
var sochib = 300;
if(business>minister){
    if(business>sochib){
        console.log("Business is Bigger");
    }
    else{
        console.log("Sochib is a bigger");
    }
}
else{
    if(minister>sochib){
        console.log("Minister is a bigger");
    }
    else{
        console.log("Sochib is  a biggert")
    }
}

//Using Math.max() function we can easily find it

var business = 300 ;
var minister = 400;
var sochib = 300;

var max = Math.max(business , minister , sochib);
console.log(max);
