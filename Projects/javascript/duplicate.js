var name =[10,20,30,40,50,60,70,80,90,100,10,30,40,50];
var uniqueName = [];
for(var i=0 ; i<name.length ; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }

}
console.log(uniqueName);