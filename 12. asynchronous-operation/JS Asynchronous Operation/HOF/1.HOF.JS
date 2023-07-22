const diameter = (radius) => {
    result = []
    for(let i=0; i<radius.length; i++){
        result.push(2*radius[i]);
    }
    return result;
};
const area = (radius) => {
    result = []
    for(let i=0; i<radius.length; i++){
        result.push(Math.PI*radius[i]*radius[i]);
    }
    return result;
};
const circumfarance = (radius) => {
    result = []
    for(let i=0; i<radius.length; i++){
        result.push(2*Math.PI*radius[i]);
    }
    return result;
};

const radius = [3,6,7,4];
const diameters = diameter(radius);
const areas = area(radius);
const circumfarances = circumfarance(radius);
console.log("Array of Radius:",radius)
console.log("Array of Diameters:",diameters)
console.log("Array of Areas:",areas)
console.log("Array of Circumfarances:",circumfarances)

// See here wee need to 1.pass array to for loop, 2. initialize iteratble(i), 3.create,update&return new array.
// quite long isnt it.
// So here we have map HOF.(2.HOF.JS)
