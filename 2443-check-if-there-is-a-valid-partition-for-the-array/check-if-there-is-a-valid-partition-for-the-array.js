/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function(nums) {
  const len = nums.length;
  const validTwo = (i) => nums[i] === nums[i + 1];

  if (len === 2) return validTwo(0);

  const validThree = (i) => {
    const case1 = (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]);
    const case2 = (nums[i] + 1 === nums[i + 1] && nums[i] + 2 === nums[i + 2]);

    return case1 || case2;
  }

  const dp = [validThree(len - 3), validTwo(len - 2), false];

  for (let i = len - 4; i >= 0; i--) {
    let valid = validTwo(i) && dp[1];
    valid ||= validThree(i) && dp[2];

    [dp[0], dp[1], dp[2]] = [valid, dp[0], dp[1]];
  }

  return dp[0];
};