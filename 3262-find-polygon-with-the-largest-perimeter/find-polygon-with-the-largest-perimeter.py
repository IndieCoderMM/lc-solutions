class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
      sorted_nums = self.mergeSort(nums)
      res = -1
      sum = 0

      for n in sorted_nums:
        if sum > n:
          res = sum + n
        
        sum +=  n

      return res

    
    def mergeSort(self, nums: List[int]):
      if (len(nums) <= 1): return nums

      mid = len(nums) // 2
      left = self.mergeSort(nums[0:mid])
      right = self.mergeSort(nums[mid:])

      return self.merge(left, right)

    def merge(self, left: List[int], right: List[int]):
      ans = []
      i, j = 0, 0
      while (i < len(left) and j < len(right)):
        if (left[i] <= right[j]):
          ans.append(left[i])
          i += 1
        else:
          ans.append(right[j])
          j += 1
      
      while (i < len(left)):
        ans.append(left[i])
        i += 1
      
      while (j < len(right)):
        ans.append(right[j])
        j += 1

      return ans
