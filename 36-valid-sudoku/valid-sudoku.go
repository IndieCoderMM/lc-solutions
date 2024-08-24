func isValidSudoku(board [][]byte) bool {
    columns := [9]map[byte]bool{}
    squares := [9]map[byte]bool{}

    for i := 0; i < 9; i++ {
        columns[i] = map[byte]bool{}
        squares[i] = map[byte]bool{}
    }

    for r := 0; r < len(board); r++ {
        row := map[byte]bool{} 
        for c := 0; c < len(board[0]); c++ {
            num := board[r][c]
            if num == '.' {
                continue
            }
            _, rowDupe := row[num] 
            if rowDupe {
                return false
            } 
            
            col := columns[c]
            _, colDupe := col[num] 
            if colDupe {
                return false
            }

            sqRow := (r / 3) * 3
            sqCol := c / 3
            sq := squares[sqRow + sqCol]

            _, sqDupe := sq[num]
            if sqDupe {
                return false
            }

            row[num] = true
            col[num] = true 
            sq[num] = true 
        }
    }

    return true
}