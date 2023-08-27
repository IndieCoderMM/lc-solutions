/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    const helper = [0, ...flowerbed, 0];
    let plantable = 0;

    for (let i = 1; i < helper.length-1; i++) {
        if (helper[i-1] + helper[i] + helper[i+1] === 0) {
            plantable += 1;
            helper[i] = 1;
        }
        if (plantable === n) return true;
    }

    return false;
};