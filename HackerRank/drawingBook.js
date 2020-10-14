function pageCount(n, p) {
    /*
     * Write your code here.
     */
    let total = Math.floor(n / 2)
    let front = Math.floor(p / 2)
    if ((total - front) < front) return (total - front)
    else return front
}
