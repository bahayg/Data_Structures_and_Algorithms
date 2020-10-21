function pangrams(s) {
    let alphabet = new Set(s.toLowerCase())
    return (alphabet.size === 27) ? 'pangram' : 'not pangram'
}
