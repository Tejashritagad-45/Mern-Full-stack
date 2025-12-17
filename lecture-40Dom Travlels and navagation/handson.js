let min=Infinity;
let max=-Infinity;

for(let i=0;i<100;i++){
    let num=Math.floor(Math.random()*100000);
     console.log(num);
     if(num<min){
        min=num
     }else if(num>max){
        max=min;
     }

}
console.log(min);
console.log(max);


console.log(100000+Math.random()*90000);
