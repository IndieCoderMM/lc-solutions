/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const len = nums.length;
    if (nums.filter(n => n === 0).length <= 1) return len - 1;

    let [maxLen, zeroIdx, left] = [0, -1, 0];

    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            left = zeroIdx + 1;
            zeroIdx = i;
        }

        maxLen = Math.max(maxLen, i - left);
    }

    return maxLen;
};