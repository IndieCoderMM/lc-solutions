/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type Stack []*TreeNode   //stack

func postorderTraversal(root *TreeNode) []int {
    ans := []int{}
    stack := Stack{}
    curr := root

    for {
        if len(stack) == 0 && curr == nil {
            break
        }

        if curr != nil {
            ans = append(ans, curr.Val)
            stack.Push(curr)
            curr = curr.Right  
        } else {
            curr = stack.Pop()
            curr = curr.Left
        }
    }

    for i, j := 0, len(ans)-1; i < j; i, j = i+1, j-1 {
        ans[i], ans[j] = ans[j], ans[i]
    }

    return ans
}

func (st *Stack) Push(v *TreeNode) {
   *st = append(*st, v)
}

func (st *Stack) Pop() *TreeNode {
   if len(*st) == 0 {
      return nil
   }
   top := (*st)[len(*st)-1]
   *st = (*st)[:len(*st)-1]
   return top
}

/* DFS */
// func postorderTraversal(root *TreeNode) []int {
//     var dfs func (node *TreeNode) 
//     ans := []int{}

//     dfs = func (node *TreeNode) {
//         if node == nil {
//             return
//         }

//         dfs(node.Left)
//         dfs(node.Right)
//         ans = append(ans, node.Val)
//     }

//     dfs(root)

//     return ans
// }