let N=5;
function printNaturalSum (N){
  //if(N==1) return 1;
  
   if(N<0) return 0;
   return N+(printNaturalSum(N-1));
}
console.log(printNaturalSum(N));


//GCD =gretest common diviser
//big number which devide two element A and B.
//GCD=(8,32)=8
//GCD=(0,15)=15
//GCD=(1,20)=1
//GCD=(7,15)=1

//GCD

// function GCD (a,b){
// while(a!=0){
//     let temp=0;
//     if(a=b%a){
//     b=temp;   
    
// }
// }
//   return b;
// }
// console.log(GCD(15,25));




function GCD1(a,b){
    if(a==0) return b;
    return GCD1(b%a,a);
}
    console.log(GCD1(-7,-14));

//GCD of an array
let arr=[27,12,18,24,30]
let gcdArr=0;

for(let i=0;i<arr.length;i++){
    gcdArr=GCD1(gcdArr,arr[i]);

}
console.log(gcdArr);


//H.W: Nth fibonachi number using recursion

//Binary Exponentipon

function power (a,b){
    let power=1;
    for(let i=0;i<b;i++){
        power*=a;

       }
       return power;
    }
    console.log(power(2,10));
   //TC=O(N); 
//

function binaryExponentiation(a,n){
 if(n==0) return 1;
 if(n==1) return a;   
 let temp=binaryExponentiation(a,Math.floor(n/2));
 return temp *temp*a**(n%2);

}
console.log(binaryExponentiation(2,10));
console.log(binaryExponentiation(5,15));