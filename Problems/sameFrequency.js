let sameFrequency = (num1, num2) => {
    // sameFrequency(182,218)>>True
    // sameFrequency(14,34)>>False
    // sameFrequency(22,222)>>False

    let str1 = num1.toString();
    let str2 = num2.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    const obj1 = {};
    const obj2 = {};

    for (let num in str1) {
        obj1[str1[num]] = (obj1[str1[num]] || 0) + 1;
        // console.log(str1[num]);
    }

    for (let num in str2) {
        obj2[str2[num]] = (obj2[str2[num]] || 0) + 1;
        // console.log(str1[num]);
    }

    // console.log(obj1);
    // console.log(obj2);

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};