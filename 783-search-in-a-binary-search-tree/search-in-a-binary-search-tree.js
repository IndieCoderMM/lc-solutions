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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let curr = root;
    while (curr) {
        if (curr.val === val) return curr;
        if (curr.val < val) curr = curr.right;
        else curr = curr.left;
    }

    return curr;
};