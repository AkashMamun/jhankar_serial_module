//1st use map for array
// map use kore dore dore amra propertyr object ber korte pari
// const students = [
//     {id: 1 , name: 'akash'},
//     {id: 2 , name: 'mamun'},
//     {id: 3 , name: 'sathi'}
// ];
// const names = students.map(s=>s.name);
// const ids = students.map(i=>i.id);
// console.log(names);
// console.log(ids);

//2nd amra filter o use korte pari
// condition jotodur prorjonto true hbe toto gula output dibe
// but filter er khetre  sudu tar uporer akta value dekabe

// const students = [
//     {id: 1 , name: 'akash'},
//     {id: 2 , name: 'mamun'},
//     {id: 3 , name: 'sathi'}
// ];
// const bigger = students.filter(s=>s.id>1);
// console.log(bigger);

//3rd use find

const students = [
    {id: 1 , name: 'akash'},
    {id: 2 , name: 'mamun'},
    {id: 3 , name: 'sathi'}
];
const bigger = students.find(s=>s.id>1);
console.log(bigger);