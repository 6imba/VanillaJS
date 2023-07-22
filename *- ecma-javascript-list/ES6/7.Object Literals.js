// // 1
// function newObjectCreator(city, state){
//     const newObj = {newCity: city, newState: state};
//     console.log(newObj);
// }
// newObjectCreator('Kathmandu', 'Province3');



// // 2
// function newObjectCreator(city, state){
//     const newObj = {city: city, state: state};
//     console.log(newObj);
// }
// newObjectCreator('Kathmandu', 'Province3');



// 3 Object Literals:
function newObjectCreator(city, state){
    const newObj = {city, state};
    console.log(newObj);
}
newObjectCreator('Kathmandu', 'Province3');
