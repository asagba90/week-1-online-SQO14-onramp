function countTruthy(arr) {
    var thruthy = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            thruthy++;
        }
        
    }
    return thruthy;
}
module.exports = countTruthy
