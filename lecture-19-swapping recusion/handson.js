// let arr=[4,1,3,7,5]
//selection sort 
function minimumIndex(arr,n){
for(let i=0;i<n-1;i++){
    let minIndex=i;
    for(let j=i+1;j<n;j++){
      if(arr[j]<arr[minIndex]){
            minIndex=j

    }
  }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
   return arr;
}
let arr=[4,1,3,7,5,-4]
console.log(minimumIndex(arr,arr.length));


function maximumIndex(arr,n){
  for(let i=0;i<n-1;i++){
    let maxIndex=i;
    for(let j=i+1;j<n;j++){
      if(arr[j]>arr[maxIndex])

      maxIndex=j;
    }
    let temp=arr[i];
     arr[i]=arr[maxIndex];
      arr[maxIndex]=temp;
    
  }
  return arr;
}
let arr1=[7,9,6,8,9,5,-6];
console.log(maximumIndex(arr1,arr1.length));



//bublle sort
function sortElement(arr,n){
for(let i=0;i<n;i++){
 for(let j=0;j<n-i;j++){
   if(arr[j]>arr[j+1]){
    let temp= arr[j]
     arr[j]=arr[j+1]
      arr[j+1]=temp

    }
  }
}
return arr;
}
const arr11=[10,1,7,6,4,9]
console.log(sortElement(arr11,arr11.length));

//
function isValidParenthsis(str){
let n=str.length;
if(n%2) return false;
let open=0
for(let i=0;i<n;i++){
  if(str[i]=="(")open++
  else{
    if(open>0)open--;
    else return  false;
  }
}
if(open!=0)return fasle;
   return true;
}

console.log("()()()()(()))",isValidParenthsis("()(()()()()()()()"));
console.log("(((())))",isValidParenthsis("(((())))"))

//generate  a parenthrsis
 let allValidParenthsis=[];
function generatParenthsis(n,str="",ind=0,open=0,close=0){
  if(open<close){
    return ;

  }
  if(ind==n){
    if(open==close){
    allValidParenthsis.push(str);
    }
    return ;
  }
  generatParenthsis(n,str+"(",ind+1,open+1,close);
  generatParenthsis(n,str+")",ind+1,open,close+1);

}
generatParenthsis(6);
console.log({allValidParenthsis});


//generate parenthesis
// let allValidParenthsis1=[];
// function generatParenthsis2(n,str="",ind=0,open=0,close=0){
//   if(open<close){
//     return ;

//   }
//   if(ind==n){
//     if(open==close){
//     allValidParenthsis1.push(str);
//     }
//     return ;
//   }
//   generatParenthsis2(n,str+"(",ind+1,open+1,close);
//   generatParenthsis2(n,str+")",ind+1,open,close+1);

// }
// generatParenthsis2(9);
// console.log({allValidParenthsis1});


//string permutation
function swapStr(str,i,j){

let arr=str.split("");

[arr[i],arr[j]]=[arr[j],arr[i]];

   return arr.join("");


}
let strPermutation=[]
function permutation(str,ind=0){
  if(ind===str.length-1){
    strPermutation.push(str);
    return ;
  }
  for(let i=ind;i<str.length;i++){
    let swappedStr=swapStr(str,ind,i);
    permutation(swappedStr,ind+1);
  }
}
permutation("abc");
console.log({strPermutation});