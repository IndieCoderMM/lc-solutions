/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    const validate = (i, j, k, memo={}) => {
        if (k === s3.length) return true;

        if (memo.hasOwnProperty([i, j])) return memo[[i,j]];

        let valid = false;
        if (i < s1.length && s1[i] === s3[k]) {
            valid = valid || validate(i+1, j, k+1, memo)
        }
        if (j < s2.length && s2[j] === s3[k]) {
            valid = valid || validate(i, j+1, k+1, memo)
        }

        memo[[i, j]] = valid;

        return valid;
    }

    return validate(0, 0, 0);
};
