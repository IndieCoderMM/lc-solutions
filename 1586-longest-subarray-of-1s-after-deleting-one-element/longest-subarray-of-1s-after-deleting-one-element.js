/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const len = nums.length;
    if (nums.filter(n => n === 0).length === 1) return len - 1;

    let [maxLen, zeros, left] = [0, 0, 0];

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            zeros++;
        }

        while (zeros > 1 && left < len) {
            if (nums[left] === 0) zeros--;
            left++;
        }

        maxLen = Math.max(maxLen, i - left);
    }

    return maxLen;
};