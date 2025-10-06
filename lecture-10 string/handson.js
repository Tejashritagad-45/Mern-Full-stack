//homework
//use a spread operator in object 
const obj ={
    Name:"rose",
    color:"red",
    smell: "nice"
}

console.log(obj.Name);
console.log(...obj.Name,"mogra");
console.log(obj.color,"white")
console.log({...obj,Name1:"merigold"});

//convert the camelcase 
function camelCase(str0){
    str0.trim();
    ans="";
    for(let i=0;i<str0.length;i++){
        if(str0[i]==" "){
         ans+=str0[i+1].toUpperCase();
         i++;
        }else ans+=str0[i]
    }
    return ans;
}
function snakeCase(str){
    str[i]+=str[i].replaceAll(" ","");
}

let str0="student first name"
console.log(camelCase(str0));
console.log(snakeCase(str0));




//snakecase
function snakeCase (str){
    result ="";
    for(let i=0;i<str.length;i++){
        if(str[i]==" "){
       result+=("_");
        }else{
            result+=str[i];
        }
    }
    return result;
}
let str00 ="print natural sum";
console.log(snakeCase(str00));


//reverse a string 
function reverseString(str){
    //str.split();
    result="";
    for(let i=str.length-1;i>1;i--){
      result+=str[i];
      
    }
    return result;
}
let str22=" abcde ";
console.log(reverseString(str22));

//Approch 2
function revrseStr (str){
     reverse="";
    for(let i=0;i<str.length;i++){
      reverse+=str[str.length-i-1];
    
  }
  return reverse;
}
let str11="1 ,2,3,4,5,6";
console.log(revrseStr(str11));


//pallindrome string
function isPalindrome(str){
     let ans="";
    for(let i=0;i<str.length;i++){
       ans+=str[str.length-i-1] 
       //ans+=str[i];
       
    } 
       if(ans==str){
        return  true ;
       }else{
        return false;
       }
    }
let str33="rar";
console.log(isPalindrome(str33));


//second Approch
// function isPalindrome1(str){
//    let ans="";
//    for (let i=0;i<str.length;i++){
//     if(str[str.lengthMath.floor/2]){

//     }
//    }
// }


//find a no of words in string;
let str44=" hi I am teju ";
let ans1=str44.trim().split(" ").length;

//str44.split(" ");
console.log(ans1);
//str.split();
//function countWordsOfstr(str) {
//  count=""
//  for(let i=0;i<str.length;i++){
//     if(str[i]==str.length);
//     count++;
//  }
// }
// let str44="hi I am a teju";
// console.log(countWordsOfstr(str44));
function countWord(str){
   let count=0;
   let n=str.length;
   for(let i=0;i<n;i++){
    let digit=n%2;
    count++;
    n=Math.floor(n/2);
   }
   return count;
}

let strrr="Tejshree";
console.log(countWord(strrr));

function shuffleString(indices, s) {
  // Write your code here and print output in this function
  let ans=new Array(s.length);
  for(let i=0;i<s.length;i++){
    ans[indices[i]]=s[i];
  }
  return ans.join("");
}

const str="acciojob";
const indices=[4,5,6,7,0,2,1,3];
console.log(shuffleString(str,indices));