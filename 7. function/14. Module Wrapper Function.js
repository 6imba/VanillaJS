console.log(exports) // {}
console.log(require) // [Function: require] {}
console.log(module) // Module {}
console.log(__filename) //Module Wrapper Function.js
console.log(__dirname) //C:\Users\DELL\Desktop\NodeJS\3. Modularity


// // By default every module/file 's code is wrapped inside a module wrapper function in node by default:
// (function (exports, require, module, __filename, __dirname) {
//     console.log(exports) // {}
//     console.log(require) // [Function: require] {}
//     console.log(module) // Module {}
//     console.log(__filename) //Module Wrapper Function.js
//     console.log(__dirname) //C:\Users\DELL\Desktop\NodeJS\3. Modularity
//   });