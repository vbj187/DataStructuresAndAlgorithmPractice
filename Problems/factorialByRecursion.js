const factorialByRecursion = (num) => {

    if (num == 0) return 1;

    return num * factorialByRecursion(num - 1);

};

console.log(factorialByRecursion(4));