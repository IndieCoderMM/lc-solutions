/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
    const memo = new Map();
    const dfs = (i) => {
        if (i === nums.length) return true;

        if (memo.has(i)) return memo.get(i);

        let valid = false;
        if (i < nums.length - 1 && nums[i] === nums[i+1]) {
            valid ||= dfs(i+2);
        }
        if (i < nums.length - 2) {
            if ((nums[i] === nums[i+1] && nums[i] === nums[i+2]) || (nums[i] + 1 === nums[i+1] && nums[i] + 2 === nums[i+2])) {
                valid ||= dfs(i+3);
            }
        } 

        memo.set(i, valid);

        return valid;
    }

    return dfs(0);
};