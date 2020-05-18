//1st 

// class Child{
//     constructor(name){
//         this.name = name;
//     }
// }
// const baby = new Child("Sanjida");
// const baby2 = new Child("Maher");

// console.log(baby);
// console.log(baby2);

//2nd parent add
// class Parent{
//     constructor(){
//         this.fatherName = "Hossain";
//     }
// }

// class Child extends Parent {
//     constructor(name){
//         super();
//         this.name = name;
//     }
// }
// const baby = new Child("Sanjida");
// const baby2 = new Child("Maher");

// console.log(baby);
// console.log(baby2);


//3rd use function and use upper parent property

class Parent{
    constructor(){
        this.fatherName = "Hossain";
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Sanjida");
const baby2 = new Child("Maher");

console.log(baby.getFullname());
console.log(baby2.getFullname());