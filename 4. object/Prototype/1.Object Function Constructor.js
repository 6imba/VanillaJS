function Person(n1){
    this.name = n1;
    this.profession = "Fullstack Developer";
    this.bio = function(){
        return this.name + " is " + this.profession + "."
    }
}

const person1 = new Person("Amir")
// console.log(person1)
// console.log(person1.name)
// console.log(person1.toString)
// console.log(person1.toString()) //console.log(JSON.stringify(person1))
console.log(Object.getPrototypeOf(person1))
console.log(JSON.stringify(Object.getPrototypeOf(person1)))

// // See that name and profession, are properties of Person Object Function constructor.
// // There are lots of other extra properties as well: toString, isPrototypeOf, __proto__, many more.
// // But what are these extra properties, and where do they come from?
// // Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// // The chain ends when we reach a prototype that has null for its own prototype.
// // Create empty object without prototype chaining.
// // 


// const obj1 = {}
// console.log(obj1)
// console.log(obj1.toString())
// console.log(Object.getPrototypeOf(obj1))
// console.log(JSON.stringify(Object.getPrototypeOf(obj1)))