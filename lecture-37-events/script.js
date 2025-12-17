// const para1=document.querySelector("p");
// para1.addEventListener("click",(event)=>{
//      paraclicked(Event);

// });
// function paraclicked(event){
//     h3Element1.remove();
//     console.log("You've clicked a para",event.type);
// }

// h3Element.addEventListener("mouseover",(event)=>{
//     h3Elementcolor(event);

//  });
//  function h3Elementcolor(event){
//  h3Element.style.backgroundColor="yellow";
//  console.log("background color",event.type);
//  }




const fdiv=document.querySelector(".outerdiv");
fdiv.addEventListener("click",(event)=>{
    fdiv.style.backgroundColor="red"
    // click(event);
    console.log("fdiv click");

})

const sdiv=document.querySelector(".innerdiv");
fdiv.addEventListener("click",(event)=>{
    sdiv.style.backgroundColor="yellow"
    // click(event);
     console.log("sdiv click");
   
})

const h1f=document.querySelector("h1");
fdiv.addEventListener("click",(event)=>{
    h1f.style.backgroundColor="blue"
    // click(event);
     console.log("h1f click");
   
});


const fdiv1=document.querySelector(".outerdiv");
fdiv1.addEventListener("mouseup",(event)=>{
    fdiv1.style.backgroundColor="green"
    mouseup(event);
})


//capturing phase:parent to child;
//bubling phase:child to parent;
//At-target:at the target





