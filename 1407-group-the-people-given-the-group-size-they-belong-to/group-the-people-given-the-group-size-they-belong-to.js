/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const bucket = new Map();
    const ans = [];
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i];
        if (bucket.has(size))
            bucket.set(size, [i, ...bucket.get(size)]);
        else bucket.set(size, [i]);


        if (bucket.get(size).length === size) {
            ans.push(bucket.get(size));
            bucket.set(size, []);
        }
    };

    return ans;
};