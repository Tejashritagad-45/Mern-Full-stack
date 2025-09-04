
//print all subarrays normally.
// const arr=[-1,2,3,-4,5];
// for(let i=0;i<arr.length;i++){
//     let subArray="";
//     for(let j=i;j<arr.length;j++){
//         subArray+=arr[j]+" ";
//         console.log(subArray);
//     }
// }

//==============================================================================
// //print sum of all subarrays;
// const arr=[-1,2,3,-4,5];
// sum1=0
// for(let i=0;i<arr.length;i++){
//  sum=0;
//  for(let j=i;j<arr.length;j++){
//     sum+=arr[j];
//     sum1+=sum
    
// }
// }
// console.log({sum1});
// //

//=============================================================================

//print sum of all subarrays and max sum of them;**
// const arr0=[-1,5,-3,2,-1,3];
// let Max=0;
// for(let i=0;i<arr0.length;i++){
//   let sum=0;
//     for(let j=i;j<arr0.length;j++){
//        sum+=arr0[j];
//        if(sum>Max){
//        Max=sum;
//        //sum1+=sum;

       
//     }
// }
// }
// console.log({Max});

//=============================================================================



//print max sum of all subarrays;
// const arr1=[-1,5,-3,2,-1,3];
// //let sum=0;
// let Max1=0;
// for(let i=0;i<arr1.length;i++){
//     let sum=0;
//     for(let j=i;j<arr1.length;j++){
//         sum+=arr1[j];
//         if(sum>Max1){
//             Max1=sum;
   
//         }
//     }
// }
//          console.log({Max1});

//=============================================================================

//print all subArray using a function;
function printAllsubArraysum(arr){
   let n=arr2.length;
   for(let i=0;i<n;i++){
      let SubArraysum =0;
      for(let j=0;j<n;j++){
         SubArraysum+=arr2[j];
         console.log("sum of subArray from",i,"to",j,"is",SubArraysum)
      }

   }

}
const arr2=[1,2,3,4];
printAllsubArraysum(arr2);


// //print max sum of all subarrays;
// function maxSubArraySum(arr){
//     let Maxsum=arr[0];
//    for(let i=0;i<arr.length;i++){
//     let subArraysum=0;
//     for(let j=i;j<arr.length;j++){
//      subArraysum+=arr[j];
//         if(Maxsum<subArraysum){
//           Maxsum=subArraysum;
//      }

//     }
//    } 
//    return Maxsum;
// }   
// const arr =[1,2,3,4];
// maxSubArraySum(arr);
// console.log(maxSubArraySum(arr));    

//==================================================================================== 

function countSumOfk(arr,k){
   let n=arr1.length;
   let count=0;
   for(let i=0;i<n;i++){
      let sum=0;
      for(let j=i;j<n;j++){
         sum+=arr1[j];
         if(sum===k){
            count++;

         }
         
   
      }
   }
   return count;
}
const arr1=[1,2,-3,0,1,-1,1];
console.log(countSumOfk(arr1,0));


//====================================================================================

function countSumOfk(arr,k){
   let n=arr.length;
   let count=0;
   for(let i=0;i<n;i++){
      let sum=0;
      for(let j=i;j<n;j++){
         sum+=arr[j];
         if(sum===k){
            count++;

         }
         
   
      }
   }
   return count;
}
const arr=[1,2,-3,0,1,-1,1];
console.log(countSumOfk(arr,0));


//write a function to print all k size of subArray.
function allSubArraysOfsizek(arr,k){
   let n=arr.length;
   for(leti=0;i<n;i++){
      let subArray="";
      for(let j=i;j<n;j++){
         subArray+=arr[j]+"";
         

      }
   }
}





