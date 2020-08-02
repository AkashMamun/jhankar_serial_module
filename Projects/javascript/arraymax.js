var marks = [40, 35, 45, 49, 85, 52, 50, 80, 95];
var max = marks[0];
for( var i=0 ; i<marks.length ; i++){
    var element = marks[i];
    if( element > max){
        max = element;
    }
}
console.log("Heighest Marks is : " , max);