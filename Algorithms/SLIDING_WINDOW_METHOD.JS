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
    return max;
}

// [4, 2, 1, 6, 2], 2 --- 8

function maxSubarraySumSliderWindow(arr, num) {

    if (arr.length < num) {
        return null;
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

// console.log(maxSubarraySum([4, 2, 1, 6, 2], 2));

// console.log(maxSubarraySumSliderWindow([4, 2, 1, 6, 2], 2));;

// 'hellothere' 