import (
    "math"
)

func stoneGameII(piles []int) int {
   var play func(i, M int, isMax bool) int 
   LEN := len(piles)

    dp := make([][][]int, 2)

    for i := range dp {
        dp[i] = make([][]int, LEN + 1)
        for j := range dp[i] {
            dp[i][j] = make([]int, LEN) 
            for z := range dp[i][j] {
                dp[i][j][z] = -1
            }
        }
    }

   play = func (i, M int, isMax bool) int {
    if i == LEN {
        return 0
    }

    b := 0
    if isMax {
        b = 1
    }

    if dp[b][M][i] != -1 {
        return dp[b][M][i]
    } 

    res := 0
    if !isMax {
        res = math.MaxInt32
    }
    // Total score
    total := 0

    for t := 1; t <= 2 * M; t++ {
        curr := i + t - 1;
        if curr == LEN {
            break
        }

        total += piles[curr]
        nextTurn := play(i + t, max(M, t), !isMax)
        if isMax {
            res = max(res, total + nextTurn) 
        } else {
            res = min(res, nextTurn) 
        } 
    } 

    dp[b][M][i] = res

    return res
   }

   return play(0, 1, true) 
}