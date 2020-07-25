// two array - [1,2,3], [4,1,9] - every value in the array has its corresponding value squared in the second array.

// [1, 2, 1], [4] - False

// [1, 2, 3], [1, 4] - False

// FirstArr - [1, 2, 3], SecondArr - [4, 1, 9].

// if length of arrays differ then return false.

// first array loop, second array inner loop. if square not found return false.

function Same(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        // ---- n

        const index = arr2.indexOf(arr1[i] ** 2);
        // ---- n

        if (index === -1) {
            return false;
        }

        arr2.splice(index, 1);

    }

    return true;
}

// [1,2,3,1], [4,1,9,1]

// {'1':2, '2':1, '3':1}

// {'4':1, '1':2, '9':1}


function Same(arr1, arr2) {

    if (arr1.length !== arr2.length) { return false; }

    const obj1 = {};
    const obj2 = {};

    for (const val of arr1) {
        // ----------------------------- n
        obj1[val] = (obj1[val] || 0) + 1;
    }

    for (const val of arr2) {
        // ------------------------------ n
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for (const key in obj1) {
        // ------------------------------ n
        if (!(key ** 2 in obj2)) {
            return false;
        }

        if (obj1[key] !== obj2[key ** 2]) {
            return false;
        }
    }

    return true;
}