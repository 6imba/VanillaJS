console.log(fetch())

// - As window is global object of browser and window object owns fetch(). See as fetch() is not recognized in node.js, since node doent have window object.
//     - console.log(fetch()) ==> ReferenceError: fetch is not defined

