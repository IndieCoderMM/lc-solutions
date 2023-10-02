/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const size = grid.length;
    const rowMap = new Map();
    const colMap = new Map();
    let pairs = 0;

    for (let i = 0; i < size; i++) {
        const rowKey = grid[i].join('-');
        rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
    }

    for (let i = 0; i < size; i++) {
        const colKey = grid.map(row => row[i]).join('-');
        colMap.set(colKey, (colMap.get(colKey) || 0) + 1);
    }

    for (let [k, v] of rowMap.entries()) {
        if (colMap.has(k)) {
            pairs += colMap.get(k) * v;
        }
    }

    return pairs;
};

