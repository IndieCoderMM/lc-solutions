/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skippedI = 0, skippedJ = 0;


    while (i >= 0 || j >= 0) {
        while (i >= 0) {
           if (s[i] === '#') {
            skippedI +=1;
            i--;
           }
           else if (skippedI > 0) {
            skippedI -= 1;
            i--;
           }
           else break;
        }

        while (j >= 0) {
            if (t[j] === '#') {
                skippedJ += 1;
                j--;
            }
            else if (skippedJ > 0) 
            {
                skippedJ -= 1;
                j--;
            }
            else break;
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if ((i >= 0 && j < 0) || (i < 0 && j >= 0)) return false;
        i--;
        j--;
    }

    return true;
};