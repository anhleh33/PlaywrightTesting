longestWord = (sentence) => {
    let longest = ""

    let tmp = sentence.replace(/[^\w\s]/g, "");
    tmp = tmp.split(/\s+/);

    tmp.forEach(ele => {
        if (ele.length > longest.length)
            longest = ele
    });
    return longest
}

module.exports = { longestWord };