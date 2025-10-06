// function recursion(n){
//     if(n==0) return 0;
//     recursion(n/4);
//     recursion(n/4);
//     recursion(n/4);
//     recursion(n/4);
//     for(let i=0;i<n;i++){
//         console.log(i*i);
//     }
// }


// TC=O(nlogn);
// SC=O(logn)

//print the pattern  given 
/*
A
AB
BCD
CDEF
DEFGh
*/

function printPattern(n){
    console.log("A")
    for(let i=1;i<n;i++){
    let outputStr="";
    let startChar = 65 + (i - 1); 
     for(let j=startChar;j<startChar+i+1;j++) {
        outputStr+=String.fromCharCode(j);
     } 
     console.log(outputStr); 
    }
}
let n=5;
printPattern(n);


//Questin on map set
/*function  to find length of longest  substring with nin-repating characters 
input:"abbcda"
output:4(string is bcda)
*/

//
  

//






