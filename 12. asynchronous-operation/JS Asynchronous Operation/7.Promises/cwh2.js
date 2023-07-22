// // - We use Promise as substitue of Callback.

// //  Use of Callback concept:
// const students = [
//     {name: "Simba", subject: "JavaScript"},
//     {name: "Avi", subject: "Machine Learning"},
// ]
// function enrollStrudent(student, callback){
//     setTimeout(()=> {
//         students.push(student)
//         console.log("Enrolled new student.")
//         callback();
//     }, 4000);
// }
// function getStudents(){
//     setTimeout(() => {
//         console.log("Retrive all student.")
//         students.forEach((student) => {
//             console.log(student)
//         }
//     )}, 1000)
// }
// const newStudent = {name: "Lina", subject: "Security Architecture"};
// enrollStrudent(newStudent, getStudents);

// // ------------------------------------------------------------------------------------------------------------------------------------


// //  Use of Promise concept:
// const students = [
//     {name: "Simba", subject: "JavaScript"},
//     {name: "Avi", subject: "Machine Learning"},
// ]
// function enrollStrudent(student){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=> {
//             if(true){
//                 students.push(student)
//                 console.log("Enrolled new student.")
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 4000);
//     })
// }
// function getStudents(){
//     setTimeout(() => {
//         console.log("Retrive all student.")
//         students.forEach((student) => {
//             console.log(student)
//         }
//     )}, 1000)
// }
// const newStudent = {name: "Lina", subject: "Security Architecture"};
// enrollStrudent(newStudent)
//     .then(()=>getStudents())
//     // .then(getStudents)
//     .catch(()=>console.log("Error"));


// In callback concept: getStudents(callback) is called inside asynchronous(function that takes some time)
// In contreact, in promise getStudents(callback) is called inside promise consuming code.then()

// enrollStrudent(newStudent)
//     .then(()=>getStudents())
    // .then(getStudents)

// See the difference when to use callback concept: .then(()=>getStudents()) VS when not to use .then(getStudents).
// as we know we have to call getStudents when .then is hit no need callback concept over here.

// Reference:
    // - https://stackoverflow.com/questions/3884281/what-does-the-function-then-mean-in-javascript