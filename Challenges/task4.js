longestWord = (sentence) => {
    let longest = ""

    let tmp = sentence.replace(/[^\w\s]/g, "");
    tmp = tmp.split(/\s+/);

    console.log(tmp)

    tmp.forEach(ele => {
        if (ele.length > longest.length)
            longest = ele
    });
    return longest
}

console.log(longestWord("A bug report is a detailed record of a software defect that includes what happened, how to reproduce it, and the expected result. Its purpose is to provide developers with the necessary information to find and fix the problem quickly. These reports are crucial for improving software quality by documenting errors encountered by users, testers, or developers!"))