import (
    "fmt"
)

func robotSim(commands []int, obstacles [][]int) int {
   dir := [4][2]int{{0,1}, {1,0}, {0, -1}, {-1, 0}}
   obsMap := make(map[string]bool, len(obstacles))
   d := 0 // North
   maxDist := 0
   x, y := 0, 0

   for _, o := range obstacles {
    k := fmt.Sprintf("%d-%d", o[0], o[1])
    obsMap[k] = true
   }

   for _, c := range commands {
    if c == -1 {
        d += 1
        d %= 4
        continue
    } else if c == -2 {
        d -= 1
        if d < 0 {
            d = 3
        }
        continue
    }

    currDir := dir[d]
    for i := 0; i < c; i++ {
        x += currDir[0]
        y += currDir[1]
        k := fmt.Sprintf("%d-%d", x, y)
        if _, blocked := obsMap[k]; blocked {
            x -= currDir[0]
            y -= currDir[1]
            break
        }
        dist := x * x + y * y 
        if dist > maxDist {
            maxDist = dist
        }
    }
   }
   
    return maxDist
}