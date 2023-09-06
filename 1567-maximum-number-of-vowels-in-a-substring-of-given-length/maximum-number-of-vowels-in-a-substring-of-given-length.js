/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxCount = 0;

    const vowels = 'aeiou';
    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) 
            maxCount++;
    }
    let curr = maxCount;
    for (let i = k; i < s.length; i++) {
        if (vowels.includes(s[i-k])) {
            curr--;
        }
        if (vowels.includes(s[i])) {
            curr++;
            if (curr > maxCount) maxCount = curr;
        }
    }

    return maxCount;
};