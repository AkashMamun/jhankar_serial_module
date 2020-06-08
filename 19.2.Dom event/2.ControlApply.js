//1st

// const normalPerson = {
//     firstName: 'akash',
//     lastName: 'mamun',
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     }
// }
// console.log(normalPerson); //call a full object
// console.log(normalPerson.firstName); //just one name

//2nd

// const normalPerson = {
//     firstName: 'akash',
//     lastName: 'mamun',
//     salary: 1500,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary= this.salary - amount;
//         return this.salary;
//     }
// }
// normalPerson.chargeBill(50);
// console.log(normalPerson.salary);

//3rd borrow method


//4th


// const normalPerson = {
//     firstName: 'akash',
//     lastName: 'mamun',
//     salary: 1500,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         console.log(this);
//         this.salary= this.salary - amount;
//         return this.salary;
//     }
// }

// const heroPerson = {
//     firstName : 'Sanjida',
//     lastName : 'Nahida',
//     salary: 2000
// }
// const friendlyPerson = {
//     firstName : 'Kazi',
//     lastName : 'Miti',
//     salary: 3000
// }
//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(200);
// heroChargeBill(200);
// console.log(heroPerson.salary); //onno akta objecct theke nea ana hyce, and salary change hyce
// console.log(normalPerson.salary); //salaray no change
// //object use bind to borrow method from another object er jonno bind use hy

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(200);
// console.log(friendlyPerson.salary);


//5th difference between bind, call and apply

// const normalPerson = {
//     firstName: 'akash',
//     lastName: 'mamun',
//     salary: 1500,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         console.log(this);
//         this.salary= this.salary - amount;
//         return this.salary;
//     }
// }

// const heroPerson = {
//     firstName : 'Sanjida',
//     lastName : 'Nahida',
//     salary: 2000
// }
// const friendlyPerson = {
//     firstName : 'Kazi',
//     lastName : 'Miti',
//     salary: 3000
// }

// normalPerson.chargeBill.call(heroPerson,100);
// normalPerson.chargeBill.call(heroPerson,100);
// console.log(heroPerson.salary);

//6th


// const normalPerson = {
//     firstName: 'akash',
//     lastName: 'mamun',
//     salary: 1500,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount,tips,tax){
//         console.log(this);
//         this.salary= this.salary - amount-tips-tax;
//         return this.salary;
//     }
// }

// const heroPerson = {
//     firstName : 'Sanjida',
//     lastName : 'Nahida',
//     salary: 2000
// }
// const friendlyPerson = {
//     firstName : 'Kazi',
//     lastName : 'Miti',
//     salary: 3000
// }

// normalPerson.chargeBill.call(heroPerson,100,50,10);
// normalPerson.chargeBill.call(heroPerson,100,70,20);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,100,50,10);
// console.log(friendlyPerson.salary);

//7th holo apply , call r apply er maje difference holo aplly array pass kore


const normalPerson = {
    firstName: 'akash',
    lastName: 'mamun',
    salary: 1500,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount,tips,tax){
        console.log(this);
        this.salary= this.salary - amount-tips-tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'Sanjida',
    lastName : 'Nahida',
    salary: 2000
}
const friendlyPerson = {
    firstName : 'Kazi',
    lastName : 'Miti',
    salary: 3000
}

normalPerson.chargeBill.apply(friendlyPerson,[100,50,10]);
console.log(friendlyPerson.salary);

//listen video-19.5.4 er 8 thke 12 minit

