// When the this keyword is used inside class(constructor,property,method), it refers to the newly created object.

// # 1:
class Parent1{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    method_1(){
        return this;
    }
}
const obj1 = new Parent1()
console.log(obj1.method_1())
const obj2 = new Parent1("Amir",22)
console.log(obj2.method_1())

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



// Q. What is this?
//     In JavaScript, the this keyword refers to an object.
//     Which object depends on how this is being invoked (used or called).
//     The this keyword refers to different objects depending on how it is used:
//         - In an object method, this refers to the object.
//         - Alone, this refers to the global object.
//         - In a function, this refers to the global object.
//         - In a function, in strict mode, this is undefined.
//         - In an event, this refers to the element that received the event.
//         - Methods like call(), apply(), and bind() can refer this to any object.

