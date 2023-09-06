/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const len = s.length;
    let maxCount = 0;

    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) 
            maxCount++;
    }

    let curr = maxCount;
    for (let i = k; i < len; i++) {
        if (isVowel(s[i-k])) {
            curr--;
        }
        if (isVowel(s[i])) {
            curr++;
            if (curr > maxCount) maxCount = curr;
        }
    }

    return maxCount;
};

const isVowel = (char) => (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')