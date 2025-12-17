const users =[];
    const submitBtn=document.querySelector("button");
    submitBtn.addEventListener("click",(event)=>{
        event.preventDefault();
        const user={};
            user.name=document.querySelector("input[type=text]").Value;
            user.name=document.querySelector('input[type="number"]').Value;
            user.gender=document.querySelector("input[type=gender]:checked")?.Value;
            user.consent=document.querySelector("input[type=checkbox]:checked")?.Value;
            // user.consent=document.querySelector("input[type=checkbox]:checked")?.Value;

        
        
        
       users.push(user); 
    });
