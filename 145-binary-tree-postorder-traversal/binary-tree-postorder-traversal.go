/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
    var dfs func (node *TreeNode) 
    ans := []int{}

    dfs = func (node *TreeNode) {
        if node == nil {
            return
        }

        dfs(node.Left)
        dfs(node.Right)
        ans = append(ans, node.Val)
    }

    dfs(root)

    return ans
}