const fibonacciRecursive = (num) => {
    if (num <= 2) return 1;

    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};

console.log(fibonacciRecursive(7));