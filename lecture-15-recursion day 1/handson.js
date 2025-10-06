//homework 
console.log("fibonachhi series");
//let N=7
function printFibonacchiSeries(N){
    if(N==0)return 0;
    if(N==1)return 1;
let fibonachhi=printFibonacchiSeries=(N-1)+printFibonacchiSeries(N-2);
     return fibonachhi;
}
console.log(printFibonacchiSeries(7));

let n=8
function  printFibonacchiSeries1(n){
    
    if(n==0) return 0;
    if(n==1) return 1;
    let fibonachhi =printFibonacchiSeries1(n-1)+printFibonacchiSeries1(n-2)
    return  fibonachhi;
}

console.log(printFibonacchiSeries1(n))



//power
//power tya sankhechya dokyavr aslelya sanhya ni khalchya sankhyell multiply karn .titkya vela
//5power4 5 cha 4 vela multiply 
// let power=1
let power1 =1;
function powerofnum (a,b){
    for(let i=0;i<b;i++){
     power1*=a
    }
    return power1;
}
console.log(powerofnum(5,4))

//using recurtion

function printpower(a,b){
    if(b==0) return 1;
    if(b==1) return a;
    let temp=printpower(a,Math.floor(b/2));

    return temp*temp*a**(b%2);
}

console.log(printpower(5,4));


//write function to find a sum of 1to N natural numbers
  function sumNaturalNum (n){
    if(n==0) return 0;
    //(n==1) return 1;
    let natural= sumNaturalNum(n-1)+n
    return natural;
  }
console.log(sumNaturalNum(5));



//GCD is a gretest common diviser 
//the element that are divisor the tow number 
//GCD of an array
let arrr=[27,12,18,24,30]
let gcdArrr=0;

for(let i=0;i<arr.length;i++){
    gcdArr=GCD1(gcdArrr,arrr[i]);

}
console.log(gcdArrr);


//GCD  
let arr2=[27,12,18,24,30]
let gcdarrr=0;

for(let i=0;i<arr.length;i++){
    gcdarrr=GCD1(gcdarrr,arr[i]);

}
console.log(gcdarrr);


//recursive multiplivtion
function multiplication(n,m){
for(let i=0;i<m;i++){
    result=(n*m)
}
   return result;
}
console.log(multiplication(10,13))
