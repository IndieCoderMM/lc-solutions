/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1];

    for (let i = 1; i <= rowIndex; i++) {
        const row = new Array(result.length + 1).fill(0);
        for (let j = 0; j < result.length; j++) {
            row[j] += result[j];
            if (j < row.length) row[j+1] += result[j];
        }

        result = row;
    }

    return result;
};