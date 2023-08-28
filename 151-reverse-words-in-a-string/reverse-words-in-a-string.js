/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [];

    // str to arr
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ' && (s[i+1] === ' ' || i === s.length - 1 || arr.length === 0)) 
            continue;
        arr.push(s[i]);
    }

    reverse(arr, 0, arr.length - 1);

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== ' ') continue;
        reverse(arr, i, j-1);

        i = j + 1;
    }

    reverse(arr, i, arr.length - 1);


    return arr.join('');
};

const reverse = (arr, from, to) => {
    let [i, j] = [from, to];
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}



// steps
// 1. reverse the whole str
// i, j = start, end
// swap(i, j)

// 2. reverse each word
// i = start
// loop str |j|
// if j == space
//   reverse(i to j-1) 
//   update(i);