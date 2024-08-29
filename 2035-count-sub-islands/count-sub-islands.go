func countSubIslands(grid1 [][]int, grid2 [][]int) int {
    paths := make([][]bool, len(grid2))
    var ans int = 0

    for i := range grid2 {
        for j := 0; j <= len(grid2[i]) - 1; j++ {
            paths[i] = append(paths[i], false)
        }
    }

    var travel func(x, y int, isValid *bool) 

    travel = func(x, y int, isValid *bool) {
        if y < 0 || x < 0 {
            return 
        }
        if  y >= len(grid2) || x >= len(grid2[y]) {
            return
        }
        if grid2[y][x] == 0 {
            return
        }
        if paths[y][x] {
            return
        }

        if grid1[y][x] == 0 {
            *isValid = false
        }

        paths[y][x] = true

        travel(x+1, y,  isValid)
        travel(x-1, y,  isValid)
        travel(x, y+1,  isValid)
        travel(x, y-1,  isValid)
    }

    for y, row := range grid2 {
        for x, v := range row {
            if v == 0 {
                continue
            }
            if paths[y][x] {
                continue
            }
            isValid := true
            travel(x, y, &isValid)
            if isValid {
                ans++
            }
        }
    }

    return ans
}

// Grid 1                  Grid 2 
// [1,1,1,1,0,0],           [1,1,1,1,0,1],
// [1,1,0,1,0,0],           [0,0,1,0,1,0]
// [1,0,0,1,1,1],           [1,1,1,1,1,1],    
// [1,1,1,0,0,1],           [0,1,1,1,1,1],
// [1,1,1,1,1,0],           [1,1,1,0,1,0],
// [1,0,1,0,1,0],           [0,1,1,1,1,1],
// [0,1,1,1,0,1],           [1,1,0,1,1,1],
// [1,0,0,0,1,1],           [1,0,0,1,0,1],
// [1,0,0,0,1,0],           [1,1,1,1,1,1],
// [1,1,1,1,1,0]            [1,0,0,1,0,0]

// 1 [{0 0} {1 0} {2 0} {3 0} {2 1} {2 2} {3 2} {4 2} {5 2} {5 3} {4 3} {4 4} {4 5} {5 5} {5 6} {5 7} {5 8} {4 6} {3 3} {2 3} {2 4} {2 5} {3 5} {3 6} {3 7} {3 8} {4 8} {3 9}] 
// 2 [{5 0}] [{4 1}] [{0 2} {1 2} {1 3} {1 4} {1 5} {1 6}] [{0 4}] 
// 3 [{0 6} {0 7} {0 8} {1 8} {2 8} {0 9}]]