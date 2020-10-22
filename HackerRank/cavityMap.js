function cavityMap(grid) {
    for (let i = 1 ; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            let val = grid[i][j]
            if(val > grid[i-1][j] && val > grid[i+1][j] && val > grid[i][j-1] && val > grid[i][j+1]) {
                grid[i] = grid[i].slice(0,j) + 'X' + grid[i].slice(j+1)
            }
        }
    }
    return grid
}
