evenDoubled = (nums) => {
    let newNums = []
    nums.forEach(ele => {
        if (ele % 2 == 0) {
            newNums.push(ele * 2)
        }
    })
    return newNums
}

module.exports = { evenDoubled };