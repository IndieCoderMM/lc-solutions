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
   let row = [root];

   while (row.length > 0) {
       const maxV = Math.max(...row.map(r => r.val));
        maxValues.push(maxV);
        const nextRow = [];
        for (let node of row) {
            if (node.left) nextRow.push(node.left);
            if (node.right) nextRow.push(node.right);
        }
        row = nextRow;
   }

   return maxValues;
};