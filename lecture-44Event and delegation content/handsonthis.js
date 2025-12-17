//event propagation , stoppropagation,stopImmetiatePropogation,this keyword,call,bind,-

const parent2=document.querySelector(".parent2");
parent2.addEventListener("click",(event)=>{
    console.log("target",event.target);
    console.log("currentTarget",event.currentTarget);
});

const grandpa=document.querySelector(".great-grand-Parent");
grandpa.addEventListener("click",(event)=>{
    console.log("target",event.target);
    console.log("currentTarget",event.currentTarget);
})



