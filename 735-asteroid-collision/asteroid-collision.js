/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    const isEmpty = () => stack.length === 0;
    const top = () => stack[stack.length - 1];

    for (let ast of asteroids) {
        let collision = false;
        while (stack.length > 0 && ast < 0 && top() > 0) {
            const prev = stack.pop();
            // both get destroyed
            if (prev === Math.abs(ast)) {
                collision = true;
                break;
            }
            // if greater than curr re-add to stack
            if (prev > Math.abs(ast))  {
                collision = true;
                stack.push(prev);
                break;
            }
        }
        if (collision) continue;
        // No collision or current is moving right
        if (isEmpty() || top() < 0 || ast > 0) {
            stack.push(ast);
        }
    }


    return stack;
};