func kthDistinct(arr []string, k int) string {
    dict := make(map[string]int, len(arr))

    for _, s := range arr {
        dict[s]++
    }

    counter := 0
    for _, s := range arr {
        if dict[s] > 1 {
            continue
        }
        counter++
        if counter == k {
            return s
        }
    }

    return ""
}