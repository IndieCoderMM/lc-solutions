/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    for (let len = s.length; len > 0; len--) {
        for (let i = 0; i + len <= s.length; i++) {
            let left = i, right = i + len - 1;
            let isPalindrome = true;
            while (left < right) {
                if (s[left] !== s[right]) {
                    isPalindrome = false;
                    break;
                }
                left += 1;
                right -= 1;
            }

            if (isPalindrome) {
                return s.substring(i, i + len);
            }
        }
    }

    return "";
};