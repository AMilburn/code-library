/**
 * PROBLEM: Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), 
 * return the number of islands. An island is surrounded by water and is formed by connecting 
 * adjacent lands horizontally or vertically.
 * 
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    // define directions (up, down, left, right)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islands++;
                const queue = [[r, c]];
                grid[r][c] = "0"; // mark visited

                while (queue.length > 0) {
                    const [currR, currC] = queue.shift();

                    for (const [dr, dc] of directions) {
                        const newR = currR + dr;
                        const newC = currC + dc;

                        if (newR >= 0 && newR < rows && newC >= 0 && newC < cols && grid[newR][newC] === "1") {
                            grid[newR][newC] = "0"; // mark visited
                            queue.push([newR, newC]);
                        }
                    }
                }
            }
        }
    }
    return islands;
}

return numIslands(grid);
