// const arr1 = [2,4,6,8,10,12,14,16];

// function myFucntion(x,y){
//     return x+y;
// }

// let result = arr1.reduce(myFucntion);

// console.log(result);


// // Definition and Usage:
// // The reduce() method executes a reducer function for array element.
// // The reduce() method returns a single value: the function's accumulated result.
// // The reduce() method does not execute the function for empty array elements.
// // The reduce() method does not change the original array.


// // Syntax:
// // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// // The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


// const arr2 = [2,4,6,8,10,12,14,16];
// let result2 = arr2.reduce((x, y) => x+y);
// console.log(result2);




// // const arr3 = [2,4,6,8,10,12,14,16];
// // function myFucntion(previousValue, currentValue, currentIndex, array){
// //     console.log(currentIndex)
// //     console.log(array)
// //     return previousValue + currentValue;
// // }
// // let result3 = arr3.reduce(myFucntion);
// // console.log(result3);



// // // Arrow function
// // reduce((previousValue, currentValue) => { /* ... */ } )
// // reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// // reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// // reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// // // Callback function
// // reduce(callbackFn)
// // reduce(callbackFn, initialValue)

// // // Inline callback function
// // reduce(function(previousValue, currentValue) { /* ... */ })
// // reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
// // reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// // reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)

// .......................................................................................................................................

const arr = ['id', 'displayName', 'typeId', 'permissions', 'description'];
arr.reduce((init, curr, index) => {
    console.log('index:', index)
    console.log('init: ',init);
    console.log('curr: ', curr);
    console.log('.........................................................................')
    return `${init},${curr}`;
});
