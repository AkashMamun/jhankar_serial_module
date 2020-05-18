//1st
// const age1=[10,20,30];
// const age2=[40,50,60];
// const age3=[70,80,90];

// const allAges =age1.concat(age2).concat([5]).concat(age3);
// console.log(allAges);

//2nd ganjam pakano

// const age1=[10,20,30];
// const age2=[40,50,60];
// const age3=[70,80,90];

// const allAges =age1.concat(age2).concat([5]).concat(age3);
// const allAges2 = [age1, age2, 5, age3];
// console.log(allAges2);

//3rd 

// const age1=[10,20,30];
// const age2=[40,50,60];
// const age3=[70,80,90];

// const allAges =age1.concat(age2).concat([5]).concat(age3);
// const allAges2 = [...age1, ...age2, 5, ...age3]; //spread Oparetor 
// console.log(allAges2);

//4th like example 

// const bus = 450 ;
// const min = 500;
// const soc = 700;

// const max =Math.max(bus,min,soc);
// console.log(max);

//5th another example

// const bus = 450 ;
// const min = 500;
// const soc = 700;

// const total = [450,500,700];
// const max =Math.max(bus,min,soc);
// const max2 = Math.max(total);//it reply nan

// console.log(max);
// console.log(max2);

//7th no Nan with spread parameter

const bus = 450 ;
const min = 500;
const soc = 700;

const total = [450,500,700];
const max =Math.max(bus,min,soc);
const max2 = Math.max(...total);

console.log(max);
console.log(max2);