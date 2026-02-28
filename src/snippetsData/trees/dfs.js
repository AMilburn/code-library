// Depth-First Search (DFS) explores as far down a branch as possible before backtracking.
// Best used when you want to visit every node, find all paths, or if the target is likely deep.
function dfs(node, target, visited = new Set()) {
    if (!node) return null;

    visited.add(node.id);
    console.log(`Visited: ${node.value}`);

    if (node.value === target) {
        console.log(`Found target: ${node.value} at ID: ${node.id}`);
        return { found: true, node: node };
    }

    if (node.children) {
        for (const child of node.children) {
            if (!visited.has(child.id)) {
                const found = dfs(child, target, visited);
                if (found) return found;
            }
        }
    }

    return null;
}

const result = dfs(tree, targetValue);
if (!result) {
    console.log(`Target ${targetValue} not found.`);
    return { found: false, node: null };
}
return result;
