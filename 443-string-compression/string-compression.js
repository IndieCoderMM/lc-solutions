/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const len = chars.length;
    if (len === 0) return [];

    let s = "";

    for (let i = 0; i < chars.length; i++) {
        const curr = chars[i];
        let j = i+1;

        while (chars[j] === curr) {
            j++;
        }
        const count = j - i;
        s += curr;
        if (count > 1) s += count.toString();
        i += count - 1;
    }

    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }

    for (let i = s.length; i < len; i++) {
        chars.pop();
    }
};

// ["a","a","b","b","c","c","c"] => ["a","2","b","2","c","3"]
// >> 6

// s = "" 
// 1. s << a2
// 2. s << b2
// 3. s << c3
// chars = [a,2,b,2,c,3]
// >> len(chars)

// prev, count
// for each char
// if ch === prev 
//   count += 1
// else
//   if prev s << prev + count
//   prev = ch
//   count = 1;
// return len(s)