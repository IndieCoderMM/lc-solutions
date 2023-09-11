/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.filter(n => n === 0).length <= 1) 
        return nums.length - 1;

    let [maxLen, zeroIdx, left] = [0, -1, 0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            left = zeroIdx + 1;
            zeroIdx = i;
        }

        maxLen = Math.max(maxLen, i - left);
    }

    return maxLen;
};