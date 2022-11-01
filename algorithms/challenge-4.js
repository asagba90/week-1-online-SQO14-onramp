function calculateGrade(marks) {
    var sum = 0
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    avg = sum/marks.length;
    if (avg >= 90) {
        return "A";
    } else if (avg >= 80) {
        return "B";
    } else if (avg >= 70) {
        return "C";
    } else if (avg >= 60) {
        return "D";
    } else if (avg >= 50) {
        return "E";
    } else {
        return "F";
    }
}

module.exports = calculateGrade

var newArr = require('./challenge-5.js')

arr = [1,2,'a','b']

console.log(newArr(arr))
