import(
    "fmt"
    "strings"
    "strconv"
)

func getLucky(s string, k int) int {
    var nums strings.Builder
    var ans int = 0

    for _, c := range s {
        n := int(c - 96)
        nums.WriteString(strconv.Itoa(n))
    }

    curr := nums.String()
    for i := 0; i < k; i++ {
        sum := 0
        for _, c := range curr {
            sum += int(c - 48)
        }
        ans = sum
        curr = strconv.Itoa(ans)
    }

    return ans 
}