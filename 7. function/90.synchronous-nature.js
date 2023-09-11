const func1 = () => {
    console.log('func1 .... start')
    for (let i = 0; i < 9005000000; i++) { // Synchronous loop iteration
        continue
    }
    console.log('func1 .... end')
}

const func2 = () => {
    console.log('func2 .... start')
    for (let i = 0; i < 9005000000; i++) { // Synchronous loop iteration
        continue
    }
    console.log('func2 .... end')
}

const func3 = () => {
    console.log('func3 .... start')
    for (let i = 0; i < 9005000000; i++) { // Synchronous loop iteration
        continue
    }
    console.log('func3 .... end')
}

func1() // Synchronous function call
func2() // Synchronous function call
func3() // Synchronous function call





// const func1 = () => {
//     let output = func2()
//     console.log(`output: ${output}`)
// }
// const func2 = () => {
//     for (let i = 0; i < 9005000000; i++) { // Synchronous loop iteration
//         continue
//     }
//     return 100
// }
// func1()
