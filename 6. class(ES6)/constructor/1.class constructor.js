// # 1:
class Parent{
    constructor(){
        this.name = "Amir";
    }
}
const obj1 = new Parent()
console.log(obj1.name)

// // # 2:
// class Parent{
//     constructor(){
//         this.name = "Amir";
//     }
//     method_1(){
//         return this.name;
//     }
// }
// const obj1 = new Parent()
// console.log(obj1.method_1())

// A constructor is a special function that creates and initializes an object instance of a class.
// In JavaScript, a constructor gets called when an object is created using the new keyword.
// The purpose of a constructor is to create a new object and set values for any existing object properties.

// // # 3:
// class Parent{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     method_1(){
//         return this.name + " is " + this.age + " years old.";
//     }
// }
// const obj1 = new Parent()
// console.log(obj1.method_1())
// const obj2 = new Parent("Amir",22)
// console.log(obj2.method_1())

// // # 3:
// class Parent1{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     method_1(){
//         return this;
//     }
// }
// const obj1 = new Parent1()
// console.log(obj1.method_1())
// const obj2 = new Parent1("Amir",22)
// console.log(obj2.method_1())

// // # 4:
// class Parent2{
//     constructor(){
//         this.name = "Amir";
//     }
//     method_1(){
//         return this;
//     }
// }
// const obj3 = new Parent2()
// console.log(obj3.method_1())

// // # 5:
// class Parent2{
//     method_1(){
//         return this;
//     }
// }
// const obj3 = new Parent2()
// console.log(obj3.method_1())

