/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
   let [a, b] = [Infinity, Infinity];
   
   for (const n of nums) {
       console.log(a, b, n);
       if (n > b) return true;
       if (n > a && n <= b) b = n;
       else a = n;
   } 

   return false;
};