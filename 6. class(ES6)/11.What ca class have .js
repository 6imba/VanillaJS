class Person{
    constructor(){
        this.name = "Amir Shrestha";
        this.age = 22;
    }
    scientific_name = "Homo sapiens";
    just;
    prove(){
        console.log("I am Human.")
    }
    okay(){
        return "yes"
    }
}
const person_1 = new Person();
console.log(person_1)
console.log(person_1.name)
console.log(person_1.age)
console.log(person_1.scientific_name)
console.log(person_1.just)
person_1.just = "             any data"
console.log(person_1.just)
person_1.prove()
console.log(person_1.okay())



// class Person{
//     constructor(){
//         this.name = "Amir Shrestha";
//         this.age = 22;
//     }
//     var scientific_name = "Homo sapiens" //Unexpected token. A constructor, method, accessor(getter & setter), or property was expected.
//     prove(){
//         console.log("I am Human.")
//     }
//     okay(){
//         return "yes"
//     }
// }
// const person_1 = new Person();
// console.log(person_1)
// console.log(person_1.name)
// console.log(person_1.age)
// console.log(person_1.scientific_name)
// person_1.prove()
// console.log(person_1.okay())