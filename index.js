function largestPower(n){
    let count = 0
    while ( 3 ** count < n) count ++
    return count - 1
}