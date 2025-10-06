//===============Array====================//
const arr =new Array(2);
console.log(arr);

const arr2 = new Array("10");
console.log(arr2);

const team=["MI","CSK","RCB","SRH","KKR","GT"];
console.log(team);
console.log(team. indexOf("SRH"));
console.log(team. indexOf("ABC"));
team.pop();
team.shift();
console.log(team);

console.log(team.length);


const team1=["MI","CSK","RCB","SRH","KKR","GT"];
const KKRIndex=(team1.indexOf("KKR"));
if(KKRIndex!=-1){
team1[KKRIndex]="LSG";
}
console.log(team1);


 console.log("finding SRH:",team1.includes("SRH"));
 console.log("Finding SRK:",team1.includes("SRK"));

 const KKRIndex1=team1


// lecture 3
function prefixSum(nums) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }
    return result;
}


// let arr =[3,5,1,2,4];
// let result=[];
// for(let i=0;i<arr.length;i++){

//     console.log(arr[i]);
// }



// const num = 23.5;

// console.log(num.toFixed(3) + 12);



//find a factorial of number
// let num1= 5;
// let result = 1;
// function findfact(num){
//     for (let i=0;i<num;i++){
//         result*=i;

//     }
//     console.log(result);
// }

//lecture4 4



/*previous lecture
//array questions
frequency array
Time complexity O(n^2)
space complexity O(1)
all pairs of diifference k
plus minus 
*/

// //BinaryToDecimal
// let binary=("1010");
// let count=0; //give 2 is power 
// let num=0 ;  //store a binary conversion 
// for(let i=binary.length-1;i>=0;i--){
//     num+=parseInt(binary[i])*2**count;  //num=1*2*0  =1
//                               //    0*2*1 =2
//                               //    1*2*2 =4
//                               //    0*2*3=8
//     count++;
// }
// console.log(num);


// //scope//
// x=10;


// /*Scopes*/
// x=10;
// let y=5;
// const z=15;
// var w=15;
// {
//     var y1=6;
//     const = 17;
//     console.log("var inside block scope"y1)
// }




// //nested scope
// function nestedScope(){
//     let a=5;
//     function innerFunction(){
//         let b=10;
//         console.log(a+b);
//     }
//     innerFunction();
// }


// //nested array
// let arr=[1,[1,2,3],4,5,[6,95,71],80]
// console.log(arr[4][3])


// //2
// let arr1=[1,[1,2,3],4,5,[6,95,71],80];
// for(let i=0;i<4;i++){
// //if(arr[i]-length==)
//     for(let j=1;j<arr,length;j++){
//         //if (arr[i])
//         console.log(arr1)

//     }
// }
// //
// //Nested arrays 
// const arr2=[1,[2,3,4],5,6,[7,8]];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length==undefined){
//         //this means that element is a number
//         console.log(arr[i]);

//     }else{
//         //since arr[i];is an array ,we will use for loop to print this array
//         for(let j=0;j>arr.length;j++){
//             console.log(arr[i][j];)
//         }
//     }
// }
// //Approch 2
// for(leti=0;i<arr.length;i++){
//     if(typeof arr[i=="number"])console.log(arr[i]);
//     else{
//         for(let i=0;j<arr[i].length;j++){
//             console.log(arr[i][j]);
//         }
//     }
// }
// //Approch 3
// //isArray
// for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i]))console.log(arr[i]);
//     else{
//         for(let i=0;j<arr[i].length;j++){
//             console.log(arr[i][j]);
//     }
// }
// }
