function findOdd(A) {
    A.sort()
    let n;
    let n2 = 1;
    let n3 = 0;
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        if (i > 0 && (A[i] != A[i + 1] && A[i] != A[i - 1])) {
            ;return A[i]
        }if (i==0&&A[i]!=A[i+1]) {
            return A[i]
        } for (let j=0; j<A.length; j++) {
            if (A[j] == A[j]) {
                n2++;
            }
        }
        if (n2!=1&&n2%2==1) {
            n3=A[i-1]
        }
    }
    return n3
} 