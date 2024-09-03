import(
    "fmt"
    "strings"
    "strconv"
)

func getLucky(s string, k int) int {
    var nums strings.Builder
    ans := 0

    for _, c := range s {
        n := int(c - 96)
        nums.WriteString(strconv.Itoa(n))
    }

    fmt.Println(nums.String()) 

    curr := nums.String()
    for i := 0; i < k; i++ {
        sum := 0
        for _, c := range curr {
            sum += int(c - 48)
        }
        ans = sum
        curr = strconv.Itoa(ans)
    fmt.Println(curr) 
    }

    return ans 
}

func getValue(n int, pos int) int {
    tens := 1
    for j := 0; j < pos; j++ {
        tens *= 10
    } 

    return n * tens
}