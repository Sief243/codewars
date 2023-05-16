function SeriesSum(n)
{ s=0
    for (let i = 0; i < n; i++) {
        r= 1/(1+(3*i))
        s+=r
    }
    return String(s.toFixed(2))
}
console.log(SeriesSum(9999898))