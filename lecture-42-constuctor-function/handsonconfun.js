const books={
    title:"abc",
    price:330,
    booksInfo:function(){
        console.log(`${this.title} is a name of book and price is${this.price}`);
    },

};
books.booksInfo();


function books1(title,price){
    this.title=title;
    this.price=price;
    this.bookInfo=function(){
        console.log(`${this.title} is a title of book and price is a ${this.price} `)

    }

}
const bookdetails=new books1("BCA",130);
bookdetails.bookInfo();




console.log("==========================================")
const user1={
    name:"teju",
    age:23,
    city:"puna",
    printDetails:function(){
        console.log(
            `${this.name} s age is ${this.age} she living in ${this.city}`

        );
    },
};

   user1.printDetails();


   const user2={
    name:"rutu",
    age:24,
    city:"puna",
    printDetails:function(){
        console.log(
            `${this.name} s age is ${this.age} she living in ${this.city}`

        );
    },
};

   user2.printDetails();


   const user3={
    name:"rani",
    age:25,
    city:"puna",
    printDetails:function(){
        console.log(
            `${this.name} s age is ${this.age} she living in ${this.city}`

        );
    },
};

   user3.printDetails();




   //constructor
   /*
   constructor is use to avoid a repetative work when we use a constructor then we do the code very easyily
   we crete a user again and agian this is a very 
   lengthy process and we do the more mistakes 
   thats why we use blueprint of (constuctor) 
   it will make our work easily*/

   function User(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
   this.printDetails=function(){
        console.log(
            `${this.name} s age is ${this.age} she living in ${this.city}`)

   }
};
   const details=new User("neha",25,"mumbai");
   const details1=new User("teju",23,"puna");
   details.printDetails();
   details1.printDetails();




   //creating an array of object using a constructor
   const name=["riya","piya","siya","diya"];
   const age=[12,23,21,24];
   const city=["puna","baner","delhi","beed"];

   const objArray=[];


   function det(name,age,city){//this is not necesary
    this.name=name;
    this.age=age;
    this.city=city;
   }
   for(let i=0;i<name.length;i++){
    objArray.push(new User(name[i],age[i],city[i]));
   }
   console.log(objArray);

 
// for(let i=0;i<name.length;i++){
//     objArray.push(new User(name[i],age[i],city[i]));
// }
// console.log(objArray);


//Insatance
//instance is a copy of an object created from class or constuctor;
//jo object class ani constructor pasun create jhalaahe tyachi copy ahe instance

function user(name,age){
    this.name=name;
    this.age=age;
}
const u1=new user("teju",23)
console.log(u1 instanceof user);

//to check a instance the property is instanceofand these property gives a boolean value.


function Product(name,price,qty){
    this.name=name;
    this.price=price;
    this.qty=qty;
    this.total=price*qty;
}
const product1=new Product("bottle",25,4)
const product2=new Product("tiffin",150,6);
console.log({product1,product2});
console.log(product1 instanceof Product)


//prototype
const boolean=true;
const string="teju";
const number=23343;
const arr=[2,4,6,7];

console.log(boolean.__proto__);
console.log(string.__proto_);
console.log(number.__proto__);
console.log(arr.__proto__);

function Student(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
}
Student.prototype.printDetails=function(){
    console.log( "hi " + this.age);

};
const student1=new Student("raj",23,"A");
student1.printDetails(student1.age);











   


