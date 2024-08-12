func containsDuplicate(nums []int) bool {
    counter := map[int]int{}

    for _, n := range nums {
       _, exist := counter[n]

       if exist{
        return true
       } 

       counter[n] = 1
    }

    return false
}