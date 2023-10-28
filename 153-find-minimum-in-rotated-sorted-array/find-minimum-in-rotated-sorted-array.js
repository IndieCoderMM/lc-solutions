/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = Infinity;
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        min = Math.min(nums[mid], min);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else right = mid - 1;
    }

    return Math.min(nums[left], min);
};
