//1st open class

// class Student{

// }
// const student1 = new Student();
// const student2 = new Student();

// console.log(student1,student2);

// //2nd No open class
// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = "Akash";
//     }

// }
// const student1 = new Student();
// const student2 = new Student();

// console.log(student1,student2);

//2nd No open class

// class Student{
//     constructor(sId,sNa){
//         this.id =sId;
//         this.name = sNa;
//         this.school = "Police line school"; //Automatic peye jabe
//     }

// }
// const student1 = new Student(1,"akash");
// const student2 = new Student(2, "Mamun");

// console.log(student1,student2);

// console.log(student1.name, student2.name);// Access name from function

// 3rd we can add new Student

class Student{
    constructor(sId,sNa){
        this.id = sId;
        this.name = sNa;
        this.school = "Tangail school";

    } 
}
const student1 = new Student(1,"Akash");
const student2 = new Student(2,"Sobuj");
const student3 = new Student(3,"Mehedei");

console.log(student3);