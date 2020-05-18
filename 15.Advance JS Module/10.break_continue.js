//1st simple for loop

// const num = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0 ; i<num.length ; i++){
//     console.log(num[i]);
// }

//2nd but nums[i] suppose 5 er beshi pele break kore dibo!


// const num = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0 ; i<num.length ; i++){
//     console.log(num[i]);
//     if(num[i]>5){
//         break;
//     }
// }

// //3rd console after condition 

// const num = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0 ; i<num.length ; i++){
    
//     if(num[i]>5){
//         break;
//     }
//     console.log(num[i]);
// }

//4th use continue  

const num = [1,-2,3,-4,-5,6,7,8,9,-10];
for(let i=0 ; i<num.length ; i++){
    
    if(num[i]>5){
        continue;
    }
    console.log(num[i]);
}