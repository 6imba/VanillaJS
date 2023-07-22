class Component2 {
    constructor(){
        this.property1 = "I am property1 !"; //construtor property that can be customized
    }
    property2 = "I am property2 !"; // hard property
    changeVar1(){
        let property3 = "I am property3 !" // class component local property
        console.log(property3)
    }
}

let obj1 = new Component2();
console.log(obj1)
obj1.changeVar1()
console.log(obj1.property2)
console.log(obj1.property3)

