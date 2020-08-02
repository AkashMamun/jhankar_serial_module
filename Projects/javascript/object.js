var student1 ={id:01, phone:01531, name:"Akash"};
var student2 ={id:02, phone:0345, name:"Mamun"};

var phoneNo = student1.phone;
console.log(phoneNo);

var phoneNo = student1["phone"];
console.log(phoneNo);

var phoneNewNo="phone";
var phoneResult=student1[phoneNewNo];
console.log(phoneResult);

console.log(student1);
console.log(student2);
//Update Phone Number 
student1["phone"]=12;
console.log(student1);
student1.phone=123;
console.log(student1);
student1[phoneNewNo]=1234;
console.log(student1);