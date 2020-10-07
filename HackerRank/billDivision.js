function bonAppetit(bill, k, b) {
    let actual = 0
    for (let i = 0; i < bill.length; i++) {
        actual += bill[i]
    }
    actual = (actual - bill[k])/2
    console.log((actual === b) ? 'Bon Appetit' : (b-actual)) 
}
