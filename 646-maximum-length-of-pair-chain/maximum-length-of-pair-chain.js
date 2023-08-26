/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    let ans = 0;
    let tail = -Infinity;

    pairs.sort((a, b) => {
        const [a1, a2] = a;
        const [b1, b2] = b;

        if (a2 < b2) return -1;
        return 1;
    });

    for (let pair of pairs) {
        if (pair[0] > tail) {
            ans += 1;
            tail = pair[1];
        }
    }

    return ans;
};