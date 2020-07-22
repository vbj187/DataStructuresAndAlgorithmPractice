const numRaisedToPower = (num, exp) => {
    if (num === 0) return 1;
    // if (exp === 0) return 1;
    if (exp === 1) return num;

    return num * numRaisedToPower(num, exp - 1);
};

console.log(numRaisedToPower(7, 3));

// 343
// 7 * 49
//      7 * 7
//          7 * 1