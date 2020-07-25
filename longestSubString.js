const lengthOfLongestSubstring = (str) => {
    let start = 0;
    let end = 0;
    let set = new Set();
    let len = -Infinity;

    while (start < str.length && end < str.length) {
        let char = str[end];

        if (!set.has(char)) {
            set.add(char);
            end++;
            len = Math.max(len, end - start);
        } else {
            set.delete(str[start]);
            start++;
        }
    }
    return len === -Infinity ? 0 : len;
};

console.log(lengthOfLongestSubstring("malayalam"));