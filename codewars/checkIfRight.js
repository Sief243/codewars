function solution(str, ending){
    let arr = []; arr = str
    let arr2 = []; arr2 = ending
    let arr3 = [];
    let n = 0;
    if (arr.length < arr2.length) {
        return false;
    } else {
        n = arr.length - arr2.length;
        for (let i = 0; i < arr2.length; i++) {
            arr3[i]= arr[n];
            n++;
            if (arr3[i]==arr2[i]) {
            } else { 
                return false;
            }
        }
    }
    return true
}
