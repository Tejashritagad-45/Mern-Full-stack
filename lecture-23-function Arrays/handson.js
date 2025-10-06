//Array sum of 
let arrr=[2,4,6,9,8,7,8,9]
let sum3=0;
 let i=0;
 while(i<arrr.length){
    sum3+=arrr[i];
    i++;
 }
 console.log(sum3);


 //reduce function
 //sum of Array
let arr1=[6,7,12,3,44,5]
 let sum4=arr1.reduce((accumalator,value,array,index)=>{
    accumalator+=value
    return accumalator;
 }, 0);
 console.log(sum4)

//find the count of even number
let count1=arr1.reduce((accumalator,value,index,array)=>{
    accumalator+=value%2==0;
    return accumalator;
}, 0);
console.log(count1);

//find the sum of even number;
let sumEven=arr1.reduce((accumalator,value,index,array)=>{
 if (value%2==0){
 accumalator+=value
 }
 return accumalator;
}, 0)
console.log(sumEven);
//even number
let even=arr1.filter((value,index,array)=> value%2==0);
console.log(even);

let odd=arr1.filter((value,index,array)=> (value%2!==0))
console.log(odd);



//let IplTeam=["MI","RR","CSK","RCB","RR","MI","KKR","GT"];
function frqCount1(IplTeam){
let obj={};
for(let  i in IplTeam){
  obj[IplTeam[i]]=(obj[IplTeam[i]]||0)+1
}
 return obj;
}
let IplTeam=["MI","RR","CSK","RCB","RR","MI","KKR","GT"];
console.log(frqCount1(IplTeam));


let IplTeam1=["MI","RR","CSK","RCB","RR","MI","KKR","GT"];
let freqcount=IplTeam1.reduce((accumalator,value,index,array)=>{
   accumalator[value.toLowerCase()]=(accumalator[value.toLowerCase()]||0)+1
   return accumalator
} ,{})
console.log(freqcount);


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
