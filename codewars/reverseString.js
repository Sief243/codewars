function solution(str) {
    var arra=[]
    var  arr = [];
    var g = str;
    for (var i = 0; i < g.length; i++) {

        arr[i] = g.charAt(i);
        
    }
        arr.reverse();
    for (let v = 0; v < arr.length; v++) {
        arra+=(arr[v]) ;
    }
    console.log(typeof (arra));
    arra.toString()
    arra.a
    arra.join("")
    console.log(arra)
}
solution('world');