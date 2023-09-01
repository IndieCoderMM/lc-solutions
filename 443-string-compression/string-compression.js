/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // let chars = ["a","a","b","b","c","c","c"]
    const len = chars.length; // len = 7
    if (len === 0) return [];

    let idx = 0;
    let i = 0;

    /* running first loop */
    while (i < len) {
        const curr = chars[i]; // curr = 'a'
        let j = i+1; // j = 1

        /* increment j till different char is found */
        while (chars[j] === curr) {
            j++;
        }
        // j = 2
        const count = j - i; // count = 2

        chars[idx] = curr; // chars = ["a","a","b","b","c","c","c"]
        idx += 1; // idx = 1

        if (count > 1) {
            for (let c of count.toString()) {
                chars[idx] = c;
                idx += 1;
            }
        }
        // chars = ["a","2","b","b","c","c","c"], idx = 2
        i += count; // i = 2
    }


    chars = chars.slice(0, idx) // ["a","2","b","2","c","3"]

    return chars.length;
};