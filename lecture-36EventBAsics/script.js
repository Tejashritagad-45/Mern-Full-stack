
const h3Element=document.createElement("h3");
h3Element.textContent="Hi,I'm a H3 element";

const div1=document.querySelector("div");
div1.appendChild(h3Element);


const h3Element1=document.querySelector("h3");
//Events in dom

const para1=document.querySelector("p");
para1.addEventListener("click",(event)=>{
     paraclicked(Event);

});
function paraclicked(event){
    h3Element1.remove();
    console.log("You've clicked a para",event.type);
}


 h3Element.addEventListener("mouseover",(event)=>{
    h3Elementcolor(event);

 });
 function h3Elementcolor(event){
 h3Element.style.backgroundColor="yellow";
 console.log("background color",event.type);
 }


 h3Element.addEventListener("mouseup",(event)=>{
    mouseupEvent(event);

 });
 function mouseupEvent(event){
 h3Element.style.backgroundColor="green";
 console.log("background color",event.type);
 }


h3Element.addEventListener("mousedown",(event)=>{
      mousedownEvent(event);

 });
 function mousedownEvent(event){
 h3Element.style.backgroundColor="blue";
 console.log("background color",event.type);
 }


//  h3Element.addEventListener("keyup",(event)=>{
//       keyupEvent(event);

//  });
//  function keyupEvent(event){
//  h3Element.style.backgroundColor="red";
//  console.log("background color",event.type);
//  }

document.addEventListener("keydown",(event)=>{
      keydownEvent(event);

 });
 function keydownEvent(event){
 h3Element.style.backgroundColor="purple";
 console.log("background color",event.key);
 }


 h3Element.addEventListener("mouseup",(event)=>{
      mouseupEvent1(event);

 });
 function mouseupEvent1(event){
 h3Element.style.fontSize="20px";
 console.log("fontSize",event.type);
 }
 

//mouseover
//mouseup
//mousedown
//
//keyup