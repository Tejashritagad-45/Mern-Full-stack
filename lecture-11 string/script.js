function camelCase(str){
    let ans="";
    for(let i=0;i<str.length;i++){
       if(str[i]===" "){
        ans+=str[i+1].toUpperCase();
        i++
    }else{
        ans+=str[i];
    }
}
    return ans;
}
const str="student first name"
console.log(camelCase(str));


function  snakeCase(str){
let result="";
for(i=0;i<str.length;i++){
    if(str[i]==="_"){
        result+=str[i+1].toUpperCase();
        i++;
    }else{
        result+=str[i];
    }
}
  return result;
}
const str1="insertion_sort"
console.log(snakeCase(str1));


function camelCase(str){
    let ans1="";
    str.trim();
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
         ans1+=str[i+1].toUpperCase();
         i++;

        }else{
            ans1+=str[i];
        }
    }
        ans1=ans1.replaceAll(" ","");
        return ans1;
    }
    function snakeCase(str){
       return str.trim().replaceAll(" ",' _');
    }
    const str2="student name"
    console.log(camelCase(str2));
    console.log(snakeCase(str2))