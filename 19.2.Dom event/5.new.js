class Person{
    constructor(firstName, lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}

const heroPerson = new Person('akash','mamun',50000);
console.log(heroPerson);
//Another one

const friendlyPerson = new Person('Sanjid','Maher',3000);
console.log(friendlyPerson);
//new class theke object banie fele

//oldMethod

function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson =new Person1('Kazi', 'Miti', 1000);
console.log(oldPerson);