/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    let ans = [0, 0];
    const getLongestLen = (i, j) => {
        let left = i, right = j;
        while (left >= 0 && right < len) {
            if (s[left] !== s[right]) break;
            left -= 1;
            right += 1;
        }

        return right - left - 1;
    }

    for (let i = 0; i < len; i++) {
        const oddLen = getLongestLen(i, i);
        if (oddLen > ans[1] - ans[0] + 1) {
            ans[0] = i - Math.floor(oddLen / 2);
            ans[1] = i + Math.floor(oddLen / 2);
        }
        const evenLen = getLongestLen(i, i + 1);
        if (evenLen > ans[1] - ans[0] + 1) {
            ans[0] = i - Math.floor(evenLen / 2) + 1;
            ans[1] = i + Math.floor(evenLen / 2);
        }
    }

    return s.substring(ans[0], ans[1] + 1);
};