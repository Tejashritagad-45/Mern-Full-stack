//assignment problem
// const arrrr=[1,0,1,0,1,0,1,1]
// let n=arrrr.length
// let anss=[];
// for(let i=0;i<n;i++){
//   if(i==n-1){
//     anss.push(0)
//   }else{
//     anss.push(1);
//   }

// }
// console.log(anss);

const arrr=[1,2,3,4,5,6]
const arr11=[2,9,12]
//const arr3=[];
 const ans1=[];
for(let i=0;i<arrr.length;i++){
    ans1.push(arrr[i]);
}
for(let i=0;i<arr11.length;i++){
    ans1.push(arr11[i]);
}
console.log(ans1);


//merge sort 

function mergeSorting(arr,arr1){
let n=arr.length;
let m=arr1.length;
let i=0;//pointer of current element from arr
let j=0;//pointer of ccurrent element form arr1
let ans=[];
while( i < n && j < m){
    if(arr[i]<arr1[j]){
       ans.push(arr[i])
        i++
    }else{
        ans.push(arr1[j]);
        j++
    }
}
    while(i<n){
    ans.push(arr[i])
        i++
    }
    while(j<m){
        ans.push(arr1[j]);
        j++
        }
    return ans;
}
const arr=[1,3,4,7]
const arr1=[2,9,12]
console.log(mergeSorting(arr,arr1))


// function mergeSorted(arr4,arrr1){
//     let n=arr4.length
//     let m=arrr1.length
//     let i=0;
//     let j=0
//     let ans=[];
//     while(i<n&& j<m){
//         if(arr4[i]<arrr1[j]){
//           ans[k]=(arr4[i]);
//           i++
//         }else{
//             ans[k]=(arrr1[j]);
//             j++
//         }
//     }
//     while(i<n){
//         ans[k]=(arr4[i])
//         i++
//     }
//     while(j<m){
//         ans[k]=(arrr1[j])
//         j++
//     }

//   return ans;

// }
// const arr4=[1,3,4,5]
// const arrr1=[2,4,6,8]
// console.log(mergeSorted(arr4,arrr1))

function mergeSorted(arr4,arrr1){
    let n=arr4.length
    let m=arrr1.length
    let i=0;
    let j=0
    let k=0;
    let ans=new Array(n+m);
    while(i<n&& j<m){
        if(arr4[i]<arrr1[j]){
        ans[k]=(arr4[i]);
          i++
        }else{
            ans[k]=(arrr1[j]);
            j++
            
        }
        k++
    }
    while(i<n){
        ans[k]=(arr4[i])
        i++
        k++
    }
    while(j<m){
        ans[k]=(arrr1[j])
        j++
        k++
    }

  return ans;

}
const arr4=[1,3,4,5]
const arrr1=[2,4,6,8]
console.log(mergeSorted(arr4,arrr1))


//find a mid using recursion and merge the array
function mergeSort (arr,low,high){
if(low==high){
    return [arr[low]];
}
   //recursive call
   let mid=Math.floor((low+high)/2);
   let leftSortedArray=mergeSort(arr,low,mid);
   let  rightSortedArray=mergeSort(arr,mid+1,high);
   //merging og returned array
   let mergedArr= mergeSorted(leftSortedArray,rightSortedArray);
   return mergedArr;
} 
let arr9=[2,3,5,8,9,6]
console.log(mergeSort(arr9,0,arr9.length-1));
//Time Complexity
//O(N*logN)


//Insertion sort
//Given a sorted array is sorted ,except the last element 
//place the last element at its correct position such that whole arr is sorted 
