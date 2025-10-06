/*Question find the square root of a number in O(logN)*/
let N=36
function squareRoot (N){
  let low=0;
  let high=N;
  while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(mid*mid==N){
      return mid;
   }else if(mid*mid>36){
    high=mid-1;
   }else if (mid*mid<36){
     low=mid+1;
   }
  }
    return -1;
}
console.log("square root of N  is :",squareRoot(N));

//function find a mid of array.
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
const arr=[1,2,3,6,9,11,15]
let target = 11;
console.log(findTargetElement(arr,target));



//function find a first occurance of the element;

//lowerbound = first index of element greater than or equal to target element.
//upperbound = first index of element that's just greater than the target element
//if not exits in array then we take n



//lowerbound//
function lowerBound (arr,target){
  let low=0;
  let high=arr.length;
  let index=arr.length;
  while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(arr[i]>=target){
      return mid;
    }else if(arr[i]){

    }
  }
}




//SET In JS
// let set =[(1,2,4,5,3,4)];
// console.log(set);
// //method to add element in set 
// set.add(23);
// console.log(set);


// //method to check if a number is on or set
// console.log(set.has (2));

// console.log("checking if 30 is in set ?",set.has(30));
// console.log("checking size of 200 in this set:",set.has(2));

// //method delete number in set
// console.log(set);
// console.log(set.delete(4),set);

/*Remove dupicates from the array*/
let array=[2,3,4,1,0,1,2,3,4,5,10];
//let set1 =[2,3,4,1,0,1,2,3,4,5,10];
let set1=new Set(array);
let arr1=[...set1];
let arr11=Array.from(set1);
let set2=new Set ([...array]);
let arr2=[...set2];
console.log({array,arr1,arr11,arr2});



/* MAP in JS */
// let map =new Map();
// map.set("name1","Sultan");
// map.set("Name","Sunnny");
//getting the value of specific key
//map.get

//deleting a key in map
//map.delete


//for of use karke

//const unionArr=[..]
// const unionSet=new Set ([...arr4,...arr5]);
// const unionArr=[...unionSet]




