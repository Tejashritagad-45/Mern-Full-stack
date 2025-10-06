const arr=[1,2,3,4];
for(let i=0;i<arr.length;i++){
for(let j=i;j<arr.length;j++){
  subArray=[];
  for(let k=i;k<=j;k++){
    subArray.push(arr[k]);
    

     //console.log(subArray);       
  }
console.log(subArray);
}

}
//**sum of subarray**

// const arr=[1,2,3,4];
// for(let i=0;i<arr.length;i++){
//         let sum=0;
//         for(let j=i;j<arr.length;j++){
//             let sum=0;
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k];  
            
//             }
//               console.log(sum);
//         }
       
//     }
//=================================================

//** Total sum of SubArray  */

// const arr=[1,2,3,4];

//     let totalsum=0;
//     for(let i=0;i<arr.length;i++){
    
//         for(let j=0;j<arr.length;j++){
//             let sum=0;
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k]; 
                
            
//             }
//             totalsum+=sum; 
//         }
//     }

//      console.log(totalsum);


//===============================================================================

// const value =4+("34"*" "/17);
// console.log({value});

// const space =" ";
// console.log(space*1);//0
//because + ke alava jo assigment operator use hote hai is case mai value hamesha 0 hoti hai;

//====================================================================================================//

//Given a N*N,grid find the primary diagonal num

// const arr=[
//      [1,2,3],
//      [4,5,6],
//      [7,8,9],];

//**primary Digonal**

//3*3
// let n=arr.length;
// let sum=0;
// for(let i=0;i<n;i++){
//   //for(let j=0;j<i;j++){
//   sum += arr[i][i];
// }
// console.log({sum});

//==========================================//

 //secondary digonal 

//   let sum1=0;
//    for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//     if(i+j==n-1){

//         sum+=arr[i][j];
//  }
//     }
//  } 
//  console.log(sum1);

///print secondary digonal in o(n);
// sum=0;
// for(let i=0;i<n;i++){
//     sum+=arr[i][n-1-1];

// }
// console.log("secondary digonal:",sum)
//  
//===================================//

//**print  sum of odd number of coloumn Element */
n=arr.length
sum=0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;i++){
        if(j%2==0){
            sum+=arr[i][j]
        }
    }
}
console.log({sum});



// const arr2=[
//         [1,2,3,4,5,6],
//         [2,6,12,43,3],
//         [8,10,34],];
// function printOddNumberColElement (arr){
// for(let i=0;i<arr2.length;i++){
// for(let j=0;j<arr2[0].length;j++){
    
        

//         }
//         console.log(ans);
// }
//           }


//   /*Given a 2D matrix,reverse 







//SubArrays

const arr3=[1,2,3,4];
