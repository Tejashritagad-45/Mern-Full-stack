
function  isAnagram(s1,s2){
    if(s1.length !=s2.length) return false;
    let freqObj={} ;
 for(let i=0;i<s1.length;i++){
    freqObj[s1[i]]=(freqObj[s1[i]]||0)+1;
}
 for(let i=0;i<s2.length;i++){
      if(!freqObj[s1[i]]) return false;
      freqObj[s2[i]]=(freqObj[s2[i]] ||0 )-1;
 }

for(let value of Object.values(freqObj)){
     if (value ) return  false ;
 }
   return true;
}
let words =" cat, tea ,pet ,tac ,act , eat ";
let input ="cat, tca ,eee ,tea";
   function countAnagram (words,input){
   for(let i=0;i<input.length;i++){
     let Anagram ="";
     for(let j=0;j<words.length;j++){
       if(isAnagram (input[i],words[j])){
        Anagram+=words[j]+" ";
        
       } 
     }  
     if (!Anagram){
        console.log(-1); 
        //console.log(Anagram);
    
    }else{
        console.log(Anagram)
    }

    }
}
countAnagram(words,input);
    
    


//console.log(isAnagram(s1,s2));




// 6
// cat tea pet tac act eat
// 4
// cat
// tca
// eee
// tea
// output

// act cat tac
// act cat tac
// -1

