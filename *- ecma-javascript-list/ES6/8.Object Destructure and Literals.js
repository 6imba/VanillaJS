// // 1
// function addressMaker(address){
//     const newAddress = {
//         city: address.newCity,
//         state: address.newState,
//         country: 'Nepal'
//     };
//     console.log(newAddress.city, newAddress.state, newAddress.country);
// }
// addressMaker({newCity: 'Kathmandu', newState: 'Province3'})



// // 2 Object destructor
// function addressMaker(address){
//     const {newCity, newState} = address;
//     console.log('1', newCity);
//     console.log('2', newState);
//     const newAddress = {
//         city: newCity,
//         state: newState,
//         country: 'Nepal'
//     };
//     // console.log(newAddress.city, newAddress.state, newAddress.country);
// }
// addressMaker({newCity: 'Kathmandu', newState: 'Province3'})


// // 3 Object destructor & literals:
// function addressMaker(address){
//     const {city, state} = address;
//     console.log('1', city);
//     console.log('2', state);
//     const newAddress = {
//         city,
//         state,
//         country: 'Nepal'
//     };
//     console.log(newAddress.city, newAddress.state, newAddress.country);
// }
// addressMaker({city: 'Kathmandu', state: 'Province3'})
