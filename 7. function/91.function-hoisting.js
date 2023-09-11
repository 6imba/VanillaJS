// const func1 = () => {
//     func2()
// }

// const func2 = () => {
//     console.log('I am func2 ...')
// }
// func1()



const func1 = () => {
    let output = func2()
    console.log(`output: ${output}`)
}
const func2 = () => {
    for (let i = 0; i < 9005000000; i++) { // Synchronous loop iteration
        continue
    }
    return 100
}
func1()
