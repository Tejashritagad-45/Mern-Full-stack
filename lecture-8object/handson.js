Name="teju";
age =21;
Address="puna";
standard=15;
//creation of an object 
const studentObj={
Name:"teju",
age:21,
Address:"puna",
standard:15
}
console.log(Name);
console.log(studentObj);

//Acessing pro[erties of an object
console.log("student Name:",studentObj.Name);
console.log("student age:",studentObj.age);
console.log("student Address:",studentObj.Address);
console.log("student standard:",studentObj.standard);

//aise bhi access kar sakte hai
console.log("student Name:",studentObj["Name"]);

//or ik tarika hai
const studentNameProperty ="Name";
console.log("student Name:", studentObj[studentNameProperty]);

//updating the value of an object
studentObj.Name="Rutu";
console.log("studentName:",studentObj.Name);

console.log(studentObj);

//adding a property in an object;


console.log("adding or deleting a property in object");
studentObj.phoneNumber=7498164068;
studentObj.rollNumber=1;
console.log(studentObj);

//deleting a property from an object ;
  delete studentObj.standard;
 console.log(studentObj);


 //crete a person object with name and  city and age property 

 Name="Raj";
 age =18;
 city="pune"

 PersonObj={
  Name:"Raj",
  age:18,
  city:"pune",
 }
//  console.log(Name);
// console.log(PersonObj);
  
//adding 
PersonObj.hobby="singing";
console.log(PersonObj);
//updation
PersonObj.city="Nagpur";
console.log(PersonObj);

//printing
console.log(age);

if(PersonObj && PersonObj.Address && PersonObj.Address.firstline)//jo (.)ke pahale likha hai vo undefined nahi hot hai
console.log(PersonObj.Address.firstline)                          //(.)pahale wale pai check lagata hai.

//Nested object
console.log("=================================================================")
const OwnerOfCompanyObj={
  Name:"teju",
  Company:"TATA",
  salary : '20lpa',
  Address:  {
          Addressfirstline:"Surymukhi chauk",
          AddressSecondline:"Mhalunge",
          houseNumber:303,
         city:"puna",
    }
  }
console.log("Owner of company is",OwnerOfCompanyObj.Name,"and city is",OwnerOfCompanyObj.Address.city);
console.log("the company is",OwnerOfCompanyObj.Company,"and package is a ",OwnerOfCompanyObj.salary);
console.log("he live in ",OwnerOfCompanyObj.Address.AddressSecondline,OwnerOfCompanyObj.Address.Addressfirstline,
  "in the city",OwnerOfCompanyObj.Address.city);


  //Array of Object

  const ActerObjArr=[  //value bhi de sakte hai
    ActerObj ={
    Name: "siddharth Mhalotra",
    age:35,
    passion:" Acting",
     }
  ];
  console.log(ActerObjArr);


  //using a loops
 console.log("*using a for loop*");

  for(let i in ActerObj){
    console.log(i,":",ActerObj[i]);
  }


  //Example
  console.log("Example");
  SingerObj={
    Name:"Darshan Raval",
    passion:"singing",
    city:"Mumbai",
}
for(let i  in SingerObj){
  console.log(i,":",SingerObj[i]);
}

console.log(Object.keys(SingerObj));    //aise bhi ham print kar sakte hai but vo array ke form mai hoga
console.log(Object.values(SingerObj));
//console.log("finding Name:",keys.includes("Name"));  

console.log("===== using object keys method to get the array of keys using for loop===");
for(let i  of Object.keys(SingerObj)){
console.log(i,":",SingerObj[i])} 


console.log("information of student who live in puna")
const ClassRomm=[
          student1={
           Name:"teju",
          age:21,
          gender:"female",
          grade:"A",
          Address:{
          Addressfirstline:"sk chauk",
          AddressSecondline:"kada",
          city:"puna",
          houseNo:300,
      },
    },
          student2={
          Name:"Rutu",
          age:21,
          gender:"female",
          grade:"A",
          Address:{
          Addressfirstline:"Mg chauk",
          AddressSecondline:"Baner",
          city:"Delhi",
          houseNo:302,
          },
        },

          student3={
          Name:"siya",
          age:22,
          gender:"female",
          grade:"B",
          Address:{
          Addressfirstline:"sk chauk",
          AddressSecondline:"kharadi",
          city:"puna",
          houseNo:301,
          },
        },

       student4={
          Name:"riya",
          age:24,
          gender:"female",
          grade:"C",
          Address:{
          Addressfirstline:"sk chauk",
          AddressSecondline:"Wagholi",
          city:"Mumbai",
          houseNo:303,
          }
        },
      ];

    for(let i of ClassRomm){
      //i means a object.
      if( i && i.Address && i.Address.city==="puna"){
        console.log("Name:",i.Name,"age:",i.age,"houseNo:",i.Address.houseNo);
  }
}


//function inside a object 
console.log("function")
const carObj={
  Name:"Thar",
  color:"Black",
  milage: 10,
  Currentspeed:0,
  running:function running(){
    console.log("the car is running","and the currrentspeed of car is",this.Currentspeed);

  }
}
 carObj. running();



 const bookObj={
    Name:"Man mai hai vishwas",
    writer:"vishwas nangre patil",
    Pice:"100",
    language:"Marathi",
    reading:function reading (){
      console.log("I have read the one book name is:",this.Name);
    }
  }
  bookObj.reading();

  //portFolio
 const obj ={
  Name:"Piyush",
  skill:""
 }