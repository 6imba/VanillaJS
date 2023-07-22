const radius = [3,6,7,4];
const D = (r) => 2*r;
const A = (r) => Math.PI*r*r;
const C = (r) => 2*Math.PI*r;

const calculation = (func) => {
    return radius.map((r)=>{
                if(func == D){
                    return D(r)
                }
                else if(func == A){
                    return A(r)
                }
                else if(func == C){
                    return C(r)
                }
            })
}


const diameters = calculation(D)
const areas = calculation(A)
const circumfarances = calculation(C)
console.log("Array of Radius:",radius)
console.log("Array of Diameters:",diameters)
console.log("Array of Areas:",areas)
console.log("Array of Circumfarances:",circumfarances)

// Optimize way(DRY).
// calculation is HOF.
// Is HOF and generic function same???



// Before:
// const calculation = (func) => {
//     if(func == D){
//         radius.map((r)=>D(r))
//     }
//     else if(A){
//         radius.map((r)=>A(r))
//     }
//     else if(C){
//         radius.map((r)=>C(r))
//     }
// }

// Optimize way(DRY).
// radius.map((r)=>{
//     if(func == D){
//         return D(r)
//     }
//     else if(A){
//         return A(r)
//     }
//     else if(C){
//         return C(r)
//     }
// })