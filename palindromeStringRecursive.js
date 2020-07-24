const palindromeStringRecursive = str => {
    if (str.length == 1) return true;

    if (str[0] === str[str.length - 1]) {
        return palindromeStringRecursive(str.substring(1, str.length - 1));
    }
    return false;
};

console.log(palindromeStringRecursive('malayalam'));