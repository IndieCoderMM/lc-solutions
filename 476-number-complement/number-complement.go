import (
    "fmt"
    "strconv"
)

func findComplement(num int) int {
    bin := strconv.FormatInt(int64(num), 2)    
    binArr := []byte(bin)
    for i, v := range binArr {
        if v == 48 {
            binArr[i] = 49
        } else {
            binArr[i] = 48
        }
    }

    ans,_ := strconv.ParseInt(string(binArr), 2, 64)
    return int(ans)
}