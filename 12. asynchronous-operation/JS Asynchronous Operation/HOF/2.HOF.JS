const D = (r) => 2*r;
const A = (r) => Math.PI*r*r;
const C = (r) => 2*Math.PI*r;

const radius = [3,6,7,4];
const diameters = radius.map((r)=>D(r))
const areas = radius.map((r)=>A(r))
const circumfarances = radius.map((r)=>C(r))
console.log("Array of Radius:",radius)
console.log("Array of Diameters:",diameters)
console.log("Array of Areas:",areas)
console.log("Array of Circumfarances:",circumfarances)

// See code is repeated 1. radius.map((r)=>D(r)), 2. radius.map((r)=>A(r)), 3. radius.map((r)=>C(r))
// only thing that is variant is formula_logic other all are same.
// We sholud never repeat the code instead follow DRY Principle.(Dont Repeat Yourself)
// So lets make above code DRY.(3.HOF.JS)


