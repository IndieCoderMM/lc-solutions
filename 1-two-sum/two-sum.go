func twoSum(nums []int, target int) []int {
    dict := map[int]int{}

    for i, n := range nums {
        j, ok := dict[target-n]

        if ok {
            return []int{i,j}
        }

        dict[n] = i
    }

    return []int{}
}

