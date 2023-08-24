/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1[0] !== str2[0]) return "";

    let ans = [];
    // loop for shorter length times
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
         ans.push(str1[i]);
        if (str1[i] !== str2[i]) break;
    }

    while (ans.length > 0) {
        if (str1.length % ans.length || str2.length % ans.length) {
            ans.pop();
            continue;
        }
        let [i, j] = [0, 0];
        while (i < Math.max(str1.length, str2.length)) {
            if (i < str1.length) {
                if (str1[i] !== ans[j]) {
                    break;
                }
            }
            if (i < str2.length) {
                if (str2[i] !== ans[j]) {
                    break;
                }
            }
            i += 1;
            j = (j + 1) % ans.length;
        }
        if (i === Math.max(str1.length, str2.length)) {
            return ans.join('');
        }
        ans.pop();
    }
    return ans.join('');
};

// divisor = ""
// loop i; i < minLen(str1, str2); i++
// join to divisor if i1 == i2: divisor += i1; 
// if i1 != i2: 
//   
