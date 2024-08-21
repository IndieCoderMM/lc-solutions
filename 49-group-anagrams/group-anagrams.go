import (
    "sort"
)

func groupAnagrams(strs []string) [][]string {
    groups := make(map[string][]string)

    for _, s := range strs {
       b := []byte(s)
       sortBytes(b) 
       key := string(b)
       groups[key] = append(groups[key], s)
    }

    values := [][]string{}
    for _, v := range groups {
        values = append(values, v)
    }

    return values 
}

func sortBytes(bytes []byte) {
    sort.Slice(bytes, func (i, j int) bool {
        return bytes[j] > bytes[i]
    })
}