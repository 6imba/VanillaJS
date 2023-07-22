function add (numArray = [1, 2, 3, 4]){
    let total = 0;
    numArray.forEach((element) => total += element)
    console.log(total)
}
add(); // takes default array params
add([5, 6, 7 , 8]); // overwrite default arrray params