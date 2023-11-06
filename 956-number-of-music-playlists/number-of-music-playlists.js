/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
   const mod = (num) => num % (10**9 + 7);
   const memo = Array.from({length: goal + 1}, () => new Array(n + 1).fill(-1));

   const count = (curr, uniqueSongs) => {
    if (curr === goal && uniqueSongs === n) return 1;
    if (curr === goal || uniqueSongs > n) return 0;

    const row = curr, col = uniqueSongs;

    if (memo[row][col] !== -1) {
      return memo[row][col];
    }

    let res = mod(count(curr + 1, uniqueSongs + 1) * (n - uniqueSongs));

    if (uniqueSongs > k) {
      res += mod(count(curr + 1, uniqueSongs) * (uniqueSongs - k));
    }

    memo[row][col] = mod(res);
    
    return memo[row][col];
   } 

   return count(0, 0);
};