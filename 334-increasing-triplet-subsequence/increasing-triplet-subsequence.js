/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   let [a, b] = [Infinity, Infinity];
   
   for (let i = 0; i < nums.length; i++) {
       const n = nums[i];
       if (n > b) return true;
       if (n > a && n <= b) b = n;
       else a = n;
   } 

   return false;
};