func isValid(s string) bool {
    brackets := map[string]string{")":"(", "}":"{", "]":"["}    
    stack := []string{}
    for _, r := range s {
        c := string(r)
        v, ok := brackets[c]
        if !ok {
            stack = append(stack, c)
        } else {
            if len(stack) == 0 {
                return false
            }
            
            last := stack[len(stack)-1]
            if last != v {
                return false
            }
            stack = stack[:len(stack)-1]
        } 
    }

    return len(stack) == 0
}