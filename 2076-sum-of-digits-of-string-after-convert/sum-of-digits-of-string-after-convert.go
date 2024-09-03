import(
    "fmt"
)

func getLucky(s string, k int) int {
    var ans int = 0

    for _, c := range s {
        n := int(c - 96)
        if n >= 10 {
            ans += n % 10
            ans += n / 10
        } else {
            ans += n
        }
    }

    for i:=1; i < k; i++ {
        sum := 0
        for {
            if ans == 0 {
                break
            }

            sum += ans % 10
            ans /= 10
        }
        ans = sum + ans
    }

    return ans 
}