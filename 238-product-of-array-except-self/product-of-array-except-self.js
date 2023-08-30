/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const len = nums.length;
    const ans = [];
    const left = [];
    const right =[];
    left[0] = 1;
    right[len-1] = 1;
    for (let i = 1; i < len; i++) {
        left[i] = nums[i-1] * left[i-1];
    }

    for (let i = len - 2; i > -1; i--) {
        right[i] = nums[i+1] * right[i+1];
    }

    for (let i = 0; i < len; i++) {
        const product = left[i] * right[i];
        ans.push(product);
    }


    return ans;
};

// a func to calculate product of nums[i] with n - i nums
// func (i, to, memo) 
//   if i === n
// ans[i] = nums[i+1] * ...nums[n-1]