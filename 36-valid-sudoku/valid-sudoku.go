import (
    "slices"
    "fmt"
)

func isValidSudoku(board [][]byte) bool {
    colMap := map[int][]byte{}
    sqMap := map[[2]int][]byte{}

    for r := 0; r < len(board); r++ {
        row := []byte{}
        for c := 0; c < len(board[0]); c++ {
            num := board[r][c]
            if num == '.' {
                continue
            }
            col := colMap[c]

            rowDupe := slices.Contains(row,num)
            if rowDupe {
                return false
            } 

            colDupe := slices.Contains(col, num) 
            if colDupe {
                return false
            }

            sqRow := r / 3
            sqCol := c / 3
            sq := sqMap[[2]int{sqRow, sqCol}]
            sqDupe := slices.Contains(sq, num)
            if sqDupe {
                return false
            }

            row = append(row, num)
            colMap[c] = append(col, num)
            sqMap[[2]int{sqRow, sqCol}] = append(sq, num)
            fmt.Println(sqMap)
        }
    }

    return true
}