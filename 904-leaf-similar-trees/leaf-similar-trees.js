/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafs1 = getLeafNodes(root1);
    const leafs2 = getLeafNodes(root2);
    return JSON.stringify(leafs1) == JSON.stringify(leafs2);
};

const getLeafNodes = (node) => {
    const leafs = [];
    const stack = [node];

    while (stack.length > 0) {
        let current = stack.pop();
        if (!current.left && !current.right) 
            leafs.push(current.val);
        if (current.right) stack.push(current.right);

        if (current.left) stack.push(current.left);
    }

    return leafs;
}