// // let arr4=[1,2,3,4,5,6,7,],arr5=[1,2,3,5,7,6,8]
// // let intersection=[];
// // let arr4Set=new Set(arr4);

// // for(let i=0;i<arr5.length;i++){
// //     if(arr4Set.has(arr5[i]))
// //         intersection.push(arr5[i]);

// // }
// // intersection=[...new Set(intersection)]
// // console.log(intersection);




// // let arr=[2,3,4,1,0,1,2,3,4,5,6];
// // let map=new Map();
// // for(let i=0;i<arr.length;i++){
// //     if(map.has(arr[i])){
// //         map.set(arr[i],map.get(arr[i])+1);

// //     }else{
// //         map.set(arr[i],1);
// //     }
// // }
// // for(let key of map.keys())
// //     console.log(key,map.get(key));

// // for(let [key,value]of map)
// //     console.log({key,value});


// // let arr1=[2,3,4,1,0,1,2,3,4,5,6];
// // let map1=new Map();
// // for(let i=0;i<arr.length;i++){
// //     if(map.has(arr[i])){
// //         map.set(arr[i],map.get(arr[i])+1);

// //     }else{
// //         map.set(arr[i],1);
// //     }
// // }
// // let obj={};
// // console.log("method 2 of Printing");
// // for(let key of map.keys())
// //     console.log(key,map.get(key));


// // console.log("method 2 of Printing");
// // for(let key of map.keys())
// //   obj[`${key}`]=map.get(key);  

// // console.log("method 2 of Printing");
// // for(let [key,value]of map)
// //     console.log({key,value});





// // //Question :remove Duplicates from an array and print the array
// // arr=[1,2,3,2,3,5,1,3,2];
// // let set=new Set(arr);
// // console.log(set);

// // console.log([...new Set(arr)]);



// // /*Anagrams*/



// // //find the frequency of all words in a paragraph (only spaces ,A-Z &a-z letters will be there)
// // const paragraph="Hello how are you How was your day eat how did you find that";


// // //if('a-z'lowercase);
// // console.log(paragraph.split(" "))
// // console.log(paragraph.toLowerCase());



// // let paragraphMap=new Map();
// // for(let i=0;i<paragraph.length;i++){
// // if(paragraphMap.has (paragraph[i])){
// // paragraphMap.set(paragraph[i],paragraphMap.get(paragraph[i]+1));
// // }else 
// //     paragraphMap.set(paragraph[i],1)
// // }


// // let wordsFreq={};
// // for(let [key,value]of paragraphMap) wordsFreq[key]=value;
// // console.log(wordsFreq);

// // // for(let [key,value]of paragraphMap)
// // //     console.log({key,value});



// // let word =paragraph.trim().toLowerCase().split("");
// // let wordMap=new Map();
// // for(let i=0;i<arr.length;i++){
// //     wordMap.set(word[i],(wordMap.get(word[i])))
// // }




// // //===================Anagrams==================

// //when two words have same exact letters but order may change
//   let strA=" listen";
//   let strB="silent";
//   //create  a map silent then traverse in listen and satrt decrementing the freq of each element if it exits in map
//     function isAnagram(strA,strB){
//         if(strA.length!=strB.length) return false;
//      let freqObj={};
//     for(let i=0;i<strA.length;i++){
//     freqObj[strA[i]]=(freqObj[strA[i]]|| 0)+1;
//   }
//     for(let j=0;j<strB.length;i++){
//         if (!freqObj[strB[i]])  return false;
//         freqObj[strB[i]]=freqObj[strB[i]] -1;
//   }
//   for(let value of Object.values(freqObj))if (value) return false;
//   return true;
// }
// console.log(isAnagram(strA,strB));

// //TC=O(m+n)*/
// //SC - O(26)~O(1)




// //==================================recurtion========================//
// //Bahane dhudne h ki recursive function ko kaise reuse kr sake.
// function factorial (N){
//     if(N==1) return 1;
//     let fact =N*factorial(N-1);
//     return fact ;
// }
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(6));
// //TC =O(N)
// //SC=O(1);however it uses call stack ,but this is not considered in space complexity


// //print numbers from 1 to N

// function print1oN(N){
//    if(N==0 ) return ;
//     let print=print1oN(N-1);
//     console.log(N)
        

//    }
// console.log(print1oN(5))


//find Indics
// function findIndics(arr,n){
//     if(n<=0)return 0
//     let ans=[];
//      ans=findIndics(arr(n-1)==x)
//      ans.push(n-1);
//      return ans;

// }
// const arr=[1,2,3,5,2,6]
// console.log(findIndics(arr,2));

