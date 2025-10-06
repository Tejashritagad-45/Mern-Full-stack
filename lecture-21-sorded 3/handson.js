//Insertion sort 
function insertionSort(arr){
    let n=arr.length;
   for(let i=1;i<n;i++){
   temp=arr[i];
    for(let j=i-1;j>=0;j--){
        if(temp<arr[j]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }else{
            break;
        }
    }
   } 
   return arr;
}
const arr9=[4,12,11,20,14,13];
console.log(insertionSort(arr9));



// //insetion sort using while loop
// function insertionSort(arr){
//     let n=arr.length
//     while()
// }




//Given sorted array whole element is sorted except the the last elemnet , 
// place the last element at is correct postion such that whole array is sorted .

//I/p=1,2,7,9,6
//O/p=1,2,6,7,9

function Insertionsort(arr){
    let n=arr.length
    let lastElement=arr[n-1]
    for(let i=n-2;i>=0;i--){
        indexToInsertAt=0;
        if(arr[i]>lastElement){
            arr[i+1]=arr[i]
      }else{
        indexToInsertAt=i+1;
        break;
      }
    }
    arr[indexToInsertAt]=lastElement
    return arr;
}
const arr=[3,4,7,9,2]
console.log(Insertionsort(arr));

function InsertionsortArray(arr){
    let n=arr.length;
    let ind=0;
    for(let i=1;i<n;i++){
        let firstElementOfUnsortedPart=arr[i]
        let indexToInsertAt=0;
        for(let j=ind;j>=0;j--){
            if(arr[j]>firstElementOfUnsortedPart){
                arr[j+1]=arr[j];

            }else{
                indexToInsertAt=j+1;
                break;
            }
        }
        arr[indexToInsertAt]=firstElementOfUnsortedPart;
        ind++;

    }
    return arr;
}
const arr1=[3,1,6,2,8,7,4]
console.log("sorted array using insertion sort:",InsertionsortArray(arr1).join(" "));

//given an array place its last element  at position such that all smaller or equal  elements are in left or all greater elements are in right
//input:[2,1,7,4,5]
//Output:[1,2,4,7,5] if there are  mutiple answers,print any of them
//NOTE: try to implement this O(N)
//Note :then try O(1) space also;


//optimised approch using O(N)and O(1)
function placeElement(arr){
    let n=arr.length;
    ind=0;
    let lastElement=arr[n-1]

    for(let i=0;i<n;i++){
        if(arr[i]<=lastElement){
        [arr[i],arr[ind]]=[arr[ind],arr[i]];
        ind++
        }
    }
 

    return arr;
}
const arr2=[2,7,6,5,4,4]
console.log(placeElement(arr2));


//sort () method in js
const arr3 =[3,1,6,2,8,7,4]
//arr.sort();// sort in asending order
//arr.sort();//sort in decending order
//also sort in asending
arr3.sort((a,b)=>a-b)
console.log({arr3});
//
