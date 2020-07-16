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


// Two pointer pattern

// [-3,-2,-1,0,1,4] - pair where the sum is zero.
//      i	  j

function sumZero(arr) {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }

}

// [1, 2, 3, 4, 5, 6, 4, 5, 5, 6] - count Unique values --- 6
// i           j;


function countUniqueValues() {

    if (arr.length === 0) return null;

    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}


// Sliding window pattern

// [4, 2, 1, 6, 2], 2 --- 13

// [], 4

function maxSubarraySum(arr, n) {

    if (n > arr.length) return null;

    let max = -Infinity;

    for (var i = 0; i < arr.length - n + 1; i++) {

        let temp = 0;
        for (var j = 0; j < n; j++) {
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }
}

// [4, 2, 1, 6, 2], 2 --- 8

function maxSubarraySumSliderWindow(arr, num) {

    if (arr.length < num) {
        return;
    }

    let temp = 0;
    let max = 0;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }

    temp = max;

    for (let j = num; j < arr.length; j++) {

        temp = temp - arr[j - num] + arr[j];

        max = Math.max(temp, max);

    }

    return max;

}

// 'hellothere' 













