// const x=true && 45 && 32 && NaN;
// const y=



// const[];
// let N=100;
// for(let i=0;i<n;i+=){
//   push.
// }
//TC -O(n)



let arr=[1,2,4,4,6,6,6,8]
let firstIndexOf6=-1;
let lastIndexOf6=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]===6){
  if(firstIndexOf6==-1){
    firstIndexOf6=i;

  }
  lastIndexOf6=i;
}
}
console.log({firstIndexOf6,lastIndexOf6});
// TC=O(n);
// SC=o(1)



function findTargetElement(arr,target){
    let low=0;
    let high=arr.length-1;
    while(low<=high){
let mid=Math.floor(low+(high-low)/2)
  if(arr[mid]==target){
    return mid;
  }else if(arr[mid]>target){
    high=mid-1
  }else {
    low=mid+1;
  }

    }
 return -1
}
const arr1=[1,2,3,6,9,11,15]
let target = 11;
console.log(findTargetElement(arr1,target));



// //time complexity 
// //space complexity

// //time and space complxity is an appromixation based only
// //not exact of time or space then taken by the program 
// //o(N)=o(2N),o(N+k),o(N+2k),o(N/2),o(N/k);
// /*
// ==========time complexity=========
// it is the amount of time taken by an alogoritham to run as function of length of the input 
// //*/

// // for(let i=0;i<n;i++){
// // for(let j=0;j<n;j++){

// // }
// // }
// // TC=o(M*N);



// let a=0; let b=0;
// for(let i=0;i<n;i++){
//     a=a+rand ();

// }

// for(let j=0;j<m;j++){
//     b=b+rand ();
// }

// /*
// first for loop time complexity is O(n)
// and second is O(m)
// O(n)+O(m)==O(n+m);*/


// let a1=0;b1 =0;
// for(let  i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         a=a+j;
//     }
// }
// for(let k=0;k<n;j++){

// }

// /*TC
// first loop is a nested loop then there time complexity is O(n2)
// and second loop TC is O(n)
// //O(n2)+O(n)
// take max 
// then max is O(n2);
// =====TC is O(n2);=====*/



// while (n>0){
//     n--;
// }
// TC=O(n);


// while(n>0){
//     n*2;
// }
// //it is infinity 

// while(n>0){
//     n/5
// }
// TC=O(logn);


// let m=1;
// while(m<n){
//     m*=2;
// }
// TC=O(logn);


// for(let i=0;i<n;i++){
//     if(i==n/2){
//     }
   
//         let m=n;
//         while(m>0){
//             m/=2;
// } 
// }

// //TC   O(nlogn);


// //space  complexity 
// //space we created to run the code;
// let arr=[];
// while(n>0){
//     arr.push(n);
//     n/=2
// }

// SC=O(logn)


// for(let i=0;i<n;i++){
//     let x=i;
//     console.log(x);
// }

// SC=O(1);



