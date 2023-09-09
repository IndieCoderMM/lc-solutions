/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const len = gain.length;
    let maxHeight = 0;
    let curr = 0;
    for (let i = 0; i < len; i++) {
        curr = curr + gain[i];
        maxHeight = Math.max(maxHeight, curr);
    }

    return maxHeight;
};