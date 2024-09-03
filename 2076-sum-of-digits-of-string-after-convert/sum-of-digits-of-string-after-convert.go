func getLucky(s string, k int) int {
    var ans int = 0
    var sum int = 0

    for _, c := range s {
        n := int(c - 96)
        ans += n % 10 + n / 10
    }

    for i:=1; i < k; i++ {
        sum = 0
        for {
            if ans == 0 {
                break
            }

            sum += ans % 10
            ans /= 10
        }
        ans += sum

        if ans < 10 {
            break
        }
    }

    return ans 
}