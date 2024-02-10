class Solution:
    def canJump(self, nums: List[int]) -> bool:
      target = len(nums) - 1

      for i in range(len(nums) - 2, -1, -1):
        target = i if (i+ nums[i] >= target) else target

      return target == 0
        