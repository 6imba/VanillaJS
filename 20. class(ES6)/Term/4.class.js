class Parent{
    constructor(){
        this.name = "Homo";
    }
    age = 22;
    method_1(){
        return "Hi"
    }
    method_2(){
        return this.name
    }
    method_3(){
        return this.age
    }
}
const obj1 = new Parent()
console.log(obj1)
console.log(obj1.method_1)
console.log(obj1.method_2)
console.log(obj1.method_1())
console.log(obj1.method_2())
console.log(obj1.method_3())