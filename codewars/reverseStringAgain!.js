function reverseWords(str) {
    let l =[]
    l = str.split('').reverse().join('').split(' ').reverse()
    return l
}
console.log(reverseWords('hi mommy'))
//str.replace(/\S+/g,v=>[...v].reverse().join``)