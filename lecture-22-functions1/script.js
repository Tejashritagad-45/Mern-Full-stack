//function declartion 
const arrow =(a,b)=>{return a-b};
    
    console.log(arrow(5,2));

//write an arrow function to check if a number is divisible by 3or not
function   isdivisible(num){
    if(num%3==0){
        return true;
    }else{
        return false
    }    
}
console.log(isdivisible(6));
//doing it using more than statement 
const isDivisibleByk3=(num)=>{
    if(num%3==0) return true;
    else return false;
};
//doing it using a single statment
const isDivisibleByk=(num)=>!(num%3);
console.log(isDivisibleByk(19));



const student={
  fullName:"Tejashri Tagad",
  age:21,
  result1:function(resultStatus){
    console.log(this.fullName+ " has "+resultStatus + " the Exam ");
    console.log(this);
  },
  result2:(resultStatus)=>{
    console.log(this.fullName + " has " + resultStatus + " the exam ");console.log(this);
  },

};
student.result1("passed");
student.result2("failed")

//Anonymous Function
//basically  a functon with no name


//Higher Order Function (HOFs)
//

let arr=[2,1,6,3,9];
console.log(
    arr.forEach((value,index,array)=>{
        value*=2;
        array[index]=value;
        console.log(value,index,array);

    })
);
console.log({arr});

let users=[
    {name:"Ramesh",age:20},
    {nmae:"Suresh",age:10},
    {nmae:"Rani",age:40},

];

    users.forEach((value)=>{
        console.log(value.name + " " + value.age)
    })


  /*map()
  -transforms the array 
  -returns an array 
  -does not chage the original array
  */

  arr=[3,2,9,0,10];
  let squredArr=arr.map((value,index,array)=>{
    return value*value;

  });
  console.log({squredArr});


//   let users1=[
//     {name:"Ramesh",age:20},
//     {nmae:"Suresh",age:10},
//     {nmae:"Rani",age:40},

//   ];

// let capitalNameusers=users.map((value)=>{
//     return {name:value.name.toUpperCase(),age:value.age};
// });
// console.log({capitalNameusers})
// console.log({users1})


let nums=[2,12,9,18,27];
const oddNums=nums.filter((value,index,array)=>value%2);
console.log({oddNums});


let names=["pranjal","Bhavesh","Uday","Sidharth","Neha"];
const namess=names.filter((value)=>(!names.length<=5));
console.log(namess)






