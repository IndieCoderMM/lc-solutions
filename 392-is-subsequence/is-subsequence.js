/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;

    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] !== t[j]) continue;

        i += 1;
        if (i === s.length) return true;
    }

    return false;
};