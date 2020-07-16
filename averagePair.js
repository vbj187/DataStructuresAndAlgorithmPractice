// Average Pair

// averagePair([1,2,3],2.5) True
// averagePair([1,3,3,5,6,7,10,12,19],8) True
// averagePair([-1,0,3,4,5,6],4.1) False
// averagePair([],4)

const averagePair = (arr, ave) => {
    if (arr.length == 0) {
        return false;
    }

    // 1,2,3,4,5
    // i j
    // i   j
    // i     j
    // i       j
    //   i j
    //   i   j
    //   i     j

    let pointerOne = 0;
    let pointerTwo = arr.length - 1;

    while (pointerOne < pointerTwo) {
        let average = ((arr[pointerOne] + arr[pointerTwo]) / 2);

        // console.log(average);

        if (average === ave) {
            return true;
        } else if (average < ave) {
            pointerOne++;
        } else {
            pointerTwo--;
        }
    }
    return false;
};

console.log(averagePair([1, 2, 3], 2.5));
// True
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// True
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// False
console.log(averagePair([], 4));
// False