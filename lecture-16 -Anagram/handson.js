function  isAnagram(str1,str2){
    if(str1.length!=str2.length) return false;
    let map=new Map();
    for(let i=0;i<str1.length;i++){
       map.set(str1[i],(map.get(str1[i])||0)+1);
     
    }
    
    for(let i=0;i<str2.length;i++){
        map.set(str2[i],(map.get(str2[i])||0)-1);
    
}
for(let value of map.values){
    if(value!=0){
        return false;
    }
    return true;
}
}
let words=[cat,tac,tea,pet,act,eat];
let inputs=[cat,tca,eee,tea];
function allAnagarm(words,inputs){
  for(let i=0;i<inputs.length;i++){
    let anagram="";
    for(let j=0;j<words.length;j++){
        if(isAnagram(inputs[i],words[j])){
         anagram+=words[j]+" ";
        }
    }
    if(!anagarm.length){
        console.log(-1);
    }else{
        console.log(anagram);
    }
  }
}
allAnagarm(words,inputs);