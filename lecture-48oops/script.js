// class Vehicle{
//     constructor({name,model,speed}){
//         this.name=name;
//         this.model=model;
//         this.speed=speed;

//     }
// }

// class car extends Vehicle{
//     constructor({carDetails}){
//         super(carDetails);
//     }

// }










// class Vehicle{
//     start(){
//         console.log("car is starting");
//     }
// }

// class Car extends Vehicle{
//     start(){
        


//     }
// }



class Employee{
    constructor(yearsOfExp){
        this.yearsOfExp=yearsOfExp;
       
    }
     salary(){
            return 500*this.yearsOfExp
        }
}

 class SalesEmplyee extends Employee {
    constructor(yearsOfExp){
        super(yearsOfExp)

        
    }
    salary(){
        return 300*this.yearsOfExp;
    }

 }


 class LeadEmployee extends Employee{
    constructor(yearsOfExp){
        super(yearsOfExp)
    }
    salary(){
        return 100*this.yearsOfExp;
    }
 }

 const emp=new Employee(2).salary();
 console.log("salery of employee",emp)


 const saleEmp=new SalesEmplyee(2).salary();
 console.log("salery of employee",saleEmp);


 const leadEmp=new LeadEmployee(2).salary();
 console.log("salery of employee",leadEmp);






 class Interest{
    constructor(p,r,t,n){
        this.p=p
         this.r=r
          this.t=t
           this.n=n

    }
    interst(){
        return this.p+this.r*this.t
    }
 }


 class simpmeIn extends Interest{
       constructor(p,r,t,n){
        super(p,r,t,n)
       }

       interst(){
        return  this.p*this.r*this.t/100
       }
 }
  

 class compoundIn extends Interest{
    constructor(p,r,t,n){
        super(p,r,t,n)
    }

       interst(){
        return this.p*(1+this.r/this.n)**(this.n*this.t);
    }
 }

 const interest=new Interest(5,2,3,4).interst();
 console.log(interest);

 const simple=new simpmeIn(4,6,8,3).interst();
 console.log(simple);

 const compound =new compoundIn(2,5,6,4).interst();
 console.log(compound);



//  homework
//  singleton classlist






class Student{
    constructor(marks){
        this._marks=marks;
    }


#calculateMarks(){
    const totalSubjects=Object.keys(this._marks).length;
    let totalMarks=0;
    
    for(let marks in this._marks){
        totalMarks+=this._marks[marks];
    }

    return totalMarks/totalSubjects;
}

get marks(){
return this.#calculateMarks();

 }
}

const marks={
     math:90,
     science:80,
     english:100,
};
const rahul=new Student(marks);
console.log(rahul.marks);




class Persondetails{
    constructor({name,age,dob}){
        this.name=name;
        this.age=age;
        this.dob=dob;
    }

    print(){
        console.log(this.name,this.age,this.dob);
        
    }
}

class EducationDetails{
    constructor(college,gradyear,cgpa){
        this.college=college;
        this.gradyear=gradyear;
        this.cgpa=cgpa;

    }

    print(){
        console.log(this.college,this.gradyear,this.cgpa);
        
    }
}

const persondetails={
    name:"teja",
    age:21,
    dob:"11dec2025"


}


const educationDetails={
    college:"AIT",
    gradyear:2025,
    cgpa:7.60,
}

class Person{
    constructor(adharNumber,persondetails,educationDetails){
        this.adharNumber=adharNumber;
        this.Persondetails=new Persondetails(persondetails);
        this.EducationDetails= new EducationDetails(educationDetails);
        
    }


print(){
    console.log(this.adharNumber);
    console.log("persoDetails",JSON.stringify(this.persondetails));
    console.log("EducatonDetails",this.educationDetails.print());
    }
}

new Person(112213,persondetails,educationDetails).print();

// localstorage formsvalidation JSON or closeur