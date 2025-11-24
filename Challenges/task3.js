evenDoubled = (nums) => {
    let newNums = []
    nums.forEach(ele => {
        if (ele % 2 == 0) {
            newNums.push(ele * 2)
        }
    })
    return newNums
}

console.log(evenDoubled([1, 2, 3, 4, 80]))