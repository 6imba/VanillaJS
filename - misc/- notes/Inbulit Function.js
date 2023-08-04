// 1.setInterval:
second = 0;
const x = setInterval(() => {if(second<5){console.log('Second:', second += 1)}else{clearInterval(x)}}, 1000)

// setInterval with Date() class
setInterval(callback, 1000);
function callback(){
    let d = new Date();
    console.log(d.getHours() + ":" +d.getMinutes() + ":" +d.getSeconds());
}


// 2. setTimeout:
setTimeout(() => console.log('I am callBack!'), 3000);



// Waiting for a Timeout: setTimeout()
// Waiting for Intervals: setInterval()
// Waiting for Files: XMLHttpRequest()

