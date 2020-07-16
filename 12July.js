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

// frequency calculator method
const areThereDuplicates = (...args) => {
    // 1,2,3>>False
    // 1,2,2>>True
    // a,b,c>>False
    // a,b,a>>True
    // console.log(args);
    const obj = {};
    for (let item in args) {
        // console.log(args[item]);
        obj[args[item]] = (obj[args[item]] || 0) + 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }

    // console.log(obj);

    return false;
};


// two pointer method
const areThereDuplicates2P = (...args) => {
    let sorted = args.sort();
    // console.log(sorted);
    // 1,2,3,4,5
    // i j
    //   i j
    //     i j
    //       i j

    let pointerOne = 0;
    let pointerTwo = 1;

    while (pointerTwo < sorted.length) {
        if (sorted[pointerOne] == sorted[pointerTwo]) {
            return true;
        } else {
            pointerOne++;
            pointerTwo++;
        }
    }
    return false;
};