//Binary search

//when to apply binary search
//if a serch space is sorted then we appply the binary search in as string array object
//?how to apply binary serch
//answer  will always come at mid otherwise look for answer in left and right
//mid =low+(high-low)/2
  //mid=0+(81-0)/2
  //40.5 but math.floor is use which give a perfect square =40;


//function find targetElement of array
function targetElementInd (arr0,target){
    let low=0;
    let high=arr0.length-1;
    while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if(arr0[mid]==target){
        return mid;
    }else if(arr0[mid]>target){
        high=mid-1;
    }else{
        low=mid+1;
    }
    }
    return -1
}
const arr0=[2,4,5,6,7,8,9];
target=9;
console.log(targetElementInd(arr0,target));


//fide a first occurance of the tearget elememt
function FirstOccuraraneTaragetEle(arr,target){
    let low=0;
    let high=arr.length-1;
    let index=-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr22[mid]==target){
            index=mid;
            high=mid-1;

        }else if(arr22[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return index;
}
const arr22 =[1,2,6,6,11,11,11,15]
let target2=11;
console.log("first occurance target element index is:",FirstOccuraraneTaragetEle(arr22,target2));


//last occurance of target element

function lastOccuranceTargetEle(arr,target){
    let low=0;
    let high=arr.length-1;
    let index=-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
  if(arr3[mid]==target){
    index=mid
    low=mid+1;//serching to the right 
}else if(arr3[mid]>target){
    high=mid-1;
}else{
    low=mid+1;
}
 }
 return index;
}
const arr3=[3,4,5,6,6,11,11,13];
 let target3=6;
 console.log(lastOccuranceTargetEle(arr3,target3));



 //lowerbound 
//first Index of elment gerater than or equal to target element

function lowerBound(arr,target){
    let low=0;
    let high=arr.length;
    let index=arr.length;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
            if(arr[mid]>=target){
                index=mid;
                high=mid-1;
            }else{
                low=mid+1;
            }
    }
    return index;
}
const arrayy=[2,3,5,6,9,10,11];
 let targett=6
 console.log( "the lowerbound of ",targett,"is",lowerBound(arrayy,targett));




 //upperbound
 //if target dilel asel tar tya traget peksha just big element index is a upperbound of target
// const arr=[3,4,5,6,6,11,11,13];
//target is 6
//upperbound (ub) is a index of 11 is 5
//(ub=6)=5

//===============HOMEWORK========================
function upperBound (arr,target){
    let low=0;
    let high=arr.length-1;
    let index=arr.length;
    while(low<=high){
     let mid=Math.floor(low+(high-low)/2)
      if(arr[mid]>target){
           index=mid;
           high=mid-1; 
      }else{
        low=mid+1;
      }
    }
    return index;
}
const array1=[1,2,4,6,8,9,11,16];
let target0 =12
console.log("the upperbound of ",target0,"is",upperBound(array1,target0));



//SET AND MAP IN JS
let set=new Set ([1,2,3,4,5,6])
console.log({set});
//if add element in set
set.add(32);
set.add(-4);
set.add("5");
console.log(set);

//method to check the element is presnt or not
 console.log("checking if 30 is in set:", set.has(30));
 console.log("checking if 3 is in set:",set.has(3));

 console.log("size of set:"+set.size);
 //method to deletb
 console.log(set.delete(4));
 console.log(set.delete(6));

 //remove duplicate character 
//   let arrayyy =new Set ([1,2,3,4,3,2,1,3,5]);
//  console.log({arrayyy});
//  console.log(...arrayyy);


 arrr=[1,3,4,7,8,3,5,5,4,]
let set0=new Set (arrr)
let sett=new Set([...arrr])
 console.log(arrr,[...set0,sett])


 