/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const rQueue = [];
    const dQueue = [];

    for (let j = 0; j < senate.length; j++) {
      if (senate[j] === 'R') rQueue.push(j);
      else dQueue.push(j);
    }

    while (rQueue.length > 0 && dQueue.length > 0) {
      if (rQueue[0] < dQueue[0]) {
        dQueue.shift();
        rQueue.push(rQueue.shift() + senate.length);
      } else {
        rQueue.shift();
        dQueue.push(dQueue.shift() + senate.length);
      }

    }
    return rQueue.length > 0 ? "Radiant" : "Dire";
}
// Input: senate = "RDDRRD"
// Output: "Dire"