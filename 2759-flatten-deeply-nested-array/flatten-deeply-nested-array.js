/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const ans = [];

    const fn = (a, depth=0) => {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i]) && depth < n) {
                fn(a[i], depth+1);
            } else ans.push(a[i]);
        }
    }

   fn(arr);

   return ans;
};