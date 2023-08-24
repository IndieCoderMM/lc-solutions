/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1[0] !== str2[0]) return "";

    return str1.length > str2.length ? divideStr(str1, str2) : divideStr(str2, str1);
};

const divideStr = (longStr, str) => {
    let ans = str.split('');
    while (ans.length > 0) {
        if (longStr.length % ans.length || str.length % ans.length) {
            ans.pop();
            continue;
        }
        let j = 0;
        for (let i = 0; i < longStr.length; i++) {
            if (longStr[i] !== ans[j]) break;
            if (i < str.length && str[i] !== ans[j]) break;
            j = (j+1) % ans.length;
            if (i === longStr.length - 1) return ans.join('');
        }
        ans.pop();
    }

    return ans.join('');
}

// divisor = ""
// loop i; i < minLen(str1, str2); i++
// join to divisor if i1 == i2: divisor += i1; 
// if i1 != i2: 
//   
