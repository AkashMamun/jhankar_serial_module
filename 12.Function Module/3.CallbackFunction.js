//1st

// function callback_expalin(name,age , task){
//     console.log('Hello',name);
//     console.log('Your age :',age);
// }
// callback_expalin('Mamun','25');

//2nd
// function callback_expalin(name,age , task){
//     console.log('Hello',name);
//     console.log('Your age :',age);
//     washHand();
//     takeShower();
// }
// function washHand(){
//     console.log('Wash Hand With soap');
// }
// function takeShower(){
//     console.log('Take your Shower');
// }
// callback_expalin('Mamun',25);
// callback_expalin('Akash',23);

//3rd
// function callback_expalin(name,age ,task){
//     console.log('hellow',name );
//     console.log('Your age : ',age);
//     console.log(task);
// }
// function washHand(){
//     console.log('wash your hand ');
// }
// function takeShower(){
//     console.log('Take ypur Shower');
// }
// callback_expalin('Akash',25,washHand);
// callback_expalin('Mamun',34,takeShower);

//4th

function callback_expalin(name,age ,task){
    console.log('hellow',name );
    console.log('Your age : ',age);
    task();
}
function washHand(){
    console.log('wash your hand ');
}
function takeShower(){
    console.log('Take ypur Shower');
}
function scrollFb(){
    console.log('Scroll your fb not all time');
}
callback_expalin('Akash',25,washHand);
callback_expalin('Mamun',34,takeShower);
callback_expalin('Bhuiyan',45,scrollFb);