function removeChar(str) {
    str = str.split('')
    str.shift()
    str.pop()
    return str.join('')
}