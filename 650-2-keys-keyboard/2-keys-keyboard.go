func minSteps(n int) int {
   if n == 1 {
    return 0
   } 

    return 1 + getMinOps(1, 1, n)
}

func getMinOps(count, copied, target int) int {
    if count == target {
        return 0
    }

    if count > target {
        return 9999
    }

    // Paste the copied (+1 op)
    a := 1 + getMinOps(count + copied, copied, target)

    // Copy & paste (+2 op)
    b := 2 + getMinOps(count * 2, count, target)

    return min(a, b)
}