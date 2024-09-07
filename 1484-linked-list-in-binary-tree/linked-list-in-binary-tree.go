/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubPath(head *ListNode, root *TreeNode) bool {
    if isValid(head, root) {
        return true
    }

    if root == nil {
        return false
    }

    return isSubPath(head, root.Left) || isSubPath(head, root.Right)
}

func isValid(head *ListNode, node *TreeNode) bool {
    if head == nil {
        return true
    }

    if node == nil || node.Val != head.Val {
        return false
    }

    return isValid(head.Next, node.Left) || isValid(head.Next, node.Right)
}