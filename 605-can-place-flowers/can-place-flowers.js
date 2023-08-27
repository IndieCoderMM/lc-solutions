/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n === 0) return true;

    let plantable = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) continue;

        const sum = (i === 0 ? 0 : flowerbed[i-1]) + (i === flowerbed.length - 1 ? 0 : flowerbed[i+1])
        if (sum === 0) {
            plantable += 1;
            flowerbed[i] = 1;
        }
        if (plantable === n) return true;
    }

    return false;
};