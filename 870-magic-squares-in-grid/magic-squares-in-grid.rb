# @param {Integer[][]} grid
# @return {Integer}
def num_magic_squares_inside(grid)
    rows = grid.length
    cols = grid[0].length
    ans = 0

    def magic?(row, col, grid)
        set = []
        (row..row+2).each do |r|
            (col..col+2).each do |c|
                if set.include?(grid[r][c]) || grid[r][c] < 1 || grid[r][c] > 9
                    return false
                else 
                    set << grid[r][c]
                end
            end
        end

        (row..row+2).each do |r|
            return false if grid[r][col..col+2].sum != 15
        end

        (col..col+2).each do |c|
            return false if grid[row][c] + grid[row+1][c] + grid[row+2][c] != 15
        end

        return false if grid[row][col] + grid[row+1][col+1] + grid[row+2][col+2] != 15
        
        return false if grid[row][col+2] + grid[row+1][col+1] + grid[row+2][col] != 15

        true
    end


    (0...rows-2).each do |r|
        (0...cols-2).each do |c|
            ans += 1 if magic?(r,c,grid)
        end
    end

    return ans
end