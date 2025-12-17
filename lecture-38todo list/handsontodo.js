const addbtn=document.querySelector(".add-btn");
// const sectionElement=document.querySelector(".items");

addbtn.addEventListener("click",(event)=>{
    event.preventDefault(); 
    // for input box
 const input=document.querySelector("#todo")
 //acess the section element
 const sectionElement=document.querySelector(".items");
 //crate a new element in a section
 const newElement=document.createElement("div");
//  give a class to new elemnt
 newElement.className="items-section";
//  add content in new element
 newElement.innerHTML=`<p>
                             ${input.value}
                          </p>
            <div class="todo-btn">
              <button class="edit-btn">Edit</button>
              <button class=delet-btn>Delete</button>
           </div>`
                          

//  append child
 sectionElement.appendChild(newElement);
//  acess the deletebtn
const delettbtn=newElement.querySelector(".delet-btn");
delettbtn.onclick=()=>newElement.remove();

 input.value="";
 
    // console.log(input);
});