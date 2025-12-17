class Employe{
  constructor({name,EmployeId,sallery,gender,joiningDate}){
    this.name=name;
    this.EmployeId=EmployeId;
    this.sallery=sallery;
    this.gender=gender;
    this.joiningDate=joiningDate;

  }
   checkIN(time){
      this.checkInTime=time.toLocaleTimeString();
   }

   checkOut(time){
     this.checkOutTime=time.toLocaleTimeString();

   }
   totalTimeToday(){
    if(!this.checkInTime||this.checkOutTime){
        console.log("check in or Check out missing");
        return;
    }
    return this.checkOutTime-this.checkInTime;
   }
  
}
const employee=new Employe({
    name:"Raj",
    EmployeId:"EMP-1223",
    sallery:30000,
    gender:"male",
    joiningDate:1-2-2004
});

console.log({employee});
  document
  .querySelector("button:first-of-type")
  .addEventListener("click",()=>{
    employee.checkIN(new Date());
  });
  document
  .querySelector("button:nth-of-type(2)")
  .addEventListener("click",()=>{
    employee.checkOut(new Date());
    console.log(
        `check in:${employee.checkInTime}\nCheckout:${employee.checkOutTime}`
    );
  });


  class Manager extends Employe{
    constructor({employeeDetails,subordinates}){
        super(employeeDetails);
        this.subordinates=subordinates
    }
    

  }

  const employeeDetails={
     name:"Raj",
    EmployeId:"EMP-1223",
    sallery:30000,
    gender:"male",
    joiningDate:1-2-2004
  };

  const manager=new Manager({employeeDetails,subordinates:["e1","e2"]});
  console.log(manager);
  document
  .querySelector("button:nth-of-type(3)")
  .addEventListener("click",()=>{
    manager.checkIN(new Date());
  });

  document
  .querySelector("button:nth-of-type(4)")
  .addEventListener("click",()=>{
    manager.checkOut(new Date());
    console.log(
        `Check in:${manager.checkInTime}\nCheck out:${manager.checkOutTime}`
    );
  });


//   create an Animal class, and then create  a Dog class and Cat class, inherit the property from Animal for both Dog and CAt class

  class Animal{
    constructor({name,age,color,sound}){
        this.name=name;
        this.age=age;
        this.color=color;
        this.sound=sound;
    }
    
}
  class Cat extends Animal{
    constructor({catDetails}){
        super(catDetails);
        this.speak=speak;
        

    }
    speak(){
        console.log("meow meow")
    }
    
  }

  const catDetails={
     name:"money",
    age:20,
    color:"black"

  }
  

const cat=new Cat({catDetails,});
console.log(cat);


class Dog extends Animal{
    constructor({DogDetails}){
        super(DogDetails);
    }
}

const DogDetails={
    name:"toggy",
    age:"15",
    color:"white",
}

const dog=new Dog({DogDetails});
console.log(dog);


// first instance find in a parent ke prototype mai if their is a not present then find a parent mai
// first child class parent prototype and then parent.


// super
// whenever child class called parent 
// first called a parent constructur
// then that parent constructor set all the properties have fill up the super 
// when parent is constucting property  then this actually constructing child this.

// for parent
// first set or initialise the all property into the child this.
// and then put them in a child this


// Encapsulation 
// is use to protect a sensietive data 
// we do the data private
// like password or bank Ac pin


// Inheritance
/*cat is a animal 
 dog is animal 
  when is a relation then we use a inheritance
  point a is a 
*/

// Polymorphisam

/*
poly is a many
morphism is a form
 a method that is existing in a many forms.
 diffrent classes can implment methods with same name*/

//  abstraction
 /*
 only showing what is necesary
 hiding the implimentation
 */

//  composition
/*
 when a we found a relation ship has a then we use a compostion 
 like profile has a setting
 and profile has a Ac
 we just combine two classes rather than inheritance;
 */



 