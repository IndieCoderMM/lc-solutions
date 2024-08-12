import "fmt"

func twoSum(nums []int, target int) []int {
    dict := map[int]int{}

    for i, n := range nums {
        j, ok := dict[n]

        if ok {
            return []int{i,j}
        }

        dict[target-n] = i
    }

    return []int{}
}

