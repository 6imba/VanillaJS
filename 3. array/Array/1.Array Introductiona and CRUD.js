// // 1: Array type into:
// const arr1 = [1,2,3,'d','e','f'];
// console.log(arr1)
// console.log(typeof(arr1))
// console.log(Array.isArray(arr1))
// console.log(arr1 instanceof Array)
// console.log(arr1 instanceof Object) //may be prototype inheriting.

// // 2: Accessing array elements:
// const arr2 = [1,2,3]
// console.log(arr2[0])
// console.log(arr2[1])
// console.log(arr2[2])
// console.log(arr2[-1])

// // 3: Replace array element:
// const arr3 = ['a','b','c']
// arr3[1] = "apple";
// console.log(arr3)

// // 4: Add new array element at particular index:
// const arr3 = ['a','b','c']
// arr3[3] = 'd';
// console.log(arr3)
// arr3[5] = 'f';// but creates empty element at index 4.
// console.log(arr3) 
// arr3[4] = 'e';// replace/fill empty element at index 4.
// console.log(arr3) 


// // 5: Append element in array:
//     const arr1 = [1,2,3]
//     arr1.push(4) // The push() method returns the new array length.
//     console.log(arr1)

// // 6: Pop last element in array:
//     const arr1 = [1,2,3]
//     arr1.pop()//pop() returns the element it removed.
//     console.log(arr1)

// // 7: Shift first element:
// const arr1 = [1,2,3,4,5]
// arr1.shift()
// console.log(arr1) // The shift() method returns the value that was "shifted out".

// // 7: unshift first element:
// const arr1 = [1,2,3,4,5]
// arr1.unshift(11)
// console.log(arr1) //The unshift() method returns the new array length.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.

// Warning !
    // Array elements can be deleted using the JavaScript operator delete.
    // Using delete leaves undefined holes in the array.
    // Use pop() or shift() instead.

// // Merging (Concatenating) Arrays
// // The concat() method creates a new array by merging (concatenating) existing arrays:
// // Example (Merging Two Arrays)
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);

// The concat() method can also take strings as arguments.
// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 

// // Splicing Arrays:
//     // - The splice() method adds new items to an array.
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     fruits.splice(2, 0, "Lemon", "Kiwi");
//     console.log(fruits)
//     fruits.splice(0, 1);
//     console.log(fruits)

// // Slicing Arrays:
//     // - The slice() method slices out a piece of an array.
//     const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//     const citrus1 = fruits.slice(3);
//     const citrus2 = fruits.slice(1,3); //index 3 is explicit

// // Array stringify:
//     const arr1 = [1,2,3,4,5,6]
//     console.log(arr1.toString())
//     console.log(typeof arr1.toString())
// All JavaScript objects have a toString() method.
