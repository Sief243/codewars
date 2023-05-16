function invert(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]*=-1
        
    } 
    return array
}
console.log(invert([-7,8,-90,3,5, 0]))