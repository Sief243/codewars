function humanReadable (seconds) {
    let h;
    let m;
    let s;
    h = Math.floor(seconds / 3600);
    m = Math.floor((seconds - (Math.floor(seconds / 3600) * 3600)) / 60)
    s = seconds % 60
    if (h<10) {
        h='0'+h
    }
    if (m<10) {
        m='0'+m
    }
    if (s<10) {
        s='0'+s
    }
    return h +':'+m+':'+s
}