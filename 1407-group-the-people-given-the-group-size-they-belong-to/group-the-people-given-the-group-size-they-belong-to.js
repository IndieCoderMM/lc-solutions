/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const bucket = new Map();
    const ans = [];
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        bucket.set(groupSizes[i], [i, ...(bucket.get(groupSizes[i]) || [])]);

        if (bucket.get(size).length === size) {
            ans.push(bucket.get(size));
            bucket.set(groupSizes[i], []);
        }
    };

    return ans;
};