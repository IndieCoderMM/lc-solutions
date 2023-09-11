/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const bucket = new Map();
    for (let i = 0; i < groupSizes.length; i++) {
        if (bucket.has(groupSizes[i])) {
            bucket.set(groupSizes[i], [i, ...bucket.get(groupSizes[i])]);
        } else {
            bucket.set(groupSizes[i], [i])
        }
    };
    const ans = [];
    for (let k of bucket.keys()) {
        const ids = bucket.get(k);
        let curr = [];
        for (let i of ids) {
            curr.push(i);
            if (curr.length === k) {
                ans.push(curr);
                curr = [];
            }
        }
    }

    return ans;
};