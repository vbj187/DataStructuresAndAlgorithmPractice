const isOdd = (val) => {
    return val % 2 !== 0;
};

const someOddRecursive = (arr, callback) => {
    if (arr.length === 0) return false;

    if (callback(arr[0])) return true;

    return someOddRecursive(arr.slice(1), callback);
};


console.log(someOddRecursive([1, 2, 3], isOdd));
// >> true

console.log(someOddRecursive([4, 2, 6], isOdd));
//  >> false