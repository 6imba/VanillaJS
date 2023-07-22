const diametersLogic = (r) => 2*r;
const areasLogic = (r) => Math.PI*r*r;
const circumfaranceLogic = (r) => 2*Math.PI*r;

const calculation = (logic) => {
    return radius.map((r)=>{
                if(logic == diametersLogic){
                    console.log("D")
                    return diametersLogic(r)
                }
                else if(logic = areasLogic){
                    console.log("A")
                    return areasLogic(r)
                }
                else if(logic == circumfaranceLogic){
                    console.log("C")
                    return circumfaranceLogic(r)
                }
            })
}

const radius = [3,6,7,4];
const diameters = calculation(diametersLogic)
const areas = calculation(areasLogic)
const circumfarances = calculation(circumfaranceLogic)
console.log("Array of Radius:",radius)
console.log("Array of Diameters:",diameters)
console.log("Array of Areas:",areas)
console.log("Array of Circumfarances:",circumfarances)

// https://www.youtube.com/watch?v=HkWxvB1RJq0
// Array.prototype.calculate();