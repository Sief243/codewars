function findNextSquare(sq) {
    if(Math.floor(Math.sqrt(sq))!=Math.sqrt(sq)){
        return -1;
    } else {
        let n = Math.sqrt(sq) + 1;
        return n*n
    }
}
console.log(findNextSquare(25))