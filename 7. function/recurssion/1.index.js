function one () {
    console.log('Hi')
    one()
}
one()

// error:
// Hi
// Hi
// Hi
// Hi
// Hi
// node: internal / console / constructor: 304
// if (isStackOverflowError(e))
//             ^
//     RangeError: Maximum call stack size exceeded
// at console.value(node: internal / console / constructor: 304: 13)
// at console.log(node: internal / console / constructor: 377: 26)
// at one(/home/dell / MyLearning / 5.JavaScript / Js Function / recurssion / 1.index.js: 2: 13)
// at one(/home/dell / MyLearning / 5.JavaScript / Js Function / recurssion / 1.index.js: 3: 5)