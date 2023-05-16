function findAverage(array) {
    let n = 0;
    for (let i = 0; i < array.length; i++) {
            n += array[i];
    }
    console.log(n)
    if (n!=0) {
        n /= array.length;
    }
    console.log(n)
    return n;
}
