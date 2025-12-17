// overriding
// override means we child take replace his parent value or property with is new version;
// means method is same but chage the value 

// why we use override
/*
when we want diffrent parent and diifrent child
when we want modify or change the functionality of parent*/


// types of inheritance

// single Inheritance
//  one parent one child
class parent{
    show(){
        console.log("hii")
    }
}

class child extends parent{

}


// multilevel 
// A->B->C
class A{
    print(){

    }
}

class A extends B{

}

class B extends C{

}

// hierarchiacal
// one parent multiple child
class parent1{
    save(){

    }
}

class child1 extends parent1{

}


class child2 extends parent2{

}


// instace is object created from class
// singleton  class allow create a  only one object (instance)



class Employe{
    constructor({name,Employed,sallery,gender}){
        this.name=name;
        this.sallery=sallery;
        this.gender=gender;
        this.Employed=Employed
    }
    
     checkIn(){

     }

     checkout(){

     }

}

class manager extends Employe{
    constructor({catDetails}){
        super(catDetails);

    }
}

const catDetails={
    name:"money",
    age:20,
    color:"black"

}

const cat =new manah