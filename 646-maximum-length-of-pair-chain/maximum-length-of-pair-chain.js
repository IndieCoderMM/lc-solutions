/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let ans = 0;
    let tail = -Infinity;

    pairs.sort((a, b) =>  a[1] - b[1]);

    for (let pair of pairs) {
        if (pair[0] > tail) {
            ans += 1;
            tail = pair[1];
        }
    }

    return ans;
};