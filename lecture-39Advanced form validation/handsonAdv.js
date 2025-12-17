const submitbtn=document.querySelector("button");
submitbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    
    const inputs={};
    inputs.password=document.querySelector("[type=password]").value
    inputs.allcheckbox=document.querySelector("[type=checkbox]:checked").value
    inputs.date=document.querySelector("[type=date]").value;
    inputs.time=document.querySelector("[type=time]").value;
    inputs.allradio=document.querySelector("[name=macq1]:checked")?.value
    inputs.select=document.querySelector("#city").value;
    console.log(inputs);


});


// const submitbtn = document.querySelector("button");

// submitbtn.addEventListener("click", (event) => {
//     event.preventDefault(); // prevent form submission

//     const inputs = {};
//     inputs.password = document.querySelector("[type=password]").value;
//     inputs.date = document.querySelector("[type=date]").value;
//     inputs.time = document.querySelector("[type=time]").value;

//     inputs.allcheckbox = Array.from(document.querySelectorAll("[type=checkbox]:checked"))
//                               .map(cb => cb.id);
//     inputs.allradio = Array.from(document.querySelectorAll("[type=radio]:checked"))
//                             .map(rb => rb.value);

//     inputs.select = document.querySelector("#city").value;

//     console.log(inputs);
// });
