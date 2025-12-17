const addbtn=document.querySelector(".add-btn");
const todoitemsection=document.querySelector(".todo-items")
addbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const todoElement=document.querySelector("#todo");
    const todoitem=document.createElement("div");
    todoitem.className="todo-item";


    todoitem.innerHTML=`<p>
                         ${todoElement.value}
                        </p>
        <div class="todo-btn">
            <button class="edit-btn">Edit</button>
            <button class=delet-btn>Delete</button>
        </div>`
     todoitemsection.appendChild(todoitem);
     const deletbtn=todoitem.querySelector(".delet-btn");
     deletbtn.onclick=()=>todoitem.remove();

     const editbtn=todoitem.querySelector(".edit-btn");
     editbtn.addEventListener("click",(event)=>{
       if(editbtn.textContent==="Save"){

       }else{
        editbtn.textContent = "Save";
        const pElement=todoitem.querySelector("p");
        pElement.style.display="none";

        const newElement=document.createElement("input");
        newElement.value=pElement.textContent.trim();

        const todobtns=todoitem.querySelector(".todo-btn");
        todoitem.insertBefore(newElement,todobtns);


       }
     });

    todoElement.value="";
    
});
