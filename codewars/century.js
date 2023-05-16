function whatCentury(year) {
    +year;
    let n;
    let op; 
if (Number.isInteger((year/100))) {
    n= year / 100;
} else {
    n = Math.trunc(year / 100 + 1);

    }
    op = n % 10;
    if (op == 1 && n != 11)
    {
    n+="st"
    }
    if (op == 2 && n!=12)
    {
    n+="nd"
    }
    if (op==3 && n!=13) {
        n+="rd"
    }
    if ((op!=1&&op!=2&&op!=3)||(n==11) || (n==12)||(n==13)) {
        n+='th'
    }

    return String(n)

}
console.log(whatCentury(2100))

