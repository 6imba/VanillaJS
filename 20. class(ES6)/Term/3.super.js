// super keyword reference to super/parent/base class.

class GrandFather{
    constructor(name){
        this.name = name
        this.surname = "Shrestha"
    }
    method_1(){
        return "Hi";
    }
    answer(){
        return "Parent answer!"
    }
}
class Father extends GrandFather {
    constructor(name,job){
        super(name)
        this.job = job;
    }  
}
class Son extends Father {
    constructor(name,study){
        super(name)
        this.study = study;
    }  
}
class GrandSon extends Son {
    constructor(name,toy){
        super(name)
        this.toy = toy;
    }
}
class DeriveClass extends GrandSon {
    constructor(a,b,c){
        super(a,c)
        this.b = b;
    }
    answer(){
        return "Child answer!"
    }
    result(){
        return this.answer()
        // return super.answer()
    }
}

const grandFather = new GrandFather("Jhilke")
const father = new Father("Haku Bahadur")
const son = new Son("Amir")
const grandSon = new GrandSon("Simba")
const derieveObject = new DeriveClass("Lisa","Ball","Khelaune")

console.log(grandFather)
console.log(father)
console.log(son)
console.log(grandSon)
console.log(grandSon)
console.log(derieveObject)
// console.log(derieveObject.method_1())
console.log(derieveObject.result())


// # Inheritance:
    // - super keyword reference to super/parent/base class.
    // - The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
    // - this:CurrentClass vs super:ParentClass

// - constructor gets initialized at the time of object creation.
// - if derived class doesn't have constructor, then it initialized parent constructor at the time of its object creation.
// - if derived class have constructor, then it initialized its own constructor at the time of its object creation.
// - initialized parent constructor at the time of initialization of child_constructor ==> super keyword
    // - https://www.youtube.com/watch?v=DMa1G5sf5Lg


