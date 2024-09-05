import (
    "fmt"
)
type Coor [2]int

func robotSim(commands []int, obstacles [][]int) int {
   dir := [4][2]int{{0,1}, {1,0}, {0, -1}, {-1, 0}}
   obsMap := make(map[Coor]bool, len(obstacles))
   d := 0 // North
   maxDist := 0
   x, y := 0, 0

   for _, o := range obstacles {
    obsMap[Coor{o[0], o[1]}] = true
   }

    fmt.Println(obsMap)
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
    fmt.Println(currDir)
    for i := 0; i < c; i++ {
        x += currDir[0]
        y += currDir[1]
        if _, blocked := obsMap[Coor{x,y}]; blocked {
            x -= currDir[0]
            y -= currDir[1]
            break
        }
        dist := x * x + y * y 
        fmt.Println("Dist: ", dist)
        if dist > maxDist {
            maxDist = dist
        }
    }

   }
   
    return maxDist
}