
function moveZeros(arr) {
    l=[]
    arr.sort().reverse()
    let n = []
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && typeof(arr[i])!="boolean") {
            n[j] = arr.pop()
            arr.push(n[j])
            j++
        }
    }
    for (let k = 0; k < n.length; k++) {
        arr.pop()
    }
    arr.reverse()
    l = (arr +',' +n)
    return l.split(',')
}