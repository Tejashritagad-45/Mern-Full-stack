//psecode
/*
take a variable of sum to start with 0 to store the sum of secondary digonal
take a n=arr.length to stor a length of array.
run a loop from to itrete over rows .

it is observrd that all secondary dogonal elements lie on the indices 
whose sum of row and coloumn is equal to n-1 where n is number of rows i+j=n-1 (define i=j,j=j) 
we can lop from first to last index and find the sum of digonal of adding arr[i[n-i-1]] to the sum 
this is simplified form above formulla of 
*/


// const arr=[[1,2,3],
//            [4,5,6],
//            [7,8,9],];

// let sum=0;           
// n=arr.length;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i][n-i-1]
// }
// console.log({sum});

// //==========================================================

// //**reverse of array matix




// // **print subArray**
//const arr1=[1,2,3,4];
// for(let i=0;i<arr1.length;i++){
//     subArray=[];
//     for(let j=i;j<arr1.length;j++){
//        subArray+=arr1[j]+" "
//          console.log(subArray);

//     }
// } 


//print all sum of subarray;
console.log("sum of subArray");
const arr1=[1,2,3];
let subArraySum=0;
n=arr1.length;
for(let i=0;i<n;i++){
    let sum=0;
    for(let j=i;j<n;j++){
        sum+=arr1[j];
        subArraySum+=sum;
        console.log (subArraySum);
    }
 }


// //delete an element of an array
// console.log("pop mathod")
// const arr2=[1,4,3,7,9,10,5];
// arr2.pop();
// console.log(arr2);
// //1,4,3,7,9,10

// //using a subarry to delete an element
// console.log("using subarray to delete an element")
// n=arr2.length-1
// for(let i=0;i<n;i++){
// console.log(arr2[i]);
// }
// //1,4,3,7,9,

// //using a slice method to delete an element
// console.log("using slice method")
// arr2.slice(0,arr.length-1);
// console.log(arr2);
// //1,4,3,7
// //using splice 

// console.log("using splice method")
// arr2.splice(0,1);
// console.log(arr2);




// //delete  element from start
// console.log("delete element from start")
// const arr3=[2,3,4,5,9,8,7]
// arr3.shift();
// console.log(arr3);


// //using splice 
// console.log("using splice method")
// arr3.splice (0,0);
// console.log(arr3);


// //using for Loop
// //this is my.
// for(let i=1;i<arr3.length;i++){
// console.log(arr3[i]);
// }

// //**using for loop */
// /*just shift all elements left by one index and decreace the length proprety value by 1*/
// const arr0=[3,5,6,7,2,9]
// console.log("Array before de;etion of first element ",arr0);
//  for(let i=0;i<arr0.length-1;i++){
//  arr0[i]=arr0[i+1];
//  }
//  arr0.length=arr0.length-1;
 
// console.log ("Array after deletion of first element ",arr0);


// //insertion  of element at start
// console.log("insertion of element at start");
// for(let i=0;i<arr0.length;i++){
//     arr0[i]=arr0[i-1];
//      //arr0[1]=10;
// }
// arr0[1]=10;
// arr0.length=arr0.length+1;
// console.log(arr0);