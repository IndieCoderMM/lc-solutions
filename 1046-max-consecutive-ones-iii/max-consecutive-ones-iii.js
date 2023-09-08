/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    const len = nums.length;
    let [maxLen, zeros, left] = [0, 0, 0, 0];

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeros++;
        }

        while (zeros > k) {
            if (nums[left] === 0) zeros--;
            left++;
        }

        maxLen = Math.max(maxLen, i - left + 1)
    }

    return maxLen;
};