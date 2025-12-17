// checking a is valid parentsid is valid parenthsis 
function isValidParenthesis(str){

    let n=str.length;
    if(n%2)return false;
    let open=0;
    for(let i=0;i<n;i++){
        if(str[i]==="(")open++;
        else{
            if(open>0)open--;
            else return false;
        }
    }
    if (open!=0)return false;
    return true;
}
console.log("((()))()))",isValidParenthesis("((()))()))"));

function isValidParenthesis(str){
    let open=0;
    let n=str.length;
    if(n%2) return false;
    
    for(let i=0;i<str.length;i++){
        if(str[i]=="(") open++;
         else{
            if(open>0)open--;
            else return false;
         }
        }
        if(open !=0) return false;
    
        return true;
    }

console.log("((()))(",isValidParenthesis("((()))("));
console.log("((()))",isValidParenthesis("((()))"));
console.log("()()()(())",isValidParenthesis("()()()(())"));



//generate a parenthises
let allValidParenthesis =[];
function generateValidParenthesis (n,str="", ind=0,open=0,close=0){
   
        if(open<close){
            return ;
        }
        if(ind==n){
            if(open==close){
                allValidParenthesis.push(str)
            }
            return;
        }

            
        
 generateValidParenthesis(n,str="(",ind=1,open=1,close);
 generateValidParenthesis(n,str=")",ind=1,open,close=1);
}
generateValidParenthesis(6);
console.log({allValidParenthesis});
//Tc =O(2^N)
//sc=O(N);


//string permutation
// function swapstr(str,i,j){
//     let str=

// }
// let strPermutations=[];
// function permutation(str,ind=0){
//     strPermutations.push(str);
//     return ;

// }



