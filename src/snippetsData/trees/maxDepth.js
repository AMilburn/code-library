/**
 * PROBLEM: Find the Maximum Depth of a Tree.
 * The depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * @param {Object} node - The root node of the tree.
 * @returns {number} - The maximum depth.
 */
function findMaxDepth(node) {
    // Base Case: empty node means depth of 0
    if (!node) return 0;

    // Recursive Step: If there are children, find the max depth among them
    let maxDepth = 0;

    if (node.children && node.children.length > 0) {
        for (const child of node.children) {
            maxDepth = Math.max(maxDepth, findMaxDepth(child));
        }
    }

    // Return current node (1) + whatever the deepest child branch was
    return 1 + maxDepth;
}

return findMaxDepth(tree);
