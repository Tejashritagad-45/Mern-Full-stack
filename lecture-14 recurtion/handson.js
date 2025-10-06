//insertion 
//intersection is common element of two or more arrays 

// arr4=[5,4,2,4,6,7], arr5=[6,4,6,8,9]
// //op=[6,4];
// let =intersection=[];
// let arr4Set =new Set(arr4);

// for(let i=0;i<arr5.length;i++){
//     if(arr4Set.has(arr5[i]))
//     intersection.push(arr5[i]);
    
// }
// intersection =[...new Set(intersection)]
// console.log({intersection});



let arr1=[3,5,7,4,7,4,5,2], arr2=[4,5,6,8,2,9];
let intersection=[];
let arr1Set=new Set (arr1);
//console.log(arr1Set)
for(let i=0;i<arr2.length;i++){
  if(arr1Set.has(arr2[i]));
  intersection.push(arr2[i]);  
}
intersection =[...new Set(intersection)];
console.log({intersection});


//find frequency of each element in the array
// let arr3=[2,3,4,1,0,1,2,3,4,5,10]
//     let map =new Map();
//     for(let i=0;i<arr3.length;i++){
//   if (map.has(arr3[i])){
//     map.set(arr3[i],map.get(arr3[i])+1);

//   }else{
//     map.set(arr3[i],1);
//   }
//     }
//     for(let keys of map.keys());
//     console.log(keys,map.get(keys));

//     for(let [keys,value]of map);
//     console.log({keys,value});







//recursion//
//to do work again and again

function factorial (N){
    if(N==1) return 1;
    let fact =N*factorial(N-1);
    return fact ;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(6));





function print1oN(N){
   if(N==0 ) return ;
    let print=print1oN(N-1);
    console.log(N)
        

   }
console.log(print1oN(6));

//recursion 
function factorial(N){
  if(N==0) return 1;
  let fact=factorial(N-1);
  let fact1= N*fact;
  return fact1;
}
console.log(factorial(5));


function factorialnum(n){
  //if(n==1)return 1;
  let fact=n*factorial(n-1);
  return fact;
}
console.log(factorial(5));

//print 1to N
function print1toNN(N){
  if(N==0) return 0 ;
  
  print1toNN(N-1);
 console.log(N);
  
}
print1toNN(5);
//console.log("Print 1 to N:", print1toNN(5));


// let n=6
// for(let i=n;i>0;i--){
//   console.log(i)
// }


//print power 

function power(N,i){
  if(N==0) return 1;
 let power1=power(N-1,i);
 let power2=i*power1;
 return power2;
}
console.log(power(3,4));
//let power1=


//reach at home
function reachAtHome(src,dest){
  if(src==dest){
console.log("reached at home",dest);
return;
  }  
  console.log("At position",src)
  src++;
   reachAtHome(src,dest);

}
reachAtHome(1,10);


//fibonacci series 
function fibanacciSeris(n){
  if (n==0)return 0;
  if (n==1)return 1;

  let result=fibanacciSeris(n-1)+fibanacciSeris(n-2);
  return result;
}
console.log(fibanacciSeris(8));



function fibonacciSeris1(n){
  let a=0;
  let b=1;
  let sum=0;
  for(let i=0;i<=n;i++){
    console.log(a);
    sum=a+b
      a=b;
      b=sum;
    
  }
  return (sum);
}
fibonacciSeris1(8);


function goStair(n){
  if(n<0) return 0;
  if (n==0) return 1;
  let ans=goStair(n-1)+goStair(n-2)
  return ans;
}
console.log(goStair(7));


function findIndics(arr,n){
 let n=arr.length;
    if(n==0)return 0
    let ans=[];
     ans=findIndics(arr[n-1]==x)
     ans.push(n-1);
     return ans;

}
const arr=[1,2,3,5,2,6]
let x=2
console.log(findIndics(arr,n));


