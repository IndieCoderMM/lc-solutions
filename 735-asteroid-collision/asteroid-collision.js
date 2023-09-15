/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const ans = [];
    const stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            stack.push(asteroids[i]);
            continue;
        }
        
        let outcome = asteroids[i];
        while (stack.length > 0 && outcome) {
            if (stack[stack.length - 1] > Math.abs(outcome)) {
                outcome = null;
            } else if (stack[stack.length - 1] === Math.abs(outcome)) {
                outcome = null;
                stack.pop();
            } else {
                stack.pop();
            }
        }
        if (outcome)
            ans.push(outcome);
    }
    for (let a of stack) ans.push(a);

    return ans;
};