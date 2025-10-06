console.log(4/0);
console.log("5"+"2");
console.log("0"-"0");

console.log("5"-false);
console.log(4/Infinity);
console.log(Infinity+51)
console.log("px"-2);
console.log("Infinity51"-true);
console.log(NaN+"0087")

let arr=[5,7,9,5];
let result=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      result.push(arr[i]);
      console.log (result);
    }else{
         console.log(-1)
    }
    
}


//contest question 
function scopeExample(){
  console.log(x);
  var x =5;
  if(true){
    var x=10;
    let y=20;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  //console.log(y);
}
scopeExample();



// let Arr=[1,1,5,5,8,9];
// let n=Arr.length
// let  Maxsum=0;
// for(let i=0;i<n;i++){
//   let sum=0
//   for(let j=0;j<n;j++){
//   //if(i==j) continue;
//     sum+=Math.abs(Arr[i]-Arr[j]);

//   }
//   Maxsum=Math.max(Maxsum,sum)
// }
// console.log({Maxsum});


//Total price
function totalPrice(arr){
  let sum=0
for(let i=0;i<arr.length;i++){
  sum+=arr[i].price;
}
return sum;
}

 const arrr=[
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 20 },
  { title: "Book 3", price: 30 }
]

console.log(totalPrice(arrr));

//Armstrong Number
function Armstrong(num1){
//let num1=0;
let count=0;
let sum=0;
let temp=num1;
while(temp>0){
  count++
  temp=Math.floor(temp/10);
  }
  let temp1 =num1;
  while(temp>0){
    let digit=temp%10;
    sum+=Math.pow(digit,count);
    temp1=Math.floor(temp/10);
  }
  return num1=sum;
}
console.log(Armstrong(153));


//Prime Number

let n = 5
let isprime=false;
for(let i=2;i<n;i++){
  if(n%2==0){
    isprime=true;
    break;
  }
}
console.log(isprime? "false" : "true");


//is prime
//optimization to check the numser is prime ir not
let N=18;
function isprime1(N){
for(let i=0;i<n;i++){
  if(N==1)
    return false;
   if(n%2==0);
   for(let i=2;i<=Math.floor(Math.pow(N,0.5));i++){
    if(N%i==0){
      return false

    }
    return true;
   }

}
}
console.log(isprime1(N));

//pattern printing 
/*
1
12
234
3456
45678
*/
function printPattern(n2){
  console.log("A")
for(let i=1;i<n2;i++){
  let outputStr="";
for(let j=i;j<i+i+1;j++){
  outputStr+=j;

   }
   console.log(outputStr);
}
}
let n2=5;
printPattern(n2);





//student Grade classification
let marks=80;
if(marks>90){
  console.log("Excellent");
}else if(marks>80){
  console.log("Good")
}else if (marks>70){
console.log("fair")
}else if(marks>60){
console.log("Meets Expectation");
}else {
  console.log("Below Excepectation")
}

//using a switch case
let Marks=0







