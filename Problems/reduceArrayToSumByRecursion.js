const reduceArrayToSumByRecursion = (arr) => {
    if (arr.length < 1) return 0;

    return arr[0] + reduceArrayToSumByRecursion(arr.slice(1));
};

console.log(reduceArrayToSumByRecursion([1, 2, 3, 4, 5]));