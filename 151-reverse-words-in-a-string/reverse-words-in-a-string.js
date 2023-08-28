/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split('');

    reverse(arr, 0, arr.length - 1);

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== ' ') continue;

        reverse(arr, i, j-1);
        i = j + 1;
    }
    
    reverse(arr, i, arr.length - 1);

    let ans = ""
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
        while (arr[i] === ' ' && arr[i+1] === ' ' ) i++;
    }
    
    return ans;
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