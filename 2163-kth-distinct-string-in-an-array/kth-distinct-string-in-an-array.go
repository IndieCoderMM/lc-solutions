func kthDistinct(arr []string, k int) string {
    dict := make(map[string]int)
    values := make([]string, len(arr))

    for i, s := range arr {
        _, dupe := dict[s]
        values[i] = s
        if dupe {
            dict[s] = -1
            continue
        } 
        dict[s] = i
    }

    ans := 0
    for _, s := range values {
        if dict[s] == -1 {
            continue
        }
        ans++
        if ans == k {
            return s
        }
    }

    return ""
}