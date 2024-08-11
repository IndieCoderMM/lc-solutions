/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    const [ROWS, COLS] = [grid.length, grid[0].length] 

    const dfs = (r, c, visited) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS) return 

        if (visited[r][c] || !grid[r][c]) return

        visited[r][c] = true
        dfs(r-1, c, visited)
        dfs(r+1, c, visited)
        dfs(r, c-1, visited)
        dfs(r, c+1, visited)
    } 

    const countIslands = () => {
        const visited = Array.from({length: ROWS}, () => Array(COLS).fill(false))
        let count = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (!grid[r][c] || visited[r][c]) continue
                count++;
                dfs(r, c, visited); 
            }
        } 

        return count;
    }

    const initialIslands = countIslands();

    if (initialIslands > 1 || initialIslands === 0) return 0;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (!grid[r][c]) continue;

            grid[r][c] = 0;

            const islands = countIslands();

            if (islands !== 1) return 1;

            grid[r][c] = 1;
        }
    }

    return 2;
};