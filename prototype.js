// prototype is object avaialble in functions, and used  constructor functions
// and it is used in inheritance


    // How this is the constructor function 
    // F is upper case 

function Foo(y){
    this.y=y;

}

Foo.prototype.x=10;
// Constructor function 
// we can create as many object 
// prototype is given by Java script  , avlb in function 
Foo.prototype.calculate = function(z){
    return this.x+this.y+z
};
// we are creating two attributed to the prototype object 
// creating two keys in prototype 
var a =new Foo(5) // proto of a point to prototype of constructor function 
// proto of a points to prototype of Foo 
console.log(a);
var c = new Foo(10);
// proto of c points to prototype of FOO 
// 1 prototype per constructor is allowed 
// adding dynamic properties for the constructor function 

// prototype - is an object inside the constructor function 
// we can access using . operator 
// dyncamically create oject
// .x for eg is created dynamically 

// what is the use of the prototype 
// object is able to inhert the properties 
// Dynamically create the key inside the object 

// How the proto is available to the object created 
// proto is the key to point to another object 
// __proto_:c 
// Here __proto:prototype object 
// proto of created instance points to the prototype of the constructor function or parent function 




// How do you access the properties of object 

// prototype is object available inside the constructor object 

var a={}
console.log(a)
// {}
a.x=10
console.log(a)
//{x:10}
console.log(a.x)
//10 
console.log(a.z)
// Undefined 
// Dynamically created the key in the object is possible 


// Prototype 
// function Dog(name,breed){
//     this.name =name;
//     this.breed=breed;
// }
// Dog.prototype.barks=function(){
//     console.log("Woof woof");
// }
// var d1=new Dog("Bully","BullDog");
// console.log(d1.name);
// // Output : Bully
// console.log(d1.barks());
// // Output : Woof Woof 

// var d2 = new Dog("Bully 1 ","BullDog1 ")
// console.log(d2.name);
// // Output : Bully1
// console.log(d1.barks());
// // Output : Woof Woof 

// // Function inside the DOg itself 
// function Dog1(name,breed){
// this.name =name;
// this.breed = breed;
// this.barks=function(){
//     console.log("Barking inside the function ")
// }
// }
// var d1 =new Dog1("bully 2","bull dog2");
// d1.barks();
// // Output - Barking inside the function
// var d2 =new Dog1("bully 2","bull dog2");
// d2.barks();

// d1.barks = function(){
//     console.log("Bow bow")
// }
// d1.barks();
// d2.barks();
// //Bow bow
// //Barking inside the function
// // both d1 and d2 are having copy of the function 

// Dog1.prototype.run=function (){
//     console.log("dun dun");
// }
// d1.run();
// d2.run();
// output 
// dun dun 
// dun dun 
// d1 and d2 all have same prototype run 
// d2.__proto_.run=function(){
//      console.log("dun1 dun1")
//  }
// d2.__proto_.run()
// d1.run()

// 05.10.2024 
//_1

function Dog(name ,breed){
    this.name=name;
    this.breed =breed;
    this.barks=function(){
        console.log("Woof woof")
    }
}

var d1 = new Dog("milo","GS")
d1.barks();
// output  - Woof woof 
// it takes the function inside the Dog object 

var d2 = new Dog("Tig","GS1")
d2.barks();
// Output - Woof woof 
// For this object also , it will return woof woof 
// for both d1 and d2 , it will call the same method 

// Now 
// Overriding d1.barks
d1.barks=function(){
console.log("Bow Bow")
}
d1.barks()
// Output 
// Bow Bow 
// We have overridden the barks method

Dog.prototype.run=function(){
    console.log("run")
}
var d3=new Dog("Tig1","GS2")
d3.barks()
d3.__proto__.run=function(){
    console.log("run1")
}
d3.run()
d2.run()
// L - it should be __proto__ and not __proto_
// output 
// run1 
// run1 
// L for prototype, you can create dynamic functions to the object - Using prototype
// L you can override the prototype method 

// ? how do you access the properties of prototype 
// Proto is the key / pointer to the object 
// d3.__proto__.run - we are accessing the prototype 
// d3.__proto__.run = Dog.prototype.run , it will return true 

// We can change the value 
Dog.prototype.x=10
console.log(Dog.prototype.x)
console.log(d1.__proto__.x)
// We are changing the original reference itself 
// Both are same. 
// both will output as 10 
console.log(d1.__proto__.run==Dog.prototype.run)
// true 

//11.10.2024
Dog.prototype.birthday=function(){
    console.log("The birthday of the dog, today and age will be +1");
    this.age = this.age+1
   console.log(this)
}
var d4=new Dog("Dog4","Breed4")
console.log(d4.birthday());
/*Output - Dog {
  name: 'Dog4',
  breed: 'Breed4',
  barks: [Function (anonymous)],
  age: NaN
}
*/
d4.age = 20
d4.birthday();
/*
The birthday of the dog, today and age will be +1
Dog {
  name: 'Dog4',
  breed: 'Breed4',
  barks: [Function (anonymous)],
  age: 21
}
  */

// Freeze 
const obj ={
    age:42 // It should be always age:42 and not age=42
}
//Object.freeze(obj);
obj.age=43;
console.log(obj.age);
// It will display only 42 and the value is not changed 
// If we comment freeze, then 43 will be displayed 

// Prototype is object , it is available inside constrctor function  ,it is used for inheritance 
// It is accessible using __proto__ , 
// Useful to create properties and fucntion , used by all the object 
// Change in 1 central place 
// If not inside constructor, then it is like creating a local copy 
// Proto is the way to use prototyp 

