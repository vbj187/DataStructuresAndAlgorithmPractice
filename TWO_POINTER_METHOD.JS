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
