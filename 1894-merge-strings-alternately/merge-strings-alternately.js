/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = "";
    let [i, j] = [0, 0];

    while (i < word1.length && j < word2.length) {
        ans += word1[i] + word2[j];
        i += 1;
        j += 1;
    }
    // append the rest
    while (i < word1.length) {
        ans += word1[i];
        i += 1;
    }
    while (j < word2.length) {
        ans += word2[j];
        j += 1;
    }

    return ans;
};

// two-pointers
// i, j
// ans = ""
// while i < word1.len or j < word2.len
//  ans += [i] + [j]; i++; j++;
// while i < word1.len
//  ans += [i]; j++
// while j < word2.len
//  ans += [j]; j++