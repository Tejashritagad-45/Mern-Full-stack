
function sumOfArray(arr){
    let sum=0
for(let i=0;i<arr.length;i++){
   sum+=arr[i]
   arr[i]=sum
}
return sum;
}
let arr=[2,5,3,10,34];
console.log(sumOfArray(arr));

//reduce 
//return
let sum=arr.reduce((accumulator,Val,index,array)=>{
    accumulator+=Val;
    return accumulator;
    
}, 0);
//find the count of even numbers
let count=arr.reduce((accumulator,val,index,array)=>{
    accumulator+=val%2==0;
    return accumulator;
}, 0);

console.log(count);


let fruits=["apple","guava","kiwi","guava","kiwi","Apple","Guava"];
let frq=fruits.reduce((accumulator,val,index,array)=>{
    accumulator[val.toLowerCase()]=(accumulator[val.toLowerCase()]||0)+1;
    return accumulator
}, {});
console.log(frq);


 function frqCount(fruits){
    let obj={};
    for(let i in fruits){
        obj[fruits[i]]=(obj[fruits[i]]||0)+1;
    

    }
    return obj;
 }
 let fruitss=["apple","guava","kiwi","guava","kiwi","Apple","Guava"];
console.log(frqCount(fruitss));


//find();
//return a value
//returns the first element that matches the condition
let findkiwi=fruits.find((val,index,arr)=>val.toLowerCase()==="kiwi");
console.log(findkiwi);

//given an array of object ,containing details of users ,console name of first user aged above 30
const users=[
    {name:"Alice",age:25,isActive:true},
    {name:"BOb",age:30,isActive:false},
    {name:"Charlie",age:22,isActive:true},
    {name:"Diana",age:28,isActive:false},
    {name:"Ethan",age:35,isActive:true},
];

let findage=users.find((val,index,array)=>val.age>30)
console.log(findage);

//print  the name and age of each user
//using a map 
users.map((value)=>{
 console.log({ name:value.name,age:value.age})
});


//function to create array of names from above users 
let result=users.map((value)=>{
    return value.name;
   
},);
console.log(result)

//function to display all the active users from above array

const  activeUser=users.filter((value,index,array)=> value.isActive);
console.log(activeUser);


//function find the sum of age all users below 30
  let sum1=users.reduce((accumulator,val,index,array)=>{
    if(val.age<30)
     accumulator+=val.age
    return accumulator;
  },0)
  console.log(sum1);
    
  const age1=users.filter((value,index,array)=>value.age<30);
  console.log(age1);




//passing a function as an argument and returning a function 
function calculator(a,b,operation){
    return operation(a,b);
}
function multiply(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
let sum34=calculator(3,4,add);
console.log({sum34});


//Error Handling
// try{
// let studentName="Pratik"
// console,log(studentName);
// if(studentName=="Pratik")throw new Error("Pratik found!!");
// }


let n=346627;
let digit=0;
while(n>0){
    digit++;
    n=n%10;
}
console.log(digit);