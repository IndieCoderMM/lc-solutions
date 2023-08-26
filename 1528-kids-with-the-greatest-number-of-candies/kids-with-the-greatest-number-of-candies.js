/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const greatest = Math.max(...candies);
    const ans = new Array(candies.length).fill(false);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest)  
            ans[i] = true;
    }

    return ans;
};