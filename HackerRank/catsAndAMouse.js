function catAndMouse(x, y, z) {
    if (Math.abs(z-x) < Math.abs(z-y)) return ('Cat A')
    if (Math.abs(z-x) > Math.abs(z-y)) return ('Cat B')
    if (Math.abs(z-x) === Math.abs(z-y)) return ('Mouse C')
}
