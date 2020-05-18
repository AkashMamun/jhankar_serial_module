//1st simply function output

// const numbers =[1,2,3,4,5,6,7,8,9,10];
// const output =[];

// for(let i=0 ; i<numbers.length ; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// //2nd we use map function for smartly do it

// const numbers =[1,2,3,4,5,6,7,8,9,10];

// function square (element){
//     return element*element;
// }

// //numbers.map(function()) //function pass use map

// numbers.map(sqaure); //directly function pass use map
// numbers.map(function square (element){
//     return element*element;
// })

// console.log(output);

 //3rdwe use map function for elemnet

// const numbers =[1,2,3,4,5,6,7,8,9,10];
// numbers.map(function(element){
//     console.log(element);
// }); 


// //4th use map function for elemnet and index

// const numbers =[1,2,3,4,5,6,7,8,9,10];

// function square (element){
//     return element*element;
// }

// numbers.map(function(element,index){
//     console.log(element, index);
// });


//4th use map function for elemnet and index and array

// const numbers =[1,2,3,4,5];

// function square (element){
//     return element*element;
// }

// numbers.map(function(element,index, array){
//     console.log(element, index, array);
// });

// //5th use return in map function

// const numbers =[1,2,3,4,5];

// // function square (element){
// //     return element*element;
// // }

//  const result= numbers.map(function(element){
//     return element*element;
// });
// console.log(result);

//6thth use return in map function

// const numbers =[1,2,3,4,5];

// function square (element){
//     return element*element;
// }   //same 1

// const square = element => element*element; //same 2
// const square = x =>x*x; //same 3

//  const result= numbers.map(function(element){
//     return element*element;
// });
// console.log(result);

//7th easy way

// const numbers =[1,2,3,4,5];
// const result = numbers.map(x => x*x);
// console.log(result);


//8th filter. filter holo arrow function use kore kono kicu saka ba ber kora
//filter holo condition fullfill korle kaj korbe
//filter holo matching element return korbe

// const numbers =[1,2,3,4,5];
// const bigger = numbers.filter(x=> x>2);
// console.log(bigger);

//9th fikter akta array retunr kore
// const numbers =[1,2,3,4,5];
// const bigger = numbers.filter(x=> x<1);
// console.log(bigger);


//10th find sudu akta condtion true hole akta value dekabe tar upore ba niche dekabe na
//find sudu element dibe. kintu map r filter akta array dibe

// const numbers = [1,2,3,4,5];
// const isThere = numbers.find(x=>x>3); //sudu 4 dekabe 5 dekabe na
// console.log(isThere);