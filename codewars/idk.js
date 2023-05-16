function fakeBin(x){
    let arr=x.split('')
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (n<5) {
            arr[i]=0
        } else {
            arr[i]=1
        }
    }
    console.log(arr)
    console.log(arr.toString());
    return arr;
}
fakeBin('9332')