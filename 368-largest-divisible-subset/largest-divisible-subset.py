class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
      nums.sort()
      memo = {}

      def dfs(i: int, prev: int) -> List[int]:
        if (i == len(nums)): return []
        if (i, prev) in memo:
          return memo[(i, prev)]
        
        res = dfs(i+1, prev)
        if nums[i] % prev == 0:
          tmp = [nums[i]] + dfs(i+1, nums[i])
          res = tmp if len(tmp) > len(res) else res

        memo[(i, prev)] = res

        return res
      
      return dfs(0, 1)
         