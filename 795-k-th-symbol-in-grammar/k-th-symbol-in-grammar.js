/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    let num = 0;
    let left = 0, right = (2 ** (n-1)) - 1;
    for (let i = 1; i < n; i++) {
        const mid = Math.floor((left + right) / 2);

        if (k - 1 <= mid) {
            right = mid; 
        } else {
            left = mid + 1;
            num = num === 0 ? 1 : 0;
        }
    }

    return num;
};

/**
n = 4, k = 5
left = 0; right = 7
mid = 3
       0
      0 1
    0 1 1 0
0 1 1 0 1 0 0 1

 */