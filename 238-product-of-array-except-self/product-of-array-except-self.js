/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const ans = [];
    ans[0] = 1;

    for (let i = 1; i < len; i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }

    let right = 1;
    for (let i = len - 1; i > -1; i--) {
        ans[i] *= right;
        right *= nums[i];
    }

    return ans;
};
