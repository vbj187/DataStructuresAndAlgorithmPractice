// maxSubarraySum([100, 200, 300, 400], 2);                 >> 700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);       >> 39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);                >> 5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);      >> 5
// maxSubarraySum([2, 3], 3);                               >> null

// SLIDING WINDOW METHOD

const maxSubarraySum = (arr, sum) => {
    if (arr.length < sum) {
        return null;
    }

    let temp = 0;
    let max = 0;

    for (let i = 0; i < sum; i++) {
        max += arr[i];
    }

    temp = max;

    for (let j = sum; j < arr.length; j++) {
        temp = temp - arr[j - sum] + arr[j];
        max = Math.max(temp, max);
    }
    return max;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
// >> 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
//  >> 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
// >> 5;
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// >> 5;
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
// >> 5;
console.log(maxSubarraySum([2, 3], 3));
// >> null;