/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map = new Map();
    for (const n of nums1) {
        map.set(n, 1);
    }

    for (const n of new Set(nums2)) {
        map.set(n, (map.get(n) || 0) -1);
    }
    
    const ans = [[], []];

    for (const k of map.keys()) {
        if (map.get(k) === 1) ans[0].push(k);
        else if (map.get(k) < 0) ans[1].push(k);
    }   

    return ans;
};