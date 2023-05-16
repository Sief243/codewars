function solution(number) {
    let n =0
    let f1
    let f2
    for (let i = 0; i < Math.abs(number);  i++) {
        if (number < 0) {
            return 0;
        }
        f1 = i % 3; f2 = i % 5;
        if (f1==0 || f2==0) {
            n += i;
        }
    }
    return n
}
console.log(solution(32847));