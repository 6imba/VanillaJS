let obj = {name:"Amir",age:22,country:"Nepal",bio: ()=> this.name+" lives in "+this.country} //Object

// obj1 has properties as: name,age,country,bio ==> obj.name, obj.age, obj.country, obj.bio.
// but obj can also access other properties as: toString,type,etc. ==> obj.toString, obj.type.
// how is this obj is able to access other properties beside name,age,country,bio? ==> this because of protptype chaining.

// here properties can be any datatype: Primitive,Array,Object,Function,Date,Regx.

// // Likewise the array below also can access other properties because of protptype chaining.
let arr = [1,2,3,4,5,6] //arr.length, arr.push(), arr.pop()

// So this means that what ever variable in JS have acces to some of hidden built-in_properties_methods is because of via Prototype.
// This is because when ever you create any datatype_variable, JS_engine automatically attach these particular hidden properties to that particular datatype_variable.(depends on type of prototype it inheritates)
// More accuratly attaches Respective_PrototypeObject_with_properties to the any created datatype_variable. And thats how your created datatype_variable gets access to extra properties&methods(properties_of_Respective_Prototype_Object)
// JS_engine keep all these properties in an object called __proto__

// console.log(obj.__proto__.forEach)
// console.log(obj.__proto__.map)
// console.log(obj.__proto__.slice)


// As we said before every datatype_variable in JS has Prototype, even this arr.__proto__ also has prototype.
// arr.__proto__.__proto__

// final parent prototype ==> Object.prototype.
// So, Object.prototype.prototype ==> null
// So, obj.__proto__.__proto__ ==> null

// final parent prototype ==> Object.prototype. That's why its called everything is JS is object.
// It is actually down the prototype chain ends up being an object.
// So this conclude that prototype chain ends up being null.

// Override the Object_Prototype or Prototype inheritance.
// const obj1 = {a:1}
// const obj2 = {b:2}
// obj2.__proto__ = obj1
// console.log(obj2.a)

// const obj1 = {}
// obj1.__proto__ = null
// console.log(obj1)

// const obj5 = {}
// console.log(obj5.__proto__)
// const obj6 = new Object()
// console.log(obj6.__proto__)

// const x = Object.create(null)
// console.log(x)
// console.log(x.__proto__)

// const numb = 6;
// console.log(numb.__proto__)

// https://www.youtube.com/watch?v=wstwjQ1yqWQ

