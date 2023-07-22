console.log("Callback Tutorials!");

// // 1. No use of callback:
// const students = [
//     {name: "Simba", subject: "JavaScript"},
//     {name: "Avi", subject: "Machine Learning"},
// ]

// function enrollStrudent(student){
//     setTimeout(()=>students.push(newStudent), 4000);
//     console.log("Enrolled new student.")
// }

// function getStudents(){
//     setTimeout(() => {students.forEach((student) => console.log(student))}, 2000)
//     console.log("Retrive all student.")
// }

// const newStudent = {name: "Lina", subject: "Security Architecture"};
// getStudents();
// enrollStrudent(newStudent);


// // 2. Use of callback but no any callback concept comes to play: as we cant stop getStudents() from executing
// const students = [
//     {name: "Simba", subject: "JavaScript"},
//     {name: "Avi", subject: "Machine Learning"},
// ]

// function enrollStrudent(student){
//     setTimeout(() => {
//     students.push(newStudent)
//     console.log("Enrolled new student.")
//     getStudents();
//     }, 4000);
// }

// function getStudents(){
//     setTimeout(() => {
//         console.log("Retrive all student.")
//         students.forEach((student) => console.log(student))
//     }, 2000);
// }

// const newStudent = {name: "Lina", subject: "Security Architecture"};
// enrollStrudent(newStudent);


// // 3. Use of callback concept:
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



// 4. Use of callback concept:
const students = [
    {name: "Simba", subject: "JavaScript"},
    {name: "Avi", subject: "Machine Learning"},
]

function enrollStrudent(student, callback){
    setTimeout(()=> {
        students.push(student)
        console.log("Enrolled new student.")
        callback();
    }, 4000);
}

function getStudents(){
    setTimeout(() => {
        console.log("Retrive all student.")
        students.forEach((student) => {
            console.log(student)
        }
    )}, 1000)
}

const newStudent = {name: "Lina", subject: "Security Architecture"};
enrollStrudent(newStudent, getStudents);