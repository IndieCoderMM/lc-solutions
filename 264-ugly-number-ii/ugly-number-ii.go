func nthUglyNumber(n int) int {
    nums := []int{1}

    i2, i3, i5 := 0, 0, 0

    for i := 1; i < n; i++ {
        min := getMin(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5)

        nums = append(nums, min)

        if min == nums[i2] * 2 {
            i2++
        }
        if min == nums[i3] * 3 {
            i3++
        }
        if min == nums[i5] * 5 {
            i5++
        }
    }

    return nums[n - 1]
}

func getMin(a, b, c int) int {
    min := a

    if b < min {
        min = b
    }

    if c < min {
        min = c
    }

    return min
}