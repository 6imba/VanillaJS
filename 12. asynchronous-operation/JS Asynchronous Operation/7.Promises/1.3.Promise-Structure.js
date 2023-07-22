// 1.Promise Fullfill
const promiseObj = new Promise((resolve, reject) => {
    //Producing code:(May take some time) **************************
    if (true) {
        console.log(
            "Return promise-object that has Fullfill state with data|value!"
        );
        resolve(); // Return promise-object that has Fullfill state with data|value!
    } else {
        console.log(
            "Return promise-object that has Rejected state with error-object!"
        );
        reject(); // Return promise-object that has Rejected state with error-object!
    }
});
//Consuming Code:(Must wait for a Promise object) *************************
promiseObj
    .then(() => console.log("Promise Resolved action!"))
    .catch(() => console.log("Promise Rejected action!"));

