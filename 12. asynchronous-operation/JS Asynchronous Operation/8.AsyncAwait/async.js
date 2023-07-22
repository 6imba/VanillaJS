const fsp = require('fs/promises')

const readMyDir = async () => {
    try{
        const files = await fsp.readdir('C:\\Users\\DELL\\Desktop\\NodeJS\\4. Core Node Modules\\3.FileSystemModule\\FileSystem Promise API\\ESM\\test')
        for (let file of files){
            console.log(file)
        }
    }catch(err){
        console.log("Error ==> ",err)
    }
}
console.log("Execute Program!")
console.log("Statement 1...............")
console.log("Statement 2...............")
let myReturn = readMyDir()
console.log(myReturn)
console.log("Statement 3...............")
console.log("Statement 4...............")
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
for(let i=0; i<=1000000000; i++){ var x=10}
console.log(myReturn)
