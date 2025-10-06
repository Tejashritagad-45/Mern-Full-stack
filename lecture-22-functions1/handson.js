const team ={
  name:"Indian Cricket Team",
  players:[{id:1,scores:[10,34,80]}],
}





function SayHello(){
    console.log("Hello Words");
}
SayHello();

const name="jai"
console.log(name);

//Types of function 
//Arrow function 
//Arrow function(3,4)Note:Arrow function is not hoisted but the varible is

const arrow1 =(a,b)=>a-b;
console.log(arrow1(4,2));

const arrow2=(a,b)=>a*b
console.log(arrow2(3,7));

const arrow3=(a,b)=>a%b;
console.log(arrow3(36,9));

//write a arrow function to check if a number is divisible by 3or not
function isDivisible(num){
    if(num%3==0){
        return true;
    }else{
        return false;
    }
}
console.log(isDivisible(8)); 


function isDivisible(num){
    return num%3==0;
}
console.log(isDivisible(6))

//if a any comparison javascript give a boolean value 

const isDivisible3=(num)=>!(num%3)
console.log(isDivisible3(6));

//Note: Arrow function do not have there own this keyword they uses parents this
const student1= {
    name2:"Teju",
    age:21,
   result1 :function  (resultStatus){
   console.log(this.name2 + " has " + resultStatus  + " the Exam " );
},
  result2: (resultStatus)=>{
   console.log(this.name2 +" has " + resultStatus + " the Exam ");
  },
};
student1.result1("passed");
student1.result2("failed");

//==========Anonymous function==============
//basicly a function is no name

/* ======Higher Order function (hofs)=========
these functon are either functions that takes function as argument or return function
 Type of function 
 * ForEach
  applies the callback function on each element
  itrets each element doesn't break like the other loop*/
  
   let arrr=[2,3,4,5,6];
   //console.log(
    arrr.forEach((value,index,array)=>{
    value*=2
    arrr[index]=value
    //console.log(value,index,array);
    })
 // );
  console.log(arrr);

 arrr.forEach((value,index,array)=>{
    arrr[index]=value*=3
})
console.log(arrr);


let userss=[
    {name:"rani", age :22},
    {name:"raj",age:25},
    {name:"rohit",age:45},
]
userss.forEach((value)=>{
  console.log(value.name + " " +value.age)
});

console.log("=====================================");

let IplTeam=[
    {plyName:"Rohit Sharma" , Runs:5000},
    {plyName:"S.K.Y", Runs:4000},
    {plyName:"Hardik Pndya",Runs:3500}
]
  IplTeam.forEach((value)=>{
    console.log(value.plyName+ " " + " Runs In Ipl "+value.Runs)
  })
/*map()

(this will change the original data that is (users arry))
 - transform the array
 -return an a array*/
 let arr4=[2,4,5,7,8,9]
 //console.log(
    arr4.map((value,index,array)=>{
      console.log({value,index,array})
    })
   
   console.log( 
  arr4.map((value)=>{
    return value +value

  })
);


let users1=[
    {name:"rani", age :22},
    {name:"raj",age:25},
    {name:"rohit",age:45},
]
users1.map((value)=>{
 console.log({ name:value.name.toUpperCase(),age:value.age})
})
//console.log(users1);
//);


 
 /*.filter 
 keeps the elements that passes the the condtion 
 doesen't change the original array 
 returns an array
 nums.filter=(value,index,array)=>condtion*/

 let nums1=[2,5,4,8,9,6]
 const evenNumber=nums1.filter((value,index,array)=> value%2==0);
 const oddNumber=nums1.filter((value,index,array)=> value%2!=0);
 console.log(evenNumber);
 console.log(oddNumber);



 let names2=["pranjal","Bhavesh","Uday","sidharth","Neha"];
 const namestd =names2.filter((value)=>(value.length>5))
console.log(namestd);


//
