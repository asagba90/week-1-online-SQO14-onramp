function filterList(arr) {
    return arr.filter((value) => typeof value !== "string");
}

module.exports =filterList
