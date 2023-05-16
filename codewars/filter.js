function filter_list(l) {
    let n = []
    let j=0
    n[0] = 0
    let b = ['hiMom']
    for (let i = 0; i < l.length; i++) {
        if (typeof(l[i])!=typeof(b[0])) {
            n[j] = l[i]
            j++
        } else {
        }
        
    }
    return n
}
console.log(filter_list(['hi', 'mom', 9, 0, 8, 6, 'i', 6, 5, 9, 'miss u <3']))
