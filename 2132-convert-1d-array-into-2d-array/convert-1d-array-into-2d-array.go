func construct2DArray(original []int, m int, n int) [][]int {
    if len(original) != m * n {
        return [][]int{}
    }    

    ans := [][]int{}
    for i := 0; i < len(original); i += n {
        arr := original[i:i+n]
        ans = append(ans, arr)
    }

    return ans
}