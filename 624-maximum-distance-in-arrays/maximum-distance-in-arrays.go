func maxDistance(arrays [][]int) int {
    min, max := arrays[0][0], arrays[0][len(arrays[0]) - 1]
    ans := 0

    i := 1
    for {
        if i >= len(arrays) {
            break
        }
        first, last := arrays[i][0], arrays[i][len(arrays[i]) - 1]

        dist1, dist2 := max - first, last - min

        min = Min(min, first)
        max = Max(max, last)

        ans = Max(ans, Max(dist1, dist2))
        i++
    }

    return ans
}

func Min(a, b int) int {
    if b < a {
        return b
    }

    return a
}

func Max(a, b int) int {
    if b > a {
        return b
    }

    return a
}
