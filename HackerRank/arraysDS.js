function reverseArray(a) {
    for (let i = 0; i < (a.length/2); i++) {
        [a[i], a[a.length - 1 - i]] = [a[a.length - 1 - i], a[i]]
    }
    return a
}
