/**
 * Iterative Tree Maximum Depth
 * Calculates the depth of the tree using a manual stack to track levels.
 * 
 * @param {Object} node - The root node of the tree.
 * @returns {number} - The maximum depth found.
 */
function iterativeMaxDepth(node) {
    if (!node) return 0;

    let maxDepth = 0;
    // We store an object carrying the node AND its current depth
    const stack = [{ node, depth: 1 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        // Update the maximum depth seen so far
        maxDepth = Math.max(maxDepth, depth);

        // Each child is 1 level deeper than its parent
        if (node.children) {
            for (const child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return maxDepth;
}

return iterativeMaxDepth(tree);
