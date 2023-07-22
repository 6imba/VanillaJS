console.log("Before delay 1");
  
function delayBySeconds(sec) {
    console.log("Before delay 3");
    let start = now = Date.now()
    console.log("Before delay 4");
    while(now-start < (sec*1000)) {
        console.log("Before delay 5");
        now = Date.now();
    }
    console.log("Before delay 6");
}
  
console.log("Before delay 2");

delayBySeconds(5);
  
// Executes after delay of 5 seconds
console.log("After delay");





