const reverseStringRecursive = (str) => {
    if (str.length === 0) return "";

    return str[str.length - 1] + reverseStringRecursive(str.substring(0, str.length - 1));
};

console.log(reverseStringRecursive("awesome"));