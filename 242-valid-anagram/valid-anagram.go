func isAnagram(s string, t string) bool {
   if len(s) != len(t) {
    return false
   } 

   counterS := map[byte]int{}
   counterT := map[byte]int{}

    for i := 0; i < len(s); i++ {
        valS, existS := counterS[s[i]]
        valT, existT := counterT[t[i]]

        if existS {
            counterS[s[i]] = valS + 1
        } else {
            counterS[s[i]] = 1
        }

        if existT {
            counterT[t[i]] = valT + 1
        } else {
            counterT[t[i]] = 1
        }
    }

    for k,v := range counterS {
        if counterT[k] != v {
            return false
        }
    }

    return true
}