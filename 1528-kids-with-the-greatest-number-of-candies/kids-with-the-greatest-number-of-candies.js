/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies);
    const ans = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest)  
            ans[i] = true;
        else ans[i] = false;
    }

    return ans;
};