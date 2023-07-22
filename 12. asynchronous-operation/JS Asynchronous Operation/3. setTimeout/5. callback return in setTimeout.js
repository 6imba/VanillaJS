// // 1
// function x () {
//     setTimeout(function () {
//         return 'done';
//     }, 1000);
// }
// console.log(x());

// // 2
// function x () {
//     setTimeout(y = function () {
//         return 'done';
//     }, 1000);
//     return y;
// }
// console.log(x());


// // You need to use Promises for this. They are available in ES6 but can be polyfilled quite easily:
// // 3 Promise with arrow function:
// function x() {
//     var promise = new Promise(function(resolve, reject) {
//       window.setTimeout(function() {
//         resolve('done!');
//       });
//     });
//     return promise;
//  }
//  x().then(function(done) {
//    console.log(done);
//  });


// // 4. Promise with arrow function:
// const x = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(function() {
//         resolve('done!');
//       });
//     });
// }
// x().then((value) => console.log(value));



// // 5. With async/await in ES2017 it becomes nicer if inside an async function:
// function x() {
//     var promise = new Promise(function(resolve, reject) {
//       window.setTimeout(function() {
//         resolve('done!');
//       });
//     });
//     return promise;
//  }
// async function() {
//     const result = await x();
//     console.log(result);
//   }

// 6
// function x (callback) {
//     setTimeout(function () {
//         callback("done");
//     }, 1000);
// }

// x(console.log.bind(console)); //this is special case of console.log