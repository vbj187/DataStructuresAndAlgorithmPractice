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