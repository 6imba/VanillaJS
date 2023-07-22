class Component2 {
    // constructor(){
    //     this.var1state = "I am initial state of var1state!";
    // }
    var1state = "I am initial state of var1state!";
    changeVar1(){
        console.log(this.var1state) // *line1
        this.var1state = "I am updated state of var1state!"; 
        console.log(this.var1state) // *line1
    }
}

let obj1 = new Component2();
console.log(obj1)
obj1.changeVar1()


// In react class component we need to bind.
// this.changeVar1 = this.changeVar1.bind(this)
// F:\4. 𝕀𝕋\5. MERN\React\6.component-state\src\components\ClassComponent\Component2