/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let right = nums.reduce((n, s) => s + n, 0)
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > 0)
            left += nums[i-1];
        right -= nums[i]
        if (left === right) return i;
    }

    return -1;
};