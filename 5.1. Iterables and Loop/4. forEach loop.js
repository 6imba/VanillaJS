// The forEach() method calls a function (a callback function) once for each array element.
// There by we can say: forEach_method loops through the values&index of an Array.

const arr1 = [45, 4, 9, 16, 25];
function myFunction(value, index, array) {
    console.log(value, index, array)
}
arr1.forEach(myFunction);

// Return Value: undefined