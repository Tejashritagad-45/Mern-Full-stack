// //convert string into a camelcase
// //
// // function camelcase (str){
// //     Ccase ="";
// //      str.trim();
// //      //str.toLowercase();
// //      for(let i=0;i<str.length;i++){
// //         if(str[i]===' '){
// //          Ccase+=str[i+1].toUpperCase();
// //          i++;
// //         }else Ccase+=str[i];
        
// //      }
// //      console.log(str);
// //      Ccase=Ccase.replaceAll(" " ,"")
// //      return Ccase
// // }

// // const str1= "student first Name";
// // console.log(camelcase(str));


// console.log("reverse string");
// //reverse string
// function revString (str){
//    let revString="";
//   for(let i=str.length-1;i>=0;i--){
//   revString+=str[i];
//   }
//   return revString;
// }
// //const str="1,2,3,4,5";
// const str ="a,b,c,d,e,3.4,hello"
// console.log(revString(str));


// function revStr (str){
//    let reverse="";
//    for(let i=0;i<str.length;i++){
//       reverse+=str[str.length-i-1];
      
//    }
//    return reverse;

// }

// const str2 ="1,2,r,56,7,8"
// console.log(revString(str2));


// function ispalindrome (str){
   
//    for(let i=0;i<str.length;i++){
//       if(str[i]===str[i]){

//       }

//    }


// }


// //reverse a string 
// function reverseStr(str){
//    let n=str.length
//    let ans="";
//    for(let i=n-1;i>=0;i--){
//        ans+=str[i]
//    }
//    return ans;
// }
// const strr="1,2,3,4,5";
// console.log(reverseStr(strr));


// //palindrome string
// function pallimdrome(str){
//    //let n=str.length
//    let anss="";
//    for(let i=0;i<str.length;i++){
//       anss+=str[str.length-i-1]

//    }
//    if(anss==str){
//      return true;
//    } else return false;
   
// }
// const str9="12"
// console.log(pallimdrome(str9));


// //find the numer of words in string 
// function countWordsOfstr(str){
//    let count="";
//    for(let i=0;i<str.length;i++){
//      count= str.trim().split(" ").length
//    }
//    return count;
// }
// const str00="hi my name is teju"
// console.log(countWordsOfstr(str00));

// const str33="hello, hi ,hey";
// words= str33.trim().split(" ").length
// console.log(words);

// //largest word of string
// function largestWord(str){
//    str=str.trim().split(" ");
//    result="";
//    for(let i=0;i<str.length;i++){
//       if(str[i].length>result.length){
//       result=str[i]
//    }
// }
//    return result;
// }
// const str000="Hey miss teju how are you feelling now"
// console.log(largestWord(str000));


// //function to find non repeting character

