



// /*previous lecture
// //array questions
// frequency array
// Time complexity O(n^2)
// space complexity O(1)
// all pairs of diifference k
// plus minus 
// */

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


// // // //scope//
//scope mean whwere a variable is accessible
//mhnaje ki variable ko hum kaha kaha use kr skte h



//  x=10;//global variable
//  console.log(x);

// // 

// x=12;
// let y=15;
// const z= 20;
// var w= 25;
// {
//     var y1 = 9;
//     const y2=7;
//     //console.log(y1);
//     console.log("var inside block scope",y1)
//     console.log("const inside block scope",y2)
// }
// //console.log(y1); //var is function scope not block scope
// console.log("var outside block scope",y1);
// console.log("let outside bolck scope",y2); //error let and const are block scope not function scope

//Ex=2

// A=19; //global variable not use let ,const,var
// console.log(A);


//let x=5; //local variable
//var y=12;
//const z=16;

//var
//mhnaje var ha block scope madhye pn run hoto ani ani to global scope madhe pn run hoto
//to fakt function scope madhye run hot nahi



//var is a 

// var y2=9;
// {
//     var y1 =0;
//     //console.log( y2);;
// }
// console.log(y1); //var is function scope not block scope

// //let and const
// //let and const mhanje block chya baher run hou shakat nahi.


// let s=2;
// const p=2;
// {
//     let s1=3
//     //console.log(s1);
// }
// console.log(s1);


// function sayHi(){
//     for(let i=0;i<x;i++){
//     console.log("Hi",i);
//     }

// }
// sayHi();


//nested scope
// function nestedScope(){
//     let value=145;
//     for(let i=onabort;i<5;i++){
//         if(i%2===0){
//             let value2=45;
//             console.log(value,value2);
//         }
//     }
// } 
// //function madhye ahe te if chya baher ahe.
//mhnaje function cha nested loop if ahe.



//Nested Array
// let arr=[1,[1,2,3],4,"50","class"];
// console.log(arr[4][3]);//s
// console.log(arr[0]);//1
// console.log(arr[3][1]);//0
// console.log(arr[1][1]);//2



// let arr1=[[2,5],[3,6],[1,4],[6,3]];
// for(let i=0;i<arr.length;i++){
// for(let j=0;j<2;j++){
//     console.log(arr1[i][j]);
// }
// }


// let arr2=[1,[1,2,3],4,5,[6,95,7],80];
// for(let i=0;i<arr2.length;i++){
//     if(Array.isArray(arr2[i])){
//     for(let j=0;j<arr2[i].length;j++){
//         console.log(arr2[i][j]);
//     }
// }
// }


// let arr3=[1,[2,3],5,6,[7,8,9]]
// for(let i=0;i<arr3.length;i++){
//     console.log(arr3[i]);


    
// }

// //method 1 we use a undefined keyword as variable which is not array
// console.log("printing a array using a undefined keyword") 
// const arr4=[1,[2,3],5,6,[7,8,9]]
// for(let i=0;i<arr4.length;i++){
//     if(arr4[i].length===undefined){
// //this gives a number.you no number have a not a length so output is undefined if undefined
// //we check here number is present or not to use a undefined
//     console.log(arr4[i])
// }else{      
//         for(let j=0;j<arr4[i].length;j++){

//           console.log(arr4[i][j]);
// }
// }
// }

// //type of
// console.log("printing a array using a type of keyword") 
// for(let i=0;i<arr4.length;i++){
//     if(typeof arr4[i]==="number"){
//         console.log(arr4[i]);
// }else{
//     for(let j=0;j<arr4[i].length;j++){
//     console.log(arr4[i][j]);
// }

// }
// }
// //if we print all array not a line
// console.log("if we print all array .not a one line")
// for(let i=0;i<arr4.length;i++){
//     if(typeof arr4[i]==="number"){
//         console.log(arr4[i]);
// }else{
//     for(let j=0;j<arr4[i].length;j++){
//     console.log(arr4[i],[j]);
// }

// }
// }



// //using array  of Array.isArray 
// console.log("printing a array using a Array.isArray keyword")
// for(let i=0;i<arr4.length;i++){
//     if(!Array.isArray(arr4[i])){
//         console.log(arr4[i]);

//     }else{
//         for(let j=0;j<arr4[i].length;j++){
//             console.log(arr4[i][j]);
//         }

//     }
// }

// //print only array
// console.log("printing only array");
// for(let i=0;i<arr4.length;i++){
//     if(Array.isArray(arr4[i])){
//     for(let j=0;j<arr4[i].length;j++){
//         console.log(arr4[i][j]);

//     }
// }
// }
// //


// console.log("Array")
// const arr0=[[1,2,3],
//             [4,5,6],
//             [7,8,9],]
// for(let i=0;i<arr0.length;i++){
// //if(Array.isArray (arr[i])){
// for(let j=0;j<arr0[i].length;j++){
//     console.log(arr0[i][j]);

// }
// }
// //}



//function tells a nested array is a matrics 
function isMatrix (arr){
    if(!Array.isArray(arr))return false;
    if(!Array.isArray(arr[0]))return false;
    let colSize =arr[0].length;
    //for(let i=0;i<arr,length;i++)
    for(let array of arr){
        if(arr.length !=colSize){
      return false;
    }
}
   return true;     
}
//console.log(isMatrix(arr));
console.log(isMatrix([[1,2,3],
                     [4,5,6],
                     [7,8,9]]));

console.log(isMatrix([[1,4,5],
                     [2,3],
                     [6,7,8]]));
                   

// /*Scopes*/
// x=10;
// let y=5;
// const z=15;
// var w=15;
// {
//     var y1=6;
//     consty2 = 17;
//     console.log("var inside block scope",y1)
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
//             console.log(arr[i][j]);
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


// //write a function to give a arrays is matrics or not
// function isMatric(arr){
//     for(let i=1;i<arr.length;i++){}
//     if(arr[i].length!=arr[0].length){
//         return false;
//     }else {
//         return true;
//     }
// }
// isMatric([1,2,3,4,5]);
// console.log(matrix(num));





// function Matrics(arr){
//     if(!Array.isArray(arr))return false;
//     if(Array.isArray(arr))return true;
//     let colSize=arr[0].length;

//     for(let array of arr)
//         if(array.length!=colsize)return false;
//     for(let array of arr )if (array.length!=colsize)return false;

// }
// console.log(
//     "a nested array with diffrent number of colums in rows",
//     [[1,2,3]
//      [1,2,3]
//      [1,2,3] ] 
    
// )


// //write a functionto calculate the sum of all elements in a nested array
// function sum (arr){
//     let sum=0;
//   for(let i=0;i<arr.length;i++){
//     for(let i=0;i<arr[i].length;i++){

    
//       sum*=[i] [j]

//     }
//     return sum

// }
// }
// console.log(sum)









//     //subarryas
    
