/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const counter = new Map();
    const freq = new Set();
    let deleted = 0;
    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1)
    }

    for (let char of counter.keys()) {
        while (freq.has(counter.get(char)) && counter.get(char) > 0) {
            counter.set(char, (counter.get(char) - 1));
            deleted++;
        } 
        freq.add(counter.get(char));
    }

    return deleted;
};
