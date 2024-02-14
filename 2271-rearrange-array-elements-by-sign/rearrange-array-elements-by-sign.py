class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
      ans = [0] * len(nums)
      i, j = 0, 1

      for k in range(len(nums)):
        if (nums[k] > 0):
          ans[i] = nums[k]
          i += 2
        else:
          ans[j] = nums[k]
          j += 2
      
      return ans