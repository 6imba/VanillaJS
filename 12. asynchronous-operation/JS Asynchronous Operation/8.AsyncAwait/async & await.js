
// console.log("Program Start")
// const readData = async () => {
//     const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     for(let i=0; i<=1000000000; i++){ var x=10}
//     console.log(data)
// }
// readData()
// console.log("Program End")



console.log("Program Start")
const readData = async () => {
    const data = await fsp.readFile('./test/myFile1.txt', 'utf8')
    for(let i=0; i<=1000000000; i++){ var x=10}
    for(let i=0; i<=1000000000; i++){ var x=10}
    for(let i=0; i<=1000000000; i++){ var x=10}
    console.log(data)
}
await readData()
console.log("Program End")