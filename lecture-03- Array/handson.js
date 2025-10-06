

//prefix sum 
//sum of all elements from index =0;to index =i
//prefix=[3,5,1,,4,5,8]//n
//output=[3,8,9,13,18,26];
const arr=[3,5,1,4,5,8]
const pref=[];
pref[0]=arr[0];
for (let i=1;i<arr.length;i++){
    //n=arr.length
    //pref[i]=pref[i-1]+arr[i];
        pref[i]=pref[i-1]+arr[i];

    
}
console.log(pref);
//Tc=O(N);
//Sc=

let positiveCount=0,negativeCount=0,zero=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        positiveCount++;

    }
    else if (arr[i]<0){
        negativeCount++
    }
    else{
        zero++
    }
}
console.log((positiveCount/arr.length).toFixed(6));
console.log((negativeCount/arr.length).toFixed(6));
console.log((zero/arr.length).toFixed(6));


const num =23
console.log(num.toFixed(3)+12);

let val="35";
let val2="abc"
console.log(val+45);
console.log(val*2);

console.log(val2*2);
console.log(val2+4);

console.log(val2*67);



