       console.log(window.document.body)
        console.log(document.body)

        //Note down the diiffrence between these two
        console.log(document.body.childNodes)
        console.log(document.body.children)

         //Note down the diiffrence between these two
        console.log(document.body.firstChild)
        console.log(document.body.firstElementChild)


         //Note down the diiffrence between these two
        console.log(document.querySelector("div"))
        console.log(document.querySelectorAll("div"));
        console.log(document.querySelector(".first-div-child"));
        console.log(document.querySelectorAll("#second-div"));
        console.log(document.querySelector("div.first-div"));
        console.log(document.querySelector("div#second-div"));


        // other spacefic selectors
        //select an element base class
        console.log(document.getElementsByClassName("first-div-child"));
         console.log(document.getElementById("second-div"));
          console.log(document.getElementsByTagName("first-div-child"));

        //  select  an element based on tag name
        console.log(document.getElementsByTagName("div"));

         const para=document.querySelector("p");

          console.log(para);
          para.style.color="blue";
          para.style.backgroundColor="yellow";

        // setting,editing and deleting an attribute
          const imageElement=document.querySelector("img");

        //updating the value of existing attribute
          imageElement.setAttribute("src","image1.png");
          imageElement.style.width="300px";
          imageElement.style.width="300px";
          imageElement.style.border="3px solid black";
          imageElement.style.borderRadius="150px";


         //creating a new attribute
          const divElement=document.querySelector("div");
          divElement.setAttribute("data-first","first name");


        // deleting an attribute by setting its value to null
        // imageElement.setAttribute("")





     //accessing and updating 
        console.log(para.innerHTML);

       para.innerHTML="<strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quia mollitia, ratione molestias commodi harum veniam fuga  non vero nisi sit eum, adipisci dolores at, aliquid laudantium quaerat </strong>";

       const secondpara=document.querySelector(".secondpara")
       secondpara.textContent="This is a new content"




       const sectionElement=document.querySelector(".class1");
    //    console.log(sectionElement.className);
       const classes=sectionElement.className.split("");
       classes.splice(2,1);
       sectionElement.className=classes.join("");


        // console.log(sectionElement.className);


        const sectionElementCopy=document.querySelector(".class1")
        // console.log(sectionElement);
        console.log(sectionElement.classList);
        

        
    
        // diffrence betwwen innerhtml and textcontent
        //write a diffrence between classlist and className.
        
