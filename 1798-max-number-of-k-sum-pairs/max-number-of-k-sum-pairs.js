/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);
    let [left, right] = [0, nums.length - 1];
    let ans = 0;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            left++;
            right--;
            ans++;
            continue;
        }
        if (sum < k) left++;
        else right--;
    }

    return ans;
};