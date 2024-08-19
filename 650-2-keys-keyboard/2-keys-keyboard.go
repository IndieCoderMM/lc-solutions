func minSteps(n int) int {
   if n == 1 {
    return 0
   } 

   cache := make(map[[2]int]int)

    var getMinOps func (count, copied int) int


    getMinOps = func (count, copied int) int {
        if count == n {
            return 0
        }

        if count > n {
            return 9999
        }

        key := [2]int{count, copied}

        if v, ok := cache[key]; ok {
            return v
        }

        // Paste the copied (+1 op)
        a := 1 + getMinOps(count + copied, copied)

        // Copy & paste (+2 op)
        b := 2 + getMinOps(count * 2, count)

        cache[key] = min(a, b)

        return cache[key]
    }

    return 1 + getMinOps(1, 1)
}
