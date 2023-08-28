/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let ans = s.split('');
    let [i, j] = [0, ans.length - 1];

    while (i < j) {
        while (!isVowel(ans[i]) && i < j) {
            i += 1;
        }
        while (!isVowel(ans[j]) && i < j) {
            j -= 1;
        }
        if ( i >= j) break;
        const temp = ans[j];
        ans[j] = ans[i];
        ans[i] = temp;
        i += 1;
        j -= 1;
    }

    return ans.join('');
};

const isVowel = (c) => 'aeiouAEIOU'.includes(c);