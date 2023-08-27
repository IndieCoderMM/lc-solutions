/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    if (stones[1] - stones[0] !== 1) return false;
    const memo = Array.from({ length: stones.length }, () => Array.from({length: stones.length}, () => -1));
    const map = new Map();
    
    const helper = (i, j) => {
        if (i === stones.length - 1) return true;
        if (memo[i][j] !== -1) return memo[i][j];

        const pos = stones[i];
        const j0 = map.has(pos + j) ? helper(map.get(pos + j), j) : false;
        const j1 = (j > 1 && map.has(pos + j - 1)) ? helper(map.get(pos + j - 1), j - 1) : false;
        const j2 = (map.has(pos + j + 1)) ?  helper(map.get(pos + j + 1), j + 1) : false ;

        memo[i][j] = j0 || j1 || j2;

        return memo[i][j];
    }

    for (let i = 0; i < stones.length; i++) {
        map.set(stones[i], i)
    }

    return helper(1, 1);
};