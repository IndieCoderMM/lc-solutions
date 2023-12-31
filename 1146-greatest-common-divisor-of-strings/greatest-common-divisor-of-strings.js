/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1+str2 !== str2+str1) return "";

    return findGCDByLen(str1, str2);
};

const findGCDByLen =  (str1, str2) => {
    const gcd = (a, b) => {
        if (b === 0) return Math.abs(a);
        return gcd(b, a % b);
    }
    
    const maxLen = gcd(str1.length, str2.length);
    return str1.slice(0, maxLen);
}

/* String functions 

const findGCD = (longStr, str) => {
    for (let i = str.length; i > 0; i--) {
        if (longStr.length % i || str.length % i) continue;
        const curr = longStr.slice(0, i);
        const [n1, n2] = [longStr.length / i, str.length / i];

        if (longStr === curr.repeat(n1) && str === curr.repeat(n2)) return curr;
    }

    return "";
}
-----------------------*/

/* Manual check 

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

    return "";
}
------------------*/
