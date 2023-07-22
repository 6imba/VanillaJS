// Hoisting1:
function func3(){
    console.log(x)
    let x = 3;
}
func3()

// Hoisting2:
function func4(){
    let x = 3;
    console.log(x)
}
func4()