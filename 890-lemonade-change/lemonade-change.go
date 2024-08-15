func lemonadeChange(bills []int) bool {
    fives := 0
    tens := 0

    for _, b := range bills {
        if b == 10 {
            if fives == 0 {
                return false
            }

            fives--
            tens++
        } else if b == 20 {
            if fives >= 1 && tens >= 1 {
                fives--
                tens--
            } else if fives >= 3 {
                fives -= 3
            } else {
                return false
            }
        } else {
            fives++
        }
    }

    return true
}