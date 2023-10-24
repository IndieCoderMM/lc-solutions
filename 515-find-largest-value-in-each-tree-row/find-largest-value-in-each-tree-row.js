/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    const maxValues = [];

    const queue = [root];

    while (queue.length > 0) {
        const len = queue.length;
        let maxVal = -Infinity;

        for (let i = 0 ; i < len; i++) {
            const node = queue.shift();
            maxVal = Math.max(node.val, maxVal);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        maxValues.push(maxVal);
    }
   

   return maxValues;
};