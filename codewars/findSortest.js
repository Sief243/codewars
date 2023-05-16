function findShort(s){
    let l = s.toString()
    l = l.split(' ')
    n = l[0].length;
    for (let i = 0; i < l.length; i++) {
        if (n>l[i].length) {
            n=l[i].length
        } else {
            
        }
    }
return n
}
console.log(findShort(['hi mom how mlr u? .,']))