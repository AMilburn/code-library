// Breadth-First Search (BFS) explores a tree level by level.
// Best used when you want to find the shortest path or closely related nodes.
function bfs(node, target) {
    if (!node) return null;

    // Use array to simulate a queue
    const queue = [node];
    const visited = new Set();

    while (queue.length > 0) {
        const current = queue.shift();

        // Check if we found the target
        if (current.value === target) {
            console.log(`Found target: ${current.value} at ID: ${current.id}`);
            return { found: true, node: current };
        }

        visited.add(current.id);
        console.log(`Visited: ${current.value}`);

        // Add children to queue for next level
        if (current.children) {
            for (const child of current.children) {
                if (!visited.has(child.id)) {
                    queue.push(child);
                }
            }
        }
    }

    console.log(`Target ${target} not found.`);
    return { found: false, node: null };
}

return bfs(tree, targetValue);
