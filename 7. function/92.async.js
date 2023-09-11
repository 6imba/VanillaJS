const func1 = async () => {
    console.log('func1: ', 2+3)
}
func1()



const func2 = async () => {
    return 2+3
}
console.log('func2: ', func2())



const func3 = async () => {
    return 2+3
}
(async () => console.log('func3: ', await func2()))()
