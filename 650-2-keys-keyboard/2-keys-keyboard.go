func minSteps(n int) int {
   if n == 1 {
    return 0
   } 

   cache := make(map[[2]int]int)

    return 1 + getMinOps(1, 1, n, cache)
}

func getMinOps(count, copied, target int, cache map[[2]int]int) int {
    if count == target {
        return 0
    }

    if count > target {
        return 9999
    }

    key := [2]int{count, copied}

    if v, ok := cache[key]; ok {
        return v
    }

    // Paste the copied (+1 op)
    a := 1 + getMinOps(count + copied, copied, target, cache)

    // Copy & paste (+2 op)
    b := 2 + getMinOps(count * 2, count, target, cache)

    cache[key] = min(a, b)

    return cache[key]
}

