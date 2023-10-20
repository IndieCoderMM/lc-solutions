/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    const map = new Map();
    for (let [prev, next] of relations) {
        if (map.has(prev)) map.get(prev).push(next);
        else map.set(prev, [next]);
    }
    // relations = [[1,5],[2,5],[3,5],[3,4],[4,5]]
    // map => { 1 -> [5], 2 -> [5], 3 -> [5, 4], 4 -> [5]}
    const maxTime = new Map();

    const dfs = (k) => {
        if (maxTime.has(k)) return maxTime.get(k);

        let res = time[k - 1];
        if (map.has(k)) {
            for (let next of map.get(k)) {
                res = Math.max(res, time[k - 1] + dfs(next))
            }
        }
        maxTime.set(k, res);

        return res;
    }

    for (let i = 1; i < n + 1; i++) {
        dfs(i);
    }

    return Math.max(...maxTime.values());
};